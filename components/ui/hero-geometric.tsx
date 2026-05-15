"use client";

/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useThree, ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Numbers } from "@/components/numbers/Numbers";
import { TextAnimate } from "@/components/ui/text-animate";

/* eslint-disable @typescript-eslint/no-namespace */
declare module "react" {
    namespace JSX {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface IntrinsicElements extends ThreeElements { }
    }
}
/* eslint-enable @typescript-eslint/no-namespace */

// --- Shader Code ---
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float bayerDither4x4(vec2 uv) {
    int x = int(mod(uv.x, 4.0));
    int y = int(mod(uv.y, 4.0));
    
    int matrix[16];
    matrix[0] = 0; matrix[1] = 8; matrix[2] = 2; matrix[3] = 10;
    matrix[4] = 12; matrix[5] = 4; matrix[6] = 14; matrix[7] = 6;
    matrix[8] = 3; matrix[9] = 11; matrix[10] = 1; matrix[11] = 9;
    matrix[12] = 15; matrix[13] = 7; matrix[14] = 13; matrix[15] = 5;
    
    return float(matrix[y * 4 + x]) / 16.0;
}

void main() {
    vec2 uv = vUv;
    vec2 coord = gl_FragCoord.xy;
    
    // Enhanced noise with time
    float noise = snoise(uv * 1.5 + vec2(uTime * 0.05, uTime * 0.03)) * 0.25;

    // Diagonal gradient from bottom-left to top-right
    float diagonal = (uv.x + uv.y) * 0.5;
    
    // Combine for gradient - emphasize corners
    float gradient = diagonal * 1.2 + noise;
    
    // Interpolate colors based on gradient
    vec3 deepBlue = uColor1;
    vec3 paleBlue = uColor2;
    vec3 softBlue = mix(deepBlue, paleBlue, 0.33);
    vec3 lightBlue = mix(deepBlue, paleBlue, 0.66);
    
    // Map to colors with more distinct steps
    vec3 color;
    if (gradient < 0.3) {
        color = deepBlue;
    } else if (gradient < 0.55) {
        color = softBlue;
    } else if (gradient < 0.8) {
        color = lightBlue;
    } else {
        color = paleBlue;
    }
    
    // Enhanced dithering at boundaries
    float dither = bayerDither4x4(coord);
    float threshold = fract(gradient * 4.0);
    
    if (gradient < 0.3 && threshold > dither * 0.5) {
        color = softBlue;
    } else if (gradient >= 0.3 && gradient < 0.55 && threshold > dither * 0.5) {
        color = lightBlue;
    } else if (gradient >= 0.55 && gradient < 0.8 && threshold > dither * 0.5) {
        color = paleBlue;
    }
    
    // Softer fade to white - only at extreme bottom-left
    vec2 cornerDist = vec2(uv.x, uv.y);
    float fadeMask = smoothstep(0.0, 0.25, length(cornerDist));
    color = mix(vec3(1.0), color, fadeMask);
    
    // Add subtle vignette to emphasize corners
    float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
    color = mix(color, color * 0.95, (1.0 - vignette) * 0.3);
    
    gl_FragColor = vec4(color, 1.0);
}
`;

const GradientPlane = ({
    color1,
    color2,
    speed = 1
}: {
    color1: string;
    color2: string;
    speed?: number
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const gl = useThree((s) => s.gl);
    const scene = useThree((s) => s.scene);
    const camera = useThree((s) => s.camera);
    const size = useThree((s) => s.size);
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(1000, 1000) },
            uColor1: { value: new THREE.Color(color1) },
            uColor2: { value: new THREE.Color(color2) },
        }),
        [color1, color2]
    );

    useEffect(() => {
        uniforms.uResolution.value.set(size.width, size.height);
    }, [size, uniforms]);

    useEffect(() => {
        let raf = 0;
        const t0 = performance.now();
        const tick = () => {
            const t = (performance.now() - t0) / 1000;
            const mat = meshRef.current?.material as THREE.ShaderMaterial | undefined;
            if (mat?.uniforms) {
                mat.uniforms.uTime.value = t * speed;
                mat.uniforms.uColor1.value.set(color1);
                mat.uniforms.uColor2.value.set(color2);
                mat.uniformsNeedUpdate = true;
            }
            if (gl && scene && camera) {
                gl.render(scene, camera);
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [gl, scene, camera, speed, color1, color2]);

    return (
        <mesh ref={meshRef} scale={[2, 2, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
};

// --- Main Component ---

interface HeroGeometricProps {
    title1?: string;
    title2?: string;
    description?: string;
    className?: string; // Explicitly included
    color1?: string;
    color2?: string;
    speed?: number;
}

export default function HeroGeometric({
    title1,
    title2,
    description,
    color1 = "#3B82F6", // Default soft blue
    color2 = "#F0F9FF", // Default pale blue
    speed = 1,
    className,
}: HeroGeometricProps) {
    return (
        <div
            className={cn("relative w-full min-h-screen flex flex-col items-center", className)}
            style={{
                containerType: "size",
                overflow: "visible",
                background: "var(--bg)",
                color: "var(--fg)",
            }}
        >
            {/* Background Shader — extends 50vh below hero into next section, fades there */}
            <div
                className="absolute left-0 right-0 z-0 pointer-events-none"
                style={{
                    top: 0,
                    height: "150vh",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                }}
            >
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1]}
                    frameloop="always"
                    gl={{
                        antialias: false,
                        alpha: true,
                    }}
                >
                    <GradientPlane color1={color1} color2={color2} speed={speed} />
                </Canvas>
            </div>

            {/* Content — centered in 100vh hero */}
            {(title1 || title2 || description) && (
                <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-8 pb-8 md:pt-20 md:pb-20">
                    <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
                        {/* Headline */}
                        <div className="flex flex-col items-center text-center gap-0 -space-y-6 md:-space-y-10 mb-8 md:mb-12">
                            {title1 && (
                                <div className="overflow-hidden">
                                    <motion.h1
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                        className="text-[18cqi] md:text-[14cqi] lg:text-[11cqi] leading-[0.9] tracking-tighter font-bold"
                                        style={{
                                            color: "var(--fg)",
                                            fontFamily: "var(--font-stack-sans), sans-serif",
                                        }}
                                    >
                                        {title1}
                                    </motion.h1>
                                </div>
                            )}
                            {title2 && (
                                <TextAnimate
                                    as="h1"
                                    animation="blurInUp"
                                    by="character"
                                    once
                                    delay={0.35}
                                    className="text-[8cqi] md:text-[5cqi] lg:text-[3.5cqi] leading-[1] tracking-[0.05em] font-light"
                                    style={{
                                        color: "var(--fg)",
                                        opacity: 0.85,
                                        fontFamily: "var(--font-stack-sans), sans-serif",
                                    }}
                                >
                                    {title2}
                                </TextAnimate>
                            )}
                        </div>

                        {/* Description (below title) */}
                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                className="text-lg md:text-[1.35rem] leading-relaxed font-normal"
                                style={{
                                    color: "var(--fg)",
                                    opacity: 0.7,
                                    maxWidth: 480,
                                    textAlign: "center",
                                    margin: 0,
                                    marginTop: "clamp(8px, 1.5vw, 16px)",
                                    padding: "0 clamp(16px, 4vw, 32px)",
                                }}
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>
                </div>
            )}

            {/* Feature chips (above scroll hint) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: "clamp(16px, 2vw, 24px)",
                    padding: "0 clamp(16px, 4vw, 32px)",
                }}
            >
                {[
                    { en: "Digital cards", cn: "数字名片" },
                    { en: "Company profiles", cn: "公司主页" },
                    { en: "AR catalogues", cn: "AR 目录" },
                    { en: "Buyer analytics", cn: "实时分析" },
                ].map((chip) => (
                    <span
                        key={chip.en}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "8px 14px",
                            borderRadius: 999,
                            border: "1px solid var(--hairline)",
                            background: "transparent",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
                            fontWeight: 500,
                            color: "var(--fg)",
                            letterSpacing: "0.04em",
                        }}
                    >
                        <span>{chip.en}</span>
                        <span className="cn-text" lang="zh" style={{ opacity: 0.45 }}>
                            {chip.cn}
                        </span>
                    </span>
                ))}
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: "clamp(16px, 2vw, 24px)",
                    color: "var(--fg)",
                }}
            >
                <span
                    style={{
                        fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
                        fontWeight: 600,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        opacity: 0.5,
                    }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: 18,
                        height: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0.55,
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Stats strip pinned to hero bottom */}
            <div className="relative z-10 w-full">
                <Numbers />
            </div>
        </div>
    );
}
