"use client";

import { useGLTF, OrbitControls, ContactShadows, Center, Bounds, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
import type { Group } from "three";

function GLBModel({ path }: { path: string }) {
  const { scene } = useGLTF(path) as GLTF & { scene: Group };
  return (
    <Bounds fit clip observe>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
}

export function ProductScene({ modelPath }: { modelPath: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, toneMappingExposure: 0.75 }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#F0EDE4"]} />

      <Environment preset="studio" background={false} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#f0ece4" />

      <GLBModel path={modelPath} />

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.25}
        scale={12}
        blur={3}
        far={5}
        color="#8a7a6a"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
