import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAMERA_STOPS = [
  { scroll: 0.00, pos: [0, 0, 6], target: [0, 0, 0] },
  { scroll: 0.18, pos: [1.2, 0.4, -11], target: [2, -0.5, -15] },
  { scroll: 0.38, pos: [0, 0.2, -24], target: [0, 0, -30] },
  { scroll: 0.58, pos: [0, 0.3, -42], target: [0, 0, -50] },
  { scroll: 0.78, pos: [0, 0, -60], target: [0, 0, -68] },
  { scroll: 1.00, pos: [0, 0, -77], target: [0, 0, -85] },
];

export default function CameraRig() {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 6));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3(0, 0, 6));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    // GSAP ScrollTrigger to calculate target camera position along curve
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;

          // Find surrounding keyframe stops
          let idx = 0;
          for (let i = 0; i < CAMERA_STOPS.length - 1; i++) {
            if (progress >= CAMERA_STOPS[i].scroll && progress <= CAMERA_STOPS[i + 1].scroll) {
              idx = i;
              break;
            }
          }

          const stopA = CAMERA_STOPS[idx];
          const stopB = CAMERA_STOPS[Math.min(idx + 1, CAMERA_STOPS.length - 1)];

          const range = stopB.scroll - stopA.scroll || 1;
          const factor = (progress - stopA.scroll) / range;
          const t = Math.max(0, Math.min(1, factor));

          // Interpolate camera position
          targetPos.current.x = THREE.MathUtils.lerp(stopA.pos[0], stopB.pos[0], t);
          targetPos.current.y = THREE.MathUtils.lerp(stopA.pos[1], stopB.pos[1], t);
          targetPos.current.z = THREE.MathUtils.lerp(stopA.pos[2], stopB.pos[2], t);

          // Interpolate lookAt target
          targetLookAt.current.x = THREE.MathUtils.lerp(stopA.target[0], stopB.target[0], t);
          targetLookAt.current.y = THREE.MathUtils.lerp(stopA.target[1], stopB.target[1], t);
          targetLookAt.current.z = THREE.MathUtils.lerp(stopA.target[2], stopB.target[2], t);
        },
      });
    });

    return () => ctx.revert();
  }, [camera]);

  useFrame((state, delta) => {
    // Smooth lerp to target position and lookAt
    currentPos.current.lerp(targetPos.current, delta * 4);
    currentTarget.current.lerp(targetLookAt.current, delta * 4);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
