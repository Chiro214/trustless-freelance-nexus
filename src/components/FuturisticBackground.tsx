
import { Canvas } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

// Wave surface component
const WaveSurface = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create wave geometry
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 100, 100);
    return geo;
  }, []);

  // Create gradient material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color(0x6366f1) }, // Blue
        uColorMiddle: { value: new THREE.Color(0x8b5cf6) }, // Violet  
        uColorEnd: { value: new THREE.Color(0x06b6d4) }, // Cyan
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Create flowing wave pattern
          float elevation = sin(modelPosition.x * 0.3 + uTime * 0.5) * 0.3;
          elevation += sin(modelPosition.y * 0.2 + uTime * 0.3) * 0.2;
          elevation += sin(modelPosition.x * 0.1 + modelPosition.y * 0.1 + uTime * 0.2) * 0.4;
          
          modelPosition.z += elevation;
          vElevation = elevation;
          
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorMiddle;
        uniform vec3 uColorEnd;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          float mixStrength = (vElevation + 0.5) * 0.8;
          vec3 color = mix(uColorStart, uColorMiddle, mixStrength);
          color = mix(color, uColorEnd, vUv.x * 0.3);
          
          // Add energy glow effect
          float glow = 1.0 - abs(vElevation);
          color += glow * 0.2;
          
          gl_FragColor = vec4(color, 0.6);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  // Animate the waves
  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} rotation={[-Math.PI / 3, 0, 0]} />
  );
};

// Floating energy particles
const EnergyParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    const colors = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Main background component
const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Environment preset="night" />
        
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Directional light for energy effect */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#6366f1"
        />
        
        {/* Point lights for dynamic lighting */}
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <pointLight position={[-10, -5, 0]} intensity={0.5} color="#8b5cf6" />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <pointLight position={[10, 5, -5]} intensity={0.5} color="#06b6d4" />
        </Float>
        
        {/* Main wave surface */}
        <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
          <WaveSurface />
        </Float>
        
        {/* Energy particles */}
        <EnergyParticles />
        
        {/* Additional wave layers for depth */}
        <Float speed={1.2} rotationIntensity={0.02} floatIntensity={0.05}>
          <mesh rotation={[-Math.PI / 4, 0, Math.PI / 6]} position={[0, -2, -5]}>
            <WaveSurface />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};

export default FuturisticBackground;
