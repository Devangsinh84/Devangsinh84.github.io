import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralConstellation() {
  const groupRef = useRef();
  const lineMaterialRef = useRef();
  const nodesCount = 160;
  
  const [nodes, lines, colors] = useMemo(() => {
    const points = [];
    const colorArray = [];
    const primary = new THREE.Color("#10b981");
    const secondary = new THREE.Color("#3b82f6");

    for (let i = 0; i < nodesCount; i++) {
      const p = new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      points.push(p);
      
      // Randomly assign primary or secondary color to nodes
      const color = Math.random() > 0.8 ? secondary : primary;
      colorArray.push(color.r, color.g, color.b);
    }

    const linePoints = [];
    for (let i = 0; i < nodesCount; i++) {
      for (let j = i + 1; j < nodesCount; j++) {
        const distance = points[i].distanceTo(points[j]);
        if (distance < 4.5) {
          linePoints.push(points[i], points[j]);
        }
      }
    }
    return [
      new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 
      new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z])),
      new Float32Array(colorArray)
    ];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow majestic rotation
    groupRef.current.rotation.y = time * 0.05;
    
    // THE PULSE: Use a sine wave to oscillate the line opacity
    // This makes the network look "alive"
    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = 0.05 + Math.abs(Math.sin(time * 0.5)) * 0.15;
    }

    // Parallax
    const targetX = (state.pointer.y * 0.15);
    const targetY = (state.pointer.x * 0.15);
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (targetY - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={nodes.length / 3} array={nodes} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.12} vertexColors transparent opacity={0.8} />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial 
          ref={lineMaterialRef} 
          color="#10b981" 
          transparent 
          opacity={0.25} 
          linewidth={1} 
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralNode() {
  return (
    // Changed "absolute" to "relative w-full h-full"
    <div className="relative w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <NeuralConstellation />
      </Canvas>
      
      {/* THE UX VIGNETTE:
          This creates a soft dark 'tunnel' effect. 
          As you scroll, the text stays in this dark tunnel, 
          while the stars peeking out from the sides. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.5)_90%)]" />
    </div>
  );
}