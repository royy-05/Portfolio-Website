import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Environment3D() {
  const lightGroup = useRef();

  useFrame((state) => {
    if (lightGroup.current) {
      lightGroup.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />
      
      {/* Key Studio Directional Light */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        color="#ffffff"
      />
      
      {/* Emerald Accent Point Light */}
      <pointLight position={[-10, -5, -10]} intensity={2} color="#10B981" />
      
      {/* Teal Secondary Accent Point Light */}
      <pointLight position={[10, -10, 5]} intensity={1.5} color="#34d399" />

      {/* Floating Light Group */}
      <group ref={lightGroup}>
        <pointLight position={[0, 10, -15]} intensity={1} color="#10B981" />
      </group>
    </>
  );
}
