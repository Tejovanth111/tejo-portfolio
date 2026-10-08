"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";

const points: [number, number, number][] = [
  [-1.15, 0.72, 0.12], [-0.62, 1.1, -0.35], [-0.06, 0.82, 0.34],
  [0.55, 1.08, -0.18], [1.12, 0.54, 0.22], [-1.35, 0.04, -0.3],
  [-0.7, 0.2, 0.46], [-0.12, 0.14, -0.2], [0.52, 0.32, 0.42],
  [1.18, -0.12, -0.26], [-1.02, -0.62, 0.2], [-0.42, -0.48, -0.38],
  [0.2, -0.58, 0.26], [0.82, -0.45, -0.15], [0.32, -1.02, -0.3],
];

const links: [number, number][] = [
  [0, 1], [0, 5], [0, 6], [1, 2], [1, 6], [2, 3], [2, 6], [2, 7],
  [2, 8], [3, 4], [3, 8], [4, 9], [5, 6], [5, 10], [6, 7], [6, 10],
  [6, 11], [7, 8], [7, 11], [7, 12], [8, 9], [8, 12], [8, 13], [9, 13],
  [10, 11], [11, 12], [11, 14], [12, 13], [12, 14], [13, 14],
];

function NetworkObject() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();
  const reduceMotion = useReducedMotion();

  useFrame((_, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * 0.075;
    group.current.rotation.y += (pointer.x * 0.16 - group.current.rotation.y) * 0.008;
    group.current.rotation.x += (-pointer.y * 0.1 - group.current.rotation.x) * 0.008;
  });

  return (
    <group ref={group} rotation={[0.08, -0.18, -0.12]}>
      {links.map(([from, to]) => (
        <Line
          key={`${from}-${to}`}
          points={[points[from], points[to]]}
          color={from === 0 && to === 1 ? "#536789" : "#6b7d9a"}
          transparent
          opacity={0.32}
          lineWidth={0.7}
        />
      ))}
      {points.map(([x, y, z], index) => (
        <Sphere key={index} position={[x, y, z]} args={[index % 4 === 0 ? 0.052 : 0.034, 16, 16]}>
          <meshStandardMaterial
            color={index === 4 ? "#a77368" : index === 10 ? "#bb8956" : index % 4 === 0 ? "#536789" : "#aab4c1"}
            roughness={0.38}
            metalness={0.12}
          />
        </Sphere>
      ))}
    </group>
  );
}

export default function DataNetwork() {
  return (
    <div className="network-visual" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.7], fov: 38 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <NetworkObject />
      </Canvas>
    </div>
  );
}
