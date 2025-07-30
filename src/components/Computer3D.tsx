import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const Computer3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Laptop Base */}
      <Box args={[3, 0.1, 2]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Laptop Screen */}
      <Box args={[2.8, 0.05, 1.8]} position={[0, 0.5, -0.8]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      
      {/* Screen Display */}
      <Box args={[2.6, 0.01, 1.6]} position={[0, 0.5, -0.8]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial 
          color="#00ffff" 
          transparent 
          opacity={0.8}
          emissive="#00ffff"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Security Interface Elements */}
      <Box args={[0.3, 0.02, 0.1]} position={[-0.8, 0.6, -1.2]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </Box>
      
      <Box args={[0.3, 0.02, 0.1]} position={[0.8, 0.6, -1.2]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </Box>
      
      {/* Data Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Box
          key={i}
          args={[0.02, 0.02, 0.02]}
          position={[
            Math.sin(i * 0.5) * 2,
            Math.cos(i * 0.3) * 1,
            Math.sin(i * 0.2) * 1.5
          ]}
        >
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </Box>
      ))}
    </group>
  );
};

export default Computer3D; 