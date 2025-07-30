import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const Shield3D: React.FC = () => {
  const shieldRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main Shield */}
      <Cylinder
        ref={shieldRef}
        args={[1.5, 1.5, 0.1, 8]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </Cylinder>

      {/* Shield Border */}
      <Cylinder
        args={[1.6, 1.6, 0.05, 8]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </Cylinder>

      {/* Inner Shield Pattern */}
      <Cylinder
        args={[1.2, 1.2, 0.02, 6]}
        position={[0, 0, 0.01]}
      >
        <meshStandardMaterial
          color="#0088ff"
          transparent
          opacity={0.6}
          emissive="#0088ff"
          emissiveIntensity={0.4}
        />
      </Cylinder>

      {/* Protection Ring */}
      <Cylinder
        args={[2, 2, 0.02, 16]}
        position={[0, 0, -0.1]}
      >
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.2}
        />
      </Cylinder>
    </group>
  );
};

export default Shield3D; 