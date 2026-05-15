"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import type { ModelType } from "@/lib/products";

export type { ModelType };

// ── Ceramic Bowl ──────────────────────────────────────────────────────────────
function Bowl() {
  const ref = useRef<THREE.Mesh>(null);
  const points = useMemo(
    () => [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.45, 0.04),
      new THREE.Vector2(0.8, 0.32),
      new THREE.Vector2(1.0, 0.72),
      new THREE.Vector2(0.95, 1.05),
      new THREE.Vector2(0.82, 1.22),
    ],
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, -0.55, 0]}>
      <latheGeometry args={[points, 32]} />
      <meshStandardMaterial color="#C4936A" roughness={0.28} metalness={0.04} />
    </mesh>
  );
}

// ── Glass Cup ─────────────────────────────────────────────────────────────────
function GlassCup() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <group ref={ref} position={[0, -0.55, 0]}>
      <mesh>
        <cylinderGeometry args={[0.44, 0.36, 1.4, 32, 1, true]} />
        <meshStandardMaterial
          color="#A8CFE0"
          roughness={0.02}
          metalness={0.12}
          transparent
          opacity={0.55}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, -0.7, 0]}>
        <circleGeometry args={[0.36, 32]} />
        <meshStandardMaterial
          color="#A8CFE0"
          roughness={0.02}
          metalness={0.12}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh position={[0.54, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.18, 0.04, 8, 20, Math.PI]} />
        <meshStandardMaterial
          color="#A8CFE0"
          roughness={0.02}
          metalness={0.12}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

// ── Stainless Steel Kettle ────────────────────────────────────────────────────
function Kettle() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.35;
  });
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      <mesh>
        <sphereGeometry args={[0.82, 32, 32]} />
        <meshStandardMaterial color="#D2D2D2" roughness={0.14} metalness={0.88} />
      </mesh>
      <mesh position={[0.76, 0.32, 0]} rotation={[0, 0, -0.72]}>
        <cylinderGeometry args={[0.07, 0.13, 0.68, 16]} />
        <meshStandardMaterial color="#D2D2D2" roughness={0.14} metalness={0.88} />
      </mesh>
      <mesh position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.27, 0.42, 0.18, 32]} />
        <meshStandardMaterial color="#D2D2D2" roughness={0.14} metalness={0.88} />
      </mesh>
      <mesh position={[0, 1.08, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#B8B8B8" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[-0.95, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.065, 8, 20, Math.PI]} />
        <meshStandardMaterial color="#B8B8B8" roughness={0.18} metalness={0.88} />
      </mesh>
    </group>
  );
}

// ── Bathroom Mirror ───────────────────────────────────────────────────────────
function MirrorModel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.3;
  });
  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      <mesh>
        <boxGeometry args={[1.6, 2.2, 0.12]} />
        <meshStandardMaterial color="#6B4226" roughness={0.55} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0, 0.068]}>
        <planeGeometry args={[1.28, 1.9]} />
        <meshStandardMaterial color="#C4DCE8" metalness={0.94} roughness={0.02} />
      </mesh>
    </group>
  );
}

// ── Decorative Vase ───────────────────────────────────────────────────────────
function Vase() {
  const ref = useRef<THREE.Mesh>(null);
  const points = useMemo(
    () => [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.18, 0.04),
      new THREE.Vector2(0.36, 0.24),
      new THREE.Vector2(0.46, 0.54),
      new THREE.Vector2(0.6, 0.9),
      new THREE.Vector2(0.84, 1.3),
      new THREE.Vector2(0.9, 1.58),
      new THREE.Vector2(0.72, 1.84),
      new THREE.Vector2(0.5, 1.96),
      new THREE.Vector2(0.42, 2.06),
      new THREE.Vector2(0.48, 2.12),
      new THREE.Vector2(0.52, 2.15),
    ],
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, -0.9, 0]}>
      <latheGeometry args={[points, 32]} />
      <meshStandardMaterial color="#7B9E8F" roughness={0.22} metalness={0.07} />
    </mesh>
  );
}

// ── Frying Pan ────────────────────────────────────────────────────────────────
function Pan() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.35;
  });
  return (
    <group ref={ref} position={[0, -0.15, 0]}>
      {/* body */}
      <mesh>
        <cylinderGeometry args={[0.9, 0.82, 0.18, 32]} />
        <meshStandardMaterial color="#2C2C2C" roughness={0.35} metalness={0.72} />
      </mesh>
      {/* non-stick surface */}
      <mesh position={[0, 0.092, 0]}>
        <circleGeometry args={[0.84, 32]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.65} metalness={0.05} />
      </mesh>
      {/* handle */}
      <mesh position={[1.42, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 1.0, 16]} />
        <meshStandardMaterial color="#3C3C3C" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* handle end */}
      <mesh position={[1.93, -0.02, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#3C3C3C" roughness={0.4} metalness={0.5} />
      </mesh>
    </group>
  );
}

// ── Dinner Plate ──────────────────────────────────────────────────────────────
function Plate() {
  const ref = useRef<THREE.Mesh>(null);
  const points = useMemo(
    () => [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.28, 0.02),
      new THREE.Vector2(0.65, 0.05),
      new THREE.Vector2(0.92, 0.12),
      new THREE.Vector2(1.06, 0.22),
      new THREE.Vector2(1.1, 0.3),
    ],
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, -0.2, 0]}>
      <latheGeometry args={[points, 48]} />
      <meshStandardMaterial color="#F5F0EB" roughness={0.18} metalness={0.02} />
    </mesh>
  );
}

// ── Glass Storage Jar ─────────────────────────────────────────────────────────
function Jar() {
  const ref = useRef<THREE.Group>(null);
  const bodyPoints = useMemo(
    () => [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.42, 0.02),
      new THREE.Vector2(0.5, 0.1),
      new THREE.Vector2(0.52, 0.55),
      new THREE.Vector2(0.52, 1.1),
      new THREE.Vector2(0.48, 1.28),
      new THREE.Vector2(0.38, 1.36),
    ],
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <group ref={ref} position={[0, -0.72, 0]}>
      {/* glass body */}
      <mesh>
        <latheGeometry args={[bodyPoints, 32]} />
        <meshStandardMaterial
          color="#C8E0D4"
          roughness={0.04}
          metalness={0.1}
          transparent
          opacity={0.65}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* bamboo lid */}
      <mesh position={[0, 1.44, 0]}>
        <cylinderGeometry args={[0.41, 0.38, 0.18, 32]} />
        <meshStandardMaterial color="#C4936A" roughness={0.65} metalness={0.02} />
      </mesh>
      {/* lid knob */}
      <mesh position={[0, 1.56, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#A67854" roughness={0.6} metalness={0.02} />
      </mesh>
    </group>
  );
}

// ── Bath/Soap Bottle ──────────────────────────────────────────────────────────
function Bottle() {
  const ref = useRef<THREE.Group>(null);
  const bodyPoints = useMemo(
    () => [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.3, 0.02),
      new THREE.Vector2(0.38, 0.1),
      new THREE.Vector2(0.42, 0.45),
      new THREE.Vector2(0.44, 0.95),
      new THREE.Vector2(0.4, 1.35),
      new THREE.Vector2(0.28, 1.52),
      new THREE.Vector2(0.16, 1.62),
      new THREE.Vector2(0.13, 1.8),
    ],
    []
  );
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <group ref={ref} position={[0, -0.92, 0]}>
      {/* body */}
      <mesh>
        <latheGeometry args={[bodyPoints, 32]} />
        <meshStandardMaterial color="#D4C4B0" roughness={0.3} metalness={0.05} />
      </mesh>
      {/* pump head */}
      <mesh position={[0, 1.88, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 16]} />
        <meshStandardMaterial color="#9E8878" roughness={0.35} metalness={0.15} />
      </mesh>
      {/* pump nozzle */}
      <mesh position={[0.18, 1.94, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 12]} />
        <meshStandardMaterial color="#9E8878" roughness={0.35} metalness={0.15} />
      </mesh>
    </group>
  );
}

// ── Scene wrapper ─────────────────────────────────────────────────────────────
function Scene({ modelType }: { modelType: ModelType }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 8, 5]} intensity={1.3} castShadow />
      <pointLight position={[-3, 2, -2]} intensity={0.55} color="#C9A052" />
      {modelType === "bowl" && <Bowl />}
      {modelType === "cup" && <GlassCup />}
      {modelType === "kettle" && <Kettle />}
      {modelType === "mirror" && <MirrorModel />}
      {modelType === "vase" && <Vase />}
      {modelType === "pan" && <Pan />}
      {modelType === "plate" && <Plate />}
      {modelType === "jar" && <Jar />}
      {modelType === "bottle" && <Bottle />}
      <OrbitControls enableZoom minDistance={2} maxDistance={8} autoRotate={false} />
      <Environment preset="apartment" />
    </>
  );
}

// ── Public component ──────────────────────────────────────────────────────────
export default function ModelViewer({ modelType }: { modelType: ModelType }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 4.2], fov: 44 }} shadows>
        <Suspense fallback={null}>
          <Scene modelType={modelType} />
        </Suspense>
      </Canvas>
    </div>
  );
}
