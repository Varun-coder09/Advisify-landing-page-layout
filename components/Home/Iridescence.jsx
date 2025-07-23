'use client';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import './Iridescence.css';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }

  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [0.0, 0.501, 0.609],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}) {
  const ctnRef = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const ctn = ctnRef.current;
    const renderer = new Renderer({ dpr: 1 });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program;

    const resize = () => {
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uMouse: { value: new Float32Array([mouse.current.x, mouse.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let frameId;
    const animate = (t) => {
      frameId = requestAnimationFrame(animate);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };
    frameId = requestAnimationFrame(animate);
    ctn.appendChild(gl.canvas);

    const handleMouse = (e) => {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouse.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    };

    if (mouseReact) {
      ctn.addEventListener('mousemove', handleMouse);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      if (mouseReact) ctn.removeEventListener('mousemove', handleMouse);
      ctn.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={ctnRef} className="iridescence-container" {...rest} />;
}
