import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import { products } from "@/lib/products";

function ProductCard({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  return (
    <group>
      <RoundedBox args={[2.4, 2.4, 0.1]} radius={0.1} smoothness={4} position={[0, 0, 0.051]}>
        <meshStandardMaterial map={texture} />
      </RoundedBox>
      <RoundedBox args={[2.4, 2.4, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.051]} rotation={[0, Math.PI, 0]}>
        <meshStandardMaterial color="#f0ede8" roughness={0.6} metalness={0.0} />
      </RoundedBox>
      <RoundedBox args={[2.4, 2.4, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#e8e4de" roughness={0.7} />
      </RoundedBox>
    </group>
  );
}

function Scene({ imageUrl }: { imageUrl: string }) {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[4, 5, 4]} intensity={1.4} castShadow />
      <directionalLight position={[-3, -2, 2]} intensity={0.4} />
      <Suspense fallback={null}>
        <ProductCard imageUrl={imageUrl} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export function Product3D({ id }: { id: string; category: string }) {
  const product = products.find((p) => p.id === id);
  const imageUrl = product?.image ?? "";

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 42 }}
      style={{ width: "100%", height: "100%", background: "#f5f2ed" }}
      gl={{ antialias: true }}
    >
      {imageUrl && <Scene imageUrl={imageUrl} />}
    </Canvas>
  );
}
