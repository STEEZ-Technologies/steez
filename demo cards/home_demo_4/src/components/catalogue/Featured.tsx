import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls, ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function Module({ position, size, color, drawer = false }: { position: [number, number, number]; size: [number, number, number]; color: string; drawer?: boolean }) {
  const [w, h, d] = size;
  return (
    <group position={position}>
      {/* outer frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
      </mesh>
      {/* inner recess */}
      <mesh position={[0, 0, d / 2 - 0.01]}>
        <boxGeometry args={[w * 0.92, h * 0.88, 0.02]} />
        <meshStandardMaterial color="#1a1a18" roughness={0.9} />
      </mesh>
      {drawer && (
        <mesh castShadow position={[0, -h * 0.05, d / 2 + 0.005]}>
          <boxGeometry args={[w * 0.86, h * 0.62, 0.03]} />
          <meshStandardMaterial color="#3a342b" roughness={0.7} />
        </mesh>
      )}
      {drawer && (
        <mesh castShadow position={[0, -h * 0.05, d / 2 + 0.03]}>
          <cylinderGeometry args={[0.025, 0.025, w * 0.3, 16]} />
          <meshStandardMaterial color="#b08a4a" metalness={0.9} roughness={0.25} />
        </mesh>
      )}
    </group>
  );
}

function ZenithSystem() {
  // Modular cube system: 2 columns, varying heights, with drawers + open shelves
  const oak = "#c9a77a";
  const walnut = "#7b5a3f";
  const bone = "#ece4d3";
  return (
    <group position={[0, -0.4, 0]} rotation={[0, -0.35, 0]}>
      {/* Left column */}
      <Module position={[-0.62, 0.0, 0]} size={[1.1, 0.55, 0.55]} color={oak} drawer />
      <Module position={[-0.62, 0.6, 0]} size={[1.1, 0.55, 0.55]} color={oak} />
      <Module position={[-0.62, 1.2, 0]} size={[1.1, 0.55, 0.55]} color={walnut} drawer />
      {/* Right column */}
      <Module position={[0.62, 0.0, 0]} size={[1.1, 0.85, 0.55]} color={walnut} />
      <Module position={[0.62, 0.9, 0]} size={[1.1, 0.55, 0.55]} color={bone} drawer />
      {/* Top plate */}
      <mesh castShadow position={[0, 1.55, 0]}>
        <boxGeometry args={[2.45, 0.06, 0.62]} />
        <meshStandardMaterial color={walnut} roughness={0.5} />
      </mesh>
      {/* Base feet */}
      {[-1.05, -0.2, 0.45, 1.05].map((x) => (
        <mesh key={x} castShadow position={[x, -0.34, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.12, 16]} />
          <meshStandardMaterial color="#1a1a18" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      {/* Decorative objects on top */}
      <mesh castShadow position={[-0.5, 1.78, 0.05]}>
        <cylinderGeometry args={[0.13, 0.16, 0.42, 32]} />
        <meshStandardMaterial color={bone} roughness={0.85} />
      </mesh>
      <mesh castShadow position={[0.55, 1.74, 0]}>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial color="#2a2a28" roughness={0.4} />
      </mesh>
      <mesh castShadow position={[0.2, 1.66, 0.1]}>
        <torusGeometry args={[0.09, 0.025, 16, 48]} />
        <meshStandardMaterial color="#b08a4a" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function Featured() {
  const { t } = useI18n();
  const feats = ["feat_1", "feat_2", "feat_3"] as const;
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-charcoal text-canvas overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full" />
          <div className="relative aspect-square bg-canvas/5 rounded-3xl border border-canvas/10 overflow-hidden">
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [3.2, 1.6, 3.6], fov: 32 }}
              gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
            >
              <color attach="background" args={["#1a1a18"]} />
              <ambientLight intensity={0.35} />
              <directionalLight position={[5, 7, 4]} intensity={1.4} castShadow shadow-mapSize={[2048, 2048]} />
              <spotLight position={[-4, 5, 2]} intensity={0.6} angle={0.5} penumbra={0.8} color="#d8b27a" />
              <Suspense fallback={null}>
                <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.7, 0.7]}>
                  <Float speed={1} rotationIntensity={0.15} floatIntensity={0.25}>
                    <ZenithSystem />
                  </Float>
                </PresentationControls>
                <ContactShadows position={[0, -0.78, 0]} opacity={0.55} scale={8} blur={2.6} far={2.5} />
                <Environment preset="apartment" />
              </Suspense>
            </Canvas>
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-canvas/10 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-[0.25em] pointer-events-none">
              Drag · 360° View
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-brand uppercase text-[10px] font-bold tracking-[0.4em] mb-5">{t("featuredEyebrow")}</div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6">{t("featuredTitle")}</h2>
          <p className="text-canvas/60 text-base md:text-lg mb-8 leading-relaxed">{t("featuredSub")}</p>
          <ul className="space-y-3.5 mb-10">
            {feats.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm tracking-wide text-canvas/85">
                <div className="size-1.5 bg-brand rounded-full mt-2 shrink-0" />
                {t(f)}
              </li>
            ))}
          </ul>
          <button className="px-9 py-4 bg-canvas text-charcoal text-[11px] font-bold uppercase tracking-[0.22em] rounded-full hover:bg-brand hover:text-canvas transition-all">
            {t("downloadSpecs")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
