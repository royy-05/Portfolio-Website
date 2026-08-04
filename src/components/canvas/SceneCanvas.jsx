import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import Environment3D from './Environment3D';
import ZoneGeometry from './ZoneGeometry';
import CameraRig from './CameraRig';

export default function SceneCanvas({ enablePostProcessing = true }) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Environment3D />
          <ZoneGeometry />
          <CameraRig />

          {enablePostProcessing && (
            <EffectComposer disableNormalPass>
              <Bloom
                intensity={0.7}
                luminanceThreshold={0.3}
                luminanceSmoothing={0.8}
                mipmapBlur
              />
              <ChromaticAberration
                offset={new Vector2(0.0015, 0.0015)}
                radialModulation={false}
                modulationOffset={0}
              />
              <Vignette eskil={false} offset={0.1} darkness={1.05} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
