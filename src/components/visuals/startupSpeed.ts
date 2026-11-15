const VERTEX = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`

const FRAGMENT = `
precision highp float;
uniform vec2 resolution;
uniform float time;

float hash(float n) { return fract(sin(n * 127.1) * 43758.5453); }

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float x = uv.x;
  float glow = 0.0;
  float core = 0.0;
  float pixel = 1.0 / resolution.y;

  // A fan of individual light filaments converges into the distance.
  // No solid road, outlines, lane markings or repeating geometric rails.
  for (int i = 0; i < 34; i++) {
    float seed = float(i);
    float h = hash(seed + 3.0);
    float spread = mix(0.19, 0.035, pow(x, 0.8));
    float curve = 0.018 + 0.53 * x - 0.18 * x * x;
    curve += (h - 0.5) * spread;
    curve += sin(x * 4.5 + seed * 0.27) * (0.003 + 0.006 * h);
    float distance = abs(uv.y - curve);
    float width = max(pixel * 0.5, mix(0.0015, 0.00045, x) * (0.5 + h));
    float phase = fract(x * (0.65 + h) - time * (0.16 + h * 0.16) + h);
    float pulse = exp(-pow((phase - 0.5) / (0.05 + h * 0.16), 2.0));
    float brightness = 0.11 + pulse * (0.8 + h * 0.5);
    core += exp(-pow(distance / width, 2.0)) * brightness;
    glow += exp(-pow(distance / (width * 8.0 + 0.004), 2.0)) * brightness * 0.10;
  }

  // Very faint oblique streaks give the surrounding air a sense of motion.
  float air = 0.0;
  for (int j = 0; j < 9; j++) {
    float seed = float(j);
    float y = 0.26 + x * 0.34 + seed * 0.057;
    float d = abs(uv.y - y);
    float pulse = pow(max(0.0, sin(x * 5.0 - time * 0.65 + seed * 2.3)), 12.0);
    air += exp(-d * d / 0.000002) * pulse * 0.07;
  }

  float mask = smoothstep(0.0, 0.18, x) * (1.0 - smoothstep(0.55, 0.85, uv.y));
  float energy = (core + glow) * mask;
  float alpha = clamp(energy * 0.62 + air, 0.0, 0.93);
  vec3 amber = vec3(1.0, 0.40, 0.035);
  vec3 ivory = vec3(1.0, 0.96, 0.78);
  vec3 color = mix(amber, ivory, smoothstep(0.65, 1.8, core));
  gl_FragColor = vec4(color, alpha);
}
`

/** Decorative light trails; animate only while visible. */
export function mountStartupSpeed(container: HTMLElement) {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('aria-hidden', 'true')
  canvas.style.cssText = 'display:block;width:100%;height:100%'
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false })
  if (!gl) return
  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type)!
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader)
      return null
    }
    return shader
  }
  const vertex = compile(gl.VERTEX_SHADER, VERTEX)
  const fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT)
  if (!vertex || !fragment) return
  const program = gl.createProgram()!
  gl.attachShader(program, vertex)
  gl.attachShader(program, fragment)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
  gl.useProgram(program)
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  const resolution = gl.getUniformLocation(program, 'resolution')
  const time = gl.getUniformLocation(program, 'time')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let visible = false
  let frame = 0
  const start = performance.now()
  container.append(canvas)
  const render = (seconds: number) => {
    gl.uniform1f(time, seconds)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }
  const resize = () => {
    const ratio = Math.min(devicePixelRatio || 1, 1.5)
    canvas.width = Math.round(container.clientWidth * ratio)
    canvas.height = Math.round(container.clientHeight * ratio)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(resolution, canvas.width, canvas.height)
    render(6)
  }
  const stop = () => { cancelAnimationFrame(frame); frame = 0 }
  const loop = (now: number) => {
    if (!visible || document.hidden || reduceMotion.matches) { frame = 0; return }
    render((now - start) / 1000)
    frame = requestAnimationFrame(loop)
  }
  const update = () => {
    if (reduceMotion.matches) { stop(); render(6); return }
    if (!visible || document.hidden) { stop(); return }
    if (!frame) frame = requestAnimationFrame(loop)
  }
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update() })
  const resizeObserver = new ResizeObserver(resize)
  resize()
  observer.observe(container)
  resizeObserver.observe(container)
  reduceMotion.addEventListener('change', update)
  document.addEventListener('visibilitychange', update)
  return () => {
    stop()
    observer.disconnect()
    resizeObserver.disconnect()
    reduceMotion.removeEventListener('change', update)
    document.removeEventListener('visibilitychange', update)
    gl.deleteBuffer(buffer)
    gl.deleteShader(vertex)
    gl.deleteShader(fragment)
    gl.deleteProgram(program)
    canvas.remove()
  }
}
