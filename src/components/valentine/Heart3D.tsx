import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

function HeartMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.5);
    shape.bezierCurveTo(0, 0.5, -0.5, 1.5, -1.5, 1.5);
    shape.bezierCurveTo(-3, 1.5, -3, 0, -3, 0);
    shape.bezierCurveTo(-3, -1, -2, -2, 0, -3.5);
    shape.bezierCurveTo(2, -2, 3, -1, 3, 0);
    shape.bezierCurveTo(3, 0, 3, 1.5, 1.5, 1.5);
    shape.bezierCurveTo(0.5, 1.5, 0, 0.5, 0, 0.5);

    return new THREE.ExtrudeGeometry(shape, {
      depth: 1.2,
      bevelEnabled: true,
      bevelThickness: 0.4,
      bevelSize: 0.3,
      bevelSegments: 16,
    });
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.1;
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.25;
    // Heartbeat scale
    const beat = 1 + Math.sin(t * 3) * 0.02;
    meshRef.current.scale.setScalar(0.45 * beat);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[Math.PI, 0, 0]}>
      <meshStandardMaterial
        color="#DC143C"
        emissive="#ff1a5c"
        emissiveIntensity={0.5}
        roughness={0.15}
        metalness={0.85}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

function Sparkles() {
  const ref = useRef<THREE.Points>(null);
  const count = 250;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ff69b4"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

const Heart3D = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center py-16">
    <div className="w-full h-[55vh] md:h-[65vh]">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#DC143C" />
        <pointLight position={[-5, -3, 4]} intensity={0.6} color="#ff69b4" />
        <spotLight
          position={[0, 6, 3]}
          intensity={0.7}
          color="#ffffff"
          angle={0.4}
          penumbra={0.6}
        />
        <HeartMesh />
        <Sparkles />
      </Canvas>
    </div>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-4xl text-center px-6 mt-6 glow-pink italic"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      You are my favorite person in the universe
    </motion.p>
  </section>
);

export default Heart3D;
