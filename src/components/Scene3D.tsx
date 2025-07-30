import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  showStars?: boolean;
}

const Scene3D: React.FC<Scene3DProps> = ({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableControls = true,
  showStars = true
}) => {
  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <Canvas
        camera={{ position: cameraPosition, fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00ffff" />
        
        {/* Controls */}
        {enableControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.6}
            rotateSpeed={0.6}
            maxDistance={20}
            minDistance={2}
          />
        )}
        
        {/* 3D Content */}
        {children}
      </Canvas>
    </div>
  );
};

export default Scene3D; 