import { useEffect, useRef } from 'react'

/**
 * Siri-style fluid orb, warm brand palette, raw WebGL fragment shader.
 *
 * Animation API — built for future audio hookup:
 * - mode="passive"   gentle drifting flow (idle launcher).
 * - mode="speaking"  turbulence scales with `level` (0..1, e.g. mic/tts
 *   volume): louder → faster, more entropic. Without `level` it
 *   self-oscillates to fake a voice rhythm.
 * - mode="thinking"  a comet of light orbits the rim while the flow slows.
 *
 * Uniforms lerp toward their targets every frame, so switching modes or
 * feeding a live level never snaps. Honours prefers-reduced-motion with a
 * static frame.
 */

export type OrbMode = 'passive' | 'speaking' | 'thinking'

const FRAG = /* glsl */ `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform float uAmp;    /* 0..1 activity: speed + turbulence + breathing */
uniform float uThink;  /* 0..1 thinking blend: orbiting comet + slow swirl */

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y);
  uv /= 0.80; /* leave canvas margin for the outer glow */

  float t = uTime;
  float amp = uAmp;

  /* breathing: subtle at rest, stronger + faster when loud */
  float breathe = 1.0 + (0.015 + amp * 0.06) * sin(t * (1.2 + amp * 5.0));
  float r = length(uv) / breathe;
  float ang = atan(uv.y, uv.x);

  /* swirling domain: thinking adds a steady rotation */
  float swirl = t * 0.12 + uThink * t * 0.9 + amp * 0.35 * sin(t * 2.0);
  float cs = cos(swirl), sn = sin(swirl);
  vec2 p = mat2(cs, -sn, sn, cs) * uv;

  float ts = t * (0.35 + amp * 2.2);
  float n1 = fbm(p * 1.7 + vec2(ts * 0.30, -ts * 0.22));
  float n2 = fbm(p * 3.1 + vec2(-ts * 0.17, ts * 0.26) + n1 * 1.5);
  float field = n1 * 0.65 + n2 * 0.55 + amp * 0.25 * sin(ang * 3.0 + t * 6.0);

  /* warm brand ramp: near-black ember -> orange -> amber, magenta accent */
  vec3 base    = vec3(0.07, 0.03, 0.02);
  vec3 ember   = vec3(0.45, 0.12, 0.04);
  vec3 orange  = vec3(1.00, 0.45, 0.10);
  vec3 amber   = vec3(1.00, 0.78, 0.34);
  vec3 magenta = vec3(0.80, 0.22, 0.42);

  float k = clamp(field, 0.0, 1.2);
  vec3 col = mix(base, ember, smoothstep(0.08, 0.35, k));
  col = mix(col, orange, smoothstep(0.35, 0.62, k));
  col = mix(col, amber, smoothstep(0.66, 0.92, k));
  col = mix(col, magenta, smoothstep(0.50, 0.90, n2) * 0.35);

  /* inner luminosity: hot areas actually emit */
  col += orange * pow(max(k - 0.3, 0.0), 2.0) * 0.55;

  /* glassy depth: offset dark pupil, softer */
  col *= 1.0 - 0.38 * smoothstep(0.55, 0.0, distance(uv, vec2(0.18, -0.22)));

  /* rim light — the glowing glass edge from the reference */
  float rim = smoothstep(0.55, 0.98, r);
  col += vec3(1.0, 0.55, 0.25) * pow(rim, 2.5) * (0.85 + amp * 0.6);
  col += vec3(1.0, 0.85, 0.55) * pow(smoothstep(0.80, 1.0, r), 4.0) * 0.8;

  /* top-left gloss */
  col += vec3(1.0, 0.90, 0.80) * 0.35 * pow(smoothstep(0.55, 0.05, distance(uv, vec2(-0.28, 0.50))), 2.0);

  /* thinking: comet with a fading tail orbiting at r~0.7 */
  float lap = fract(ang / 6.2831853 - t * 0.55);
  float ring = exp(-pow((r - 0.70) / 0.10, 2.0));
  col += vec3(1.0, 0.75, 0.40) * uThink * ring * exp(-lap * 5.0) * 0.9;

  /* soft edge + outer glow */
  float alpha = 1.0 - smoothstep(0.90, 1.0, r);
  float glow = exp(-pow(max(r - 0.92, 0.0) * 4.0, 1.4)) * (0.30 + amp * 0.35);
  glow *= step(0.90, r);
  vec3 glowC = vec3(1.0, 0.45, 0.15);

  vec3 outCol = col * alpha + glowC * glow;
  gl_FragColor = vec4(outCol, min(alpha + glow, 1.0));
}
`

const VERT = /* glsl */ `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`

interface SiriOrbProps {
  size?: number
  mode?: OrbMode
  /** 0..1 — future audio level; only used in "speaking" mode */
  level?: number
  className?: string
}

export function SiriOrb({ size = 64, mode = 'passive', level, className }: SiriOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Live-updated refs so the RAF loop reads fresh values without re-init.
  const stateRef = useRef({ mode, level })
  stateRef.current = { mode, level }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(s) ?? 'orb shader error')
      }
      return s
    }

    let program: WebGLProgram
    try {
      program = gl.createProgram()!
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT))
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG))
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('link')
    } catch (err) {
      console.warn('SiriOrb: WebGL init failed', err)
      return
    }
    gl.useProgram(program)

    const quad = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, quad)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const locPos = gl.getAttribLocation(program, 'aPos')
    gl.enableVertexAttribArray(locPos)
    gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'uRes')
    const uTime = gl.getUniformLocation(program, 'uTime')
    const uAmp = gl.getUniformLocation(program, 'uAmp')
    const uThink = gl.getUniformLocation(program, 'uThink')

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let amp = 0.12
    let think = 0
    let raf = 0
    const t0 = performance.now()

    const render = (now: number) => {
      const t = (now - t0) / 1000
      const { mode: m, level: lv } = stateRef.current

      // speaking without an explicit level fakes a voice rhythm
      const voice = lv ?? Math.abs(Math.sin(t * 3.7)) * 0.6 + Math.abs(Math.sin(t * 1.3)) * 0.4
      const targetAmp = m === 'speaking' ? 0.35 + 0.65 * Math.min(Math.max(voice, 0), 1)
        : m === 'thinking' ? 0.22
        : 0.18
      const targetThink = m === 'thinking' ? 1 : 0

      amp += (targetAmp - amp) * 0.08
      think += (targetThink - think) * 0.06

      gl.uniform1f(uTime, t)
      gl.uniform1f(uAmp, amp)
      gl.uniform1f(uThink, think)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    if (reduceMotion) {
      render(t0 + 4000)
    } else {
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop)
        if (document.hidden) return
        render(now)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      gl.deleteBuffer(quad)
      gl.deleteProgram(program)
    }
  }, [size])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={className}
      aria-hidden="true"
    />
  )
}
