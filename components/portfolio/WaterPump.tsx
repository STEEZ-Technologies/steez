"use client";

const BODY = "#0e2d24";
const ACCENT = "#6fc9a1";
const DARK = "#061612";
const MID = "#14392f";
const PIPE = "#0a211b";
const M = { metalness: 0.85, roughness: 0.2 };

function Mat({ color, metalness = 0.85, roughness = 0.2, emissive }: { color: string; metalness?: number; roughness?: number; emissive?: string }) {
  return <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} emissive={emissive ?? "#000000"} emissiveIntensity={emissive ? 0.25 : 0} />;
}

export function WaterPump() {
  return (
    <group rotation={[0, 0.5, 0]}>
      {/* Base plate */}
      <mesh position={[0, -1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.18, 1.8]} />
        <Mat color={DARK} />
      </mesh>

      {/* Corner mounting bolts */}
      {(
        [
          [-1.2, -1.4, 0.6],
          [-1.2, -1.4, -0.6],
          [1.2, -1.4, 0.6],
          [1.2, -1.4, -0.6],
        ] as [number, number, number][]
      ).map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <cylinderGeometry args={[0.07, 0.07, 0.12, 12]} />
          <Mat color={ACCENT} metalness={0.9} roughness={0.1} emissive={ACCENT} />
        </mesh>
      ))}

      {/* Main volute pump housing */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.85, 0.85, 1.2, 48]} />
        <Mat color={BODY} />
      </mesh>

      {/* Volute accent ring */}
      <mesh position={[0, -0.5, 0]}>
        <torusGeometry args={[0.87, 0.055, 12, 80]} />
        <Mat color={ACCENT} metalness={0.9} roughness={0.15} emissive={ACCENT} />
      </mesh>

      {/* Shaft coupling */}
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.46, 24]} />
        <Mat color={MID} />
      </mesh>

      {/* Motor housing */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.6, 1.02, 40]} />
        <Mat color={BODY} />
      </mesh>

      {/* Cooling fins */}
      {([-0.3, 0, 0.3] as number[]).map((offset, i) => (
        <mesh key={i} position={[0, 1.0 + offset, 0]}>
          <torusGeometry args={[0.63, 0.035, 8, 60]} />
          <Mat color={MID} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Motor top cap */}
      <mesh position={[0, 1.56, 0]}>
        <cylinderGeometry args={[0.62, 0.55, 0.12, 40]} />
        <Mat color={ACCENT} metalness={0.7} roughness={0.3} emissive={ACCENT} />
      </mesh>

      {/* Ventilation centre */}
      <mesh position={[0, 1.65, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.08, 20]} />
        <Mat color={DARK} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Inlet pipe (horizontal left) ── */}
      <mesh position={[-1.5, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 1.3, 24]} />
        <Mat color={PIPE} />
      </mesh>
      <mesh position={[-2.19, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.41, 0.41, 0.12, 32]} />
        <Mat color={MID} />
      </mesh>
      <mesh position={[-2.29, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.08, 24]} />
        <Mat color={ACCENT} metalness={0.7} roughness={0.35} emissive={ACCENT} />
      </mesh>

      {/* ── Outlet pipe (angled up-right) ── */}
      <mesh position={[1.0, 0.1, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <cylinderGeometry args={[0.22, 0.22, 1.4, 24]} />
        <Mat color={PIPE} />
      </mesh>
      {/* Elbow junction */}
      <mesh position={[1.46, 0.84, 0]}>
        <sphereGeometry args={[0.25, 20, 20]} />
        <Mat color={MID} />
      </mesh>
      {/* Vertical outlet rise */}
      <mesh position={[1.46, 1.5, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 1.3, 24]} />
        <Mat color={PIPE} />
      </mesh>
      {/* Outlet top flange */}
      <mesh position={[1.46, 2.17, 0]}>
        <cylinderGeometry args={[0.37, 0.37, 0.12, 32]} />
        <Mat color={MID} />
      </mesh>
      <mesh position={[1.46, 2.27, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.08, 24]} />
        <Mat color={ACCENT} metalness={0.7} roughness={0.35} emissive={ACCENT} />
      </mesh>

      {/* Pressure gauge */}
      <mesh position={[0.88, -0.2, 0.83]}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <Mat color={ACCENT} metalness={0.6} roughness={0.4} emissive={ACCENT} />
      </mesh>
      <mesh position={[0.86, -0.2, 0.72]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.2, 8]} />
        <Mat color={MID} />
      </mesh>
    </group>
  );
}
