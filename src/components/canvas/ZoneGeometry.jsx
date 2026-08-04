import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei';

export default function ZoneGeometry() {
  const heroCoreRef = useRef();
  const heroRingRef = useRef();
  const deskRef = useRef();
  const expNode1 = useRef();
  const expNode2 = useRef();
  const expNode3 = useRef();
  const proj1Ref = useRef();
  const proj2Ref = useRef();
  const proj3Ref = useRef();
  const skillsClusterRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Zone 1 Rotations
    if (heroCoreRef.current) {
      heroCoreRef.current.rotation.x = time * 0.3;
      heroCoreRef.current.rotation.y = time * 0.5;
    }
    if (heroRingRef.current) {
      heroRingRef.current.rotation.z = time * 0.2;
      heroRingRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    // Zone 2 Desk subtle float
    if (deskRef.current) {
      deskRef.current.rotation.y = Math.sin(time * 0.4) * 0.08;
    }

    // Zone 3 Exp Nodes pulse
    [expNode1, expNode2, expNode3].forEach((ref, idx) => {
      if (ref.current) {
        ref.current.rotation.y = time * (0.6 + idx * 0.2);
        ref.current.position.y = Math.sin(time * 1.5 + idx) * 0.2;
      }
    });

    // Zone 4 Project Vignettes
    if (proj1Ref.current) proj1Ref.current.rotation.y = time * 0.5;
    if (proj2Ref.current) proj2Ref.current.rotation.y = -time * 0.4;
    if (proj3Ref.current) proj3Ref.current.rotation.x = time * 0.4;

    // Zone 5 Skills Cluster
    if (skillsClusterRef.current) {
      skillsClusterRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group>
      {/* ZONE 1: HERO (z = 0) */}
      <group position={[0, 0, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          {/* Inner Glowing Core */}
          <mesh ref={heroCoreRef} position={[0, 0, 0]}>
            <icosahedronGeometry args={[1.6, 2]} />
            <MeshDistortMaterial
              color="#00f0ff"
              emissive="#005577"
              emissiveIntensity={0.6}
              distort={0.35}
              speed={2}
              roughness={0.2}
              wireframe={false}
            />
          </mesh>

          {/* Outer Wireframe Ring */}
          <mesh ref={heroRingRef} position={[0, 0, 0]}>
            <torusGeometry args={[2.5, 0.04, 16, 100]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={0.8}
              wireframe
            />
          </mesh>
        </Float>
      </group>

      {/* ZONE 2: ABOUT / WORKSPACE (z = -15) */}
      <group ref={deskRef} position={[2, -0.5, -15]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Stylized Glass Laptop Base */}
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshPhysicalMaterial
              color="#0f172a"
              transmission={0.6}
              opacity={1}
              transparent
              roughness={0.1}
              ior={1.5}
            />
          </mesh>

          {/* Monitor Screen Frame */}
          <mesh position={[0, 1.1, -0.9]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[2.8, 1.8, 0.08]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#003344"
              emissiveIntensity={0.5}
              roughness={0.3}
            />
          </mesh>

          {/* Floating Data Cubes */}
          <mesh position={[-1.8, 0.8, 0.5]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <MeshWobbleMaterial color="#8b5cf6" factor={0.6} speed={2} />
          </mesh>
          <mesh position={[1.8, 0.4, -0.2]}>
            <octahedronGeometry args={[0.4]} />
            <meshStandardMaterial color="#00f0ff" wireframe />
          </mesh>
        </Float>
      </group>

      {/* ZONE 3: EXPERIENCE TIMELINE STATIONS (z = -30) */}
      <group position={[0, 0, -30]}>
        {/* Station 1: VTS Infotech (Left) */}
        <group position={[-3, 0.5, 2]}>
          <mesh ref={expNode1}>
            <torusKnotGeometry args={[0.9, 0.25, 64, 16]} />
            <meshStandardMaterial color="#00f0ff" emissive="#0088aa" emissiveIntensity={0.6} />
          </mesh>
        </group>

        {/* Station 2: Rescue Federation (Right) */}
        <group position={[3, -0.5, -2]}>
          <mesh ref={expNode2}>
            <dodecahedronGeometry args={[1]} />
            <meshStandardMaterial color="#a855f7" emissive="#5500aa" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>

        {/* Station 3: Internshala (Center) */}
        <group position={[-2, 1, -6]}>
          <mesh ref={expNode3}>
            <octahedronGeometry args={[0.9]} />
            <meshStandardMaterial color="#ec4899" emissive="#aa0055" emissiveIntensity={0.6} />
          </mesh>
        </group>
      </group>

      {/* ZONE 4: PROJECTS GALLERY VIGNETTES (z = -50) */}
      <group position={[0, 0, -50]}>
        {/* Project 1: RideFlow (Left) */}
        <group position={[-3.2, 0.8, 4]}>
          <Float speed={2}>
            <mesh ref={proj1Ref}>
              <torusGeometry args={[1.2, 0.3, 16, 50]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.7} />
            </mesh>
          </Float>
        </group>

        {/* Project 2: MindCare (Right) */}
        <group position={[3.2, -0.4, 0]}>
          <Float speed={2.5}>
            <mesh ref={proj2Ref}>
              <icosahedronGeometry args={[1.3, 1]} />
              <MeshDistortMaterial color="#a855f7" emissive="#8b5cf6" emissiveIntensity={0.6} distort={0.4} speed={3} />
            </mesh>
          </Float>
        </group>

        {/* Project 3: Thinktube AI (Left) */}
        <group position={[-2.8, -0.6, -4]}>
          <Float speed={1.8}>
            <mesh ref={proj3Ref}>
              <boxGeometry args={[1.5, 1.5, 1.5]} />
              <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.7} wireframe />
            </mesh>
          </Float>
        </group>
      </group>

      {/* ZONE 5: SKILLS TECH CLUSTER (z = -68) */}
      <group ref={skillsClusterRef} position={[0, 0, -68]}>
        <Float speed={2} rotationIntensity={1}>
          {[
            { pos: [-2.5, 1.5, 0], color: '#00f0ff', scale: 0.6 },
            { pos: [2.2, 1.2, -1], color: '#8b5cf6', scale: 0.7 },
            { pos: [-1.8, -1.4, 1], color: '#ec4899', scale: 0.5 },
            { pos: [2.5, -1.2, -0.5], color: '#10b981', scale: 0.65 },
            { pos: [0, 2, -1.5], color: '#f59e0b', scale: 0.55 },
          ].map((item, idx) => (
            <mesh key={idx} position={item.pos}>
              <octahedronGeometry args={[item.scale]} />
              <meshStandardMaterial
                color={item.color}
                emissive={item.color}
                emissiveIntensity={0.5}
                roughness={0.2}
              />
            </mesh>
          ))}
        </Float>
      </group>

      {/* ZONE 6: CONTACT OUTRO (z = -85) */}
      <group position={[0, 0, -85]}>
        <Float speed={1.2}>
          <mesh position={[0, 0, 0]}>
            <torusKnotGeometry args={[1.5, 0.3, 128, 32]} />
            <MeshDistortMaterial
              color="#00f0ff"
              emissive="#005577"
              emissiveIntensity={0.8}
              distort={0.25}
              speed={1.5}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}
