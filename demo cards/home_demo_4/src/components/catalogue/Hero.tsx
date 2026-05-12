import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, ContactShadows, Environment, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function HeroScene() {
  return (
    <group position={[0, -0.2, 0]}>
      {/* base shelf */}
      <mesh castShadow receiveShadow position={[0, -0.55, 0]} rotation={[0, 0.25, 0]}>
        <boxGeometry args={[2.2, 0.12, 0.7]} />
        <meshStandardMaterial color="#c9a77a" roughness={0.65} />
      </mesh>
      {/* canister */}
      <mesh castShadow position={[-0.55, 0.15, 0]}>
        <cylinderGeometry args={[0.32, 0.36, 1.2, 64]} />
        <meshStandardMaterial color="#e8e2d6" roughness={0.85} />
      </mesh>
      <mesh castShadow position={[-0.55, 0.82, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.12, 64]} />
        <meshStandardMaterial color="#b39a73" roughness={0.5} metalness={0.2} />
      </mesh>
      {/* vase */}
      <mesh castShadow position={[0.25, 0.25, 0.05]}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial color="#2a2a28" roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh castShadow position={[0.25, 0.7, 0.05]}>
        <cylinderGeometry args={[0.12, 0.18, 0.35, 32]} />
        <meshStandardMaterial color="#2a2a28" roughness={0.4} />
      </mesh>
      {/* small bowl */}
      <mesh castShadow position={[0.85, -0.1, 0.05]}>
        <torusGeometry args={[0.22, 0.08, 24, 64]} />
        <meshStandardMaterial color="#b08a4a" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 size-[28rem] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-20 size-[28rem] rounded-full bg-brand-muted/15 blur-[120px]" />
      </div>
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-[0.22em] mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
            </span>
            {t("heroBadge")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="font-serif text-[2.6rem] sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            {t("heroTitle1")} <br />
            <span className="italic text-brand-muted">{t("heroTitle2")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="text-charcoal/70 text-[15px] md:text-lg leading-relaxed mt-6 max-w-md"
          >
            {t("heroSub")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.7 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a href="#products" className="px-7 py-4 bg-charcoal text-canvas rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand transition-all shadow-soft">
              {t("cta1")}
            </a>
            <a href="#contact" className="px-7 py-4 bg-surface border border-stone rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand transition-all">
              {t("cta2")}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-12 flex gap-8 md:gap-10 border-t border-stone pt-7"
          >
            {[["15+", t("yearsExp")], ["40+", t("exportCountries")], ["500+", t("productSkus")]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-serif italic">{n}</div>
                <div className="text-[9.5px] uppercase tracking-[0.18em] text-charcoal/50 font-semibold mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <motion.div style={{ y }} className="relative w-full max-w-[460px]">
            <div className="absolute -inset-10 bg-brand/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-[300px] sm:w-[400px] lg:w-[460px] aspect-square rounded-3xl shadow-soft ring-1 ring-stone/60 overflow-hidden bg-surface">
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: [2.4, 1.6, 2.8], fov: 35 }}
                  gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
                >
                  <color attach="background" args={["#f4f0e8"]} />
                  <ambientLight intensity={0.45} />
                  <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
                  <Suspense fallback={null}>
                    <PresentationControls
                      global
                      polar={[-0.2, 0.2]}
                      azimuth={[-0.6, 0.6]}
                    >
                      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.4}>
                        <HeroScene />
                      </Float>
                    </PresentationControls>
                    <ContactShadows position={[0, -0.78, 0]} opacity={0.45} scale={6} blur={2.4} far={2} />
                    <Environment preset="apartment" />
                  </Suspense>
                  <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
                </Canvas>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-surface/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-soft ring-1 ring-stone/60">
                <div className="text-[9px] uppercase tracking-[0.25em] text-brand font-bold">3D · 360°</div>
                <div className="text-xs text-charcoal/60 mt-0.5">Drag to explore</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8.5px] uppercase tracking-[0.4em] text-charcoal/30 whitespace-nowrap">
        {t("interactiveBy")}
      </div>
    </section>
  );
}
