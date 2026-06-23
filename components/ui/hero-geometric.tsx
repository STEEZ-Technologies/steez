"use client";

/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useThree, useFrame, ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Numbers } from "@/components/numbers/Numbers";
import { usePreloader } from "@/components/preloader/PreloaderContext";
import { useI18n } from "@/lib/i18n/useI18n";
import { useIsMobile } from "@/lib/useIsMobile";

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
    const size = useThree((s) => s.size);
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(1000, 1000) },
            uColor1: { value: new THREE.Color(color1) },
            uColor2: { value: new THREE.Color(color2) },
        }),
        // intentionally only create once; live color updates handled in useFrame
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useEffect(() => {
        uniforms.uResolution.value.set(size.width, size.height);
    }, [size, uniforms]);

    useEffect(() => {
        uniforms.uColor1.value.set(color1);
        uniforms.uColor2.value.set(color2);
    }, [color1, color2, uniforms]);

    useFrame(({ clock }) => {
        const mat = meshRef.current?.material as THREE.ShaderMaterial | undefined;
        if (mat?.uniforms) {
            mat.uniforms.uTime.value = clock.getElapsedTime() * speed;
        }
    });

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
    const { done } = usePreloader();
    const { dict } = useI18n();
    const isMobile = useIsMobile();
    return (
        <div
            id="top"
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
                    dpr={isMobile ? [0.6, 1] : [1, 1]}
                    frameloop="always"
                    gl={{
                        antialias: false,
                        alpha: true,
                        powerPreference: "high-performance",
                    }}
                    performance={{ min: 0.3 }}
                >
                    <GradientPlane color1={color1} color2={color2} speed={isMobile ? speed * 0.6 : speed} />
                </Canvas>
            </div>

            {/* Content — centered and pushed up on mobile, bottom-left aligned on desktop */}
            {description && (
                <div className={cn("relative z-10 w-full flex-1 flex flex-col items-center md:pt-40 md:pb-8", isMobile ? "justify-center pt-20 pb-36" : "justify-end pt-24 pb-4")}>
                    <div
                        className={cn("w-full px-6 flex flex-col", isMobile ? "items-center" : "items-start")}
                        style={{
                            maxWidth: "min(75%, 1280px)",
                            gap: "clamp(20px, 2.5vw, 32px)",
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                            transition={{ duration: 0.9, delay: done ? 0.05 : 0, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                color: "var(--fg)",
                                fontSize: "clamp(2.6rem, min(6.5vw, 8.5vh), 5.5rem)",
                                lineHeight: 1.04,
                                letterSpacing: "-0.03em",
                                textAlign: isMobile ? "center" : "start",
                                margin: 0,
                                fontFamily: "var(--font-stack-sans), sans-serif",
                                textWrap: "balance",
                                fontWeight: 700,
                            }}
                        >
                            {(() => {
                                const m = description?.match(/^(.*?)(\s*[—–-]+\s*)(.*)$/);
                                if (!m) return description;
                                const [, head, dash, tail] = m;
                                return (
                                    <>
                                        {head}
                                        <span style={{ fontWeight: 300, opacity: 0.85 }}>
                                            {dash}{tail}
                                        </span>
                                    </>
                                );
                            })()}
                        </motion.p>
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 16 }}
                            animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            transition={{ duration: 0.7, delay: done ? 0.25 : 0, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "clamp(14px, 1.6vw, 20px) clamp(28px, 3vw, 44px)",
                                background: "#E0A93A",
                                color: "#1A1A1A",
                                borderRadius: 8,
                                fontWeight: 800,
                                fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                textDecoration: "none",
                                fontFamily: "var(--font-stack-sans), sans-serif",
                                minHeight: 52,
                                boxShadow: "0 18px 40px -18px rgba(224,169,58,0.55)",
                                marginTop: isMobile ? "clamp(60px, 15vw, 120px)" : "0",
                            }}
                        >
                            {dict.hero.getQuote}
                        </motion.a>

                        {/* Feature pills — under CTA, same left-aligned group */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            transition={{ duration: 0.7, delay: done ? 0.4 : 0, ease: "easeOut" }}
                            className="hidden md:flex"
                            style={{
                                display: isMobile ? "none" : "flex",
                                gap: 10,
                                flexWrap: "wrap",
                                justifyContent: "flex-start",
                            }}
                        >
                            {(["cards", "profiles", "catalogues", "booth"] as const).map((key) => (
                                <span
                                    key={key}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "7px 13px",
                                        borderRadius: 999,
                                        border: "1px solid var(--hairline)",
                                        background: "transparent",
                                        backdropFilter: "blur(4px)",
                                        WebkitBackdropFilter: "blur(4px)",
                                        fontSize: "clamp(0.56rem, 0.76vw, 0.66rem)",
                                        fontWeight: 500,
                                        color: "var(--fg)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {dict.hero.chips[key]}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Scroll hint — centered globally, sits just above stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: done ? 1 : 0 }}
                transition={{ duration: 0.8, delay: done ? 0.6 : 0 }}
                className="hidden md:flex flex-col items-center gap-2"
                style={{
                    position: "relative",
                    zIndex: 10,
                    marginTop: "clamp(12px, 1.6vw, 22px)",
                    marginBottom: "clamp(10px, 1.4vw, 18px)",
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

            {/* Stats strip — equal vertical padding above and below */}
            <div
                className="relative z-10 w-full"
                style={{
                    paddingTop: "clamp(20px, 3vw, 40px)",
                    paddingBottom: "clamp(20px, 3vw, 40px)",
                }}
            >
                <Numbers />
            </div>
        </div>
    );
}
