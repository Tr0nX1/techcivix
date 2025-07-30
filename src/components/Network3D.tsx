import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Network3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate network nodes
  const nodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    position: [
      Math.sin(i * 0.5) * 4,
      Math.cos(i * 0.3) * 3,
      Math.sin(i * 0.2) * 4
    ],
    color: i % 3 === 0 ? '#00ff00' : i % 3 === 1 ? '#ff0000' : '#00ffff',
    size: 0.1 + Math.random() * 0.1
  }));

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Network Nodes */}
      {nodes.map((node) => (
        <Sphere
          key={node.id}
          args={[node.size, 8, 8]}
          position={node.position as [number, number, number]}
        >
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}

      {/* Data Flow Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={`particle-${i}`}
          args={[0.01, 4, 4]}
          position={[
            Math.sin(i * 0.1) * 5,
            Math.cos(i * 0.15) * 4,
            Math.sin(i * 0.05) * 5
          ]}
        >
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}

      {/* Security Barrier */}
      <Sphere args={[6, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          wireframe
        />
      </Sphere>
    </group>
  );
};

export default Network3D; 