"use client";

import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function MinimalistVase() {
  return (
    <mesh>
      <latheGeometry args={[
        [0, 0, 0.2, 0.4, 0.5, 0.4, 0.3, 0.2].map((v, i) => [v, i * 0.2]) as any
      ]} />
      <MeshDistortMaterial
        color="#8C8476"
        speed={2}
        distort={0.2}
        radius={1}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[50vh] touch-none">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Stage environment="city" intensity={0.5} contactShadow={false}>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh castShadow receiveShadow>
                  <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                  <meshStandardMaterial color="#1A1A1A" roughness={0.1} metalness={0.8} />
                </mesh>
              </Float>
            </Stage>
          </PresentationControls>
        </Suspense>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  );
}
