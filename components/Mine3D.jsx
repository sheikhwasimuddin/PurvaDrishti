import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Bench({ x, y, z, color }) {
  return (
    <mesh position={[x, y, z]}>
      {/* No need to extend or import BoxBufferGeometry */}
      <boxGeometry args={[8, 0.5, 8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Mine3D({ benchRisks }) {
  // benchRisks = [{id:1, x:0,y:0,z:0, risk:80}, ...]
  const benches = useMemo(() => benchRisks || [], [benchRisks]);

  return (
    <div className="w-full h-96 bg-gray-200 rounded-xl">
      <Canvas camera={{ position: [20, 20, 20], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        
        {/* Render benches dynamically */}
        {benches.map(b => {
          const color = b.risk >= 70 ? "#EB5757" : b.risk >= 40 ? "#F2C94C" : "#27AE60";
          return <Bench key={b.id} x={b.x} y={b.y} z={b.z} color={color} />;
        })}
        
        <OrbitControls />
      </Canvas>
    </div>
  );
}
