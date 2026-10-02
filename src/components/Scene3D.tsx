"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function CoreCrystal() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.22;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.15, 1]} />
        <MeshDistortMaterial
          color="#2dd4bf"
          emissive="#0f766e"
          emissiveIntensity={0.45}
          roughness={0.18}
          metalness={0.72}
          distort={0.28}
          speed={1.6}
        />
      </mesh>
      <mesh scale={1.28}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.28} />
      </mesh>
    </Float>
  );
}

function OrbitRing({
  radius,
  speed,
  color,
  tilt,
}: {
  radius: number;
  speed: number;
  color: string;
  tilt: number;
}) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.7) * 0.18,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          scale: 0.08 + (i % 3) * 0.03,
        };
      }),
    [radius],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <group ref={group} rotation={[tilt, 0.2, 0.15]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 12, 96]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position} scale={node.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function GridPlatform() {
  return (
    <group position={[0, -1.85, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[4.2, 64]} />
        <meshStandardMaterial
          color="#0b1220"
          metalness={0.55}
          roughness={0.65}
          transparent
          opacity={0.85}
        />
      </mesh>
      <gridHelper args={[8, 24, "#1f6f6a", "#142033"]} position={[0, 0.01, 0]} />
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.15}
        color="#e8f0ff"
        castShadow
      />
      <pointLight position={[-3, 2, -2]} intensity={1.4} color="#14b8a6" />
      <pointLight position={[3.5, 1.5, 2]} intensity={0.9} color="#f59e0b" />
    </>
  );
}

function SceneContent() {
  return (
    <>
      <SceneLights />
      <Stars
        radius={55}
        depth={40}
        count={1400}
        factor={3.2}
        saturation={0}
        fade
        speed={0.35}
      />
      <fog attach="fog" args={["#070b14", 8, 22]} />
      <CoreCrystal />
      <OrbitRing radius={2.05} speed={0.28} color="#2dd4bf" tilt={0.35} />
      <OrbitRing radius={2.7} speed={-0.18} color="#f59e0b" tilt={-0.45} />
      <OrbitRing radius={3.35} speed={0.12} color="#38bdf8" tilt={0.7} />
      <GridPlatform />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 3.2}
      />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 1.4, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      <div className="hero-scene__vignette" />
      <div className="hero-scene__hud">
        <span>SYS // ONLINE</span>
        <span>FIELD_3D</span>
      </div>
    </div>
  );
}
