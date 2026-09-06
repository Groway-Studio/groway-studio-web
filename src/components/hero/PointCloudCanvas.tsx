import { useEffect, useRef } from 'react'

/**
 * Animated point-cloud sphere rendered with raw WebGL (no dependencies).
 *
 * A lat/long grid of points on a sphere is displaced radially by 3D simplex
 * noise in the vertex shader, then coloured by the displacement amount
 * (deep blue valleys -> magenta -> orange/amber peaks) to match the brand.
 *
 * Performance & accessibility notes:
 * - Honours `prefers-reduced-motion`: renders a single static frame.
 * - Caps devicePixelRatio at 2 so it stays smooth on retina/mobile.
 * - Pauses the RAF loop while the canvas is scrolled out of view.
 */

const VERT = /* glsl */ `
precision highp float;

attribute vec3 aDir;
uniform float uTime;
uniform vec2  uMouse;
uniform mat4  uProj;
uniform float uPixelRatio;

varying float vNoise;
varying float vDepth;

vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p){
  float f = 0.0;
  f += 0.5000 * snoise(p);
  f += 0.2500 * snoise(p * 2.0);
  f += 0.1250 * snoise(p * 4.0);
  return f / 0.875;
}

mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.,0.,0., 0.,c,s, 0.,-s,c); }

void main(){
  // Coherent base shape with only slight per-region variation.
  vec3 region = aDir * 0.7;
  float vPhase = fbm(region + 42.7);
  float vSpeed = fbm(region + 11.3);

  float speed = 0.12 * (1.0 + vSpeed * 0.10);
  float phase = vPhase * 0.7;
  float ts = uTime * speed;

  float n = fbm(aDir * 1.6 + vec3(ts, ts * 0.7, -ts * 0.5) + phase);
  vNoise = n;

  float breathe = sin(uTime * 0.5) * 0.06;
  float disp = n * 0.42 + breathe;
  vec3 pos = aDir * (1.0 + disp);

  pos = rotY(uTime * 0.08 + uMouse.x * 0.55) * rotX(uMouse.y * 0.35 + sin(uTime*0.05)*0.1) * pos;

  vec4 mv = vec4(pos.xy, pos.z - 3.1, 1.0);
  gl_Position = uProj * mv;

  vDepth = smoothstep(-4.6, -1.8, mv.z);

  float size = (1.4 + n * 2.2) * uPixelRatio;
  gl_PointSize = size * (3.4 / -mv.z) * 1.6;
}
`

const FRAG = /* glsl */ `
precision highp float;

varying float vNoise;
varying float vDepth;

void main(){
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float alpha = smoothstep(0.5, 0.32, d);
  if (alpha < 0.01) discard;

  vec3 deep = vec3(0.16, 0.10, 0.85);
  vec3 mid  = vec3(0.80, 0.15, 0.55);
  vec3 hot  = vec3(1.00, 0.45, 0.10);
  vec3 peak = vec3(1.00, 0.80, 0.35);

  float k = clamp(vNoise * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(deep, mid, smoothstep(0.15, 0.45, k));
  col      = mix(col,  hot, smoothstep(0.45, 0.72, k));
  col      = mix(col,  peak, smoothstep(0.80, 0.98, k));

  col *= mix(0.25, 1.0, vDepth);
  gl_FragColor = vec4(col, alpha * mix(0.35, 1.0, vDepth));
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error(`Shader compile error: ${log}`)
  }
  return shader
}

function perspective(fovy: number, aspect: number, near: number, far: number): Float32Array {
  const f = 1 / Math.tan(fovy / 2)
  const nf = 1 / (near - far)
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ])
}

function buildSphere(lat: number, lon: number): Float32Array {
  const dirs = new Float32Array(lat * lon * 3)
  let ptr = 0
  for (let i = 0; i < lat; i++) {
    const phi = ((i + 0.5) / lat) * Math.PI
    for (let j = 0; j < lon; j++) {
      const theta = (j / lon) * Math.PI * 2
      dirs[ptr++] = Math.sin(phi) * Math.cos(theta)
      dirs[ptr++] = Math.cos(phi)
      dirs[ptr++] = Math.sin(phi) * Math.sin(theta)
    }
  }
  return dirs
}

export function PointCloudCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let program: WebGLProgram | null = null
    try {
      program = gl.createProgram()!
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT))
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG))
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) ?? 'link error')
      }
    } catch (err) {
      // Fail silently: the hero has a CSS gradient fallback behind the canvas.
      console.warn('PointCloudCanvas: WebGL init failed', err)
      return
    }
    gl.useProgram(program)

    // Fewer points on small screens keeps mobile GPUs comfortable.
    const dense = window.innerWidth >= 768
    const LAT = dense ? 160 : 110
    const LON = dense ? 260 : 170
    const dirs = buildSphere(LAT, LON)
    const COUNT = LAT * LON

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, dirs, gl.STATIC_DRAW)
    const locDir = gl.getAttribLocation(program, 'aDir')
    gl.enableVertexAttribArray(locDir)
    gl.vertexAttribPointer(locDir, 3, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'uTime')
    const uMouse = gl.getUniformLocation(program, 'uMouse')
    const uProj = gl.getUniformLocation(program, 'uProj')
    const uPR = gl.getUniformLocation(program, 'uPixelRatio')

    let pixelRatio = 1
    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.floor(w * pixelRatio)
      canvas.height = Math.floor(h * pixelRatio)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniformMatrix4fv(uProj, false, perspective(0.9, canvas.width / canvas.height, 0.1, 20))
      gl.uniform1f(uPR, pixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = 0, my = 0, tx = 0, ty = 0
    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1
      ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointer)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
    gl.disable(gl.DEPTH_TEST)
    gl.clearColor(0, 0, 0, 0)

    // Pause the loop when the hero scrolls off-screen.
    let visible = true
    const io = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting },
      { threshold: 0 },
    )
    io.observe(canvas)

    let raf = 0
    const t0 = performance.now()
    const render = (timeSec: number) => {
      mx += (tx - mx) * 0.04
      my += (ty - my) * 0.04
      gl.uniform1f(uTime, timeSec)
      gl.uniform2f(uMouse, mx, my)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.POINTS, 0, COUNT)
    }

    if (reduceMotion) {
      render(6.0) // one representative static frame
    } else {
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop)
        if (!visible) return
        render((now - t0) / 1000)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      io.disconnect()
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
