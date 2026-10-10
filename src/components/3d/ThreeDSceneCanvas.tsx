import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDSceneCanvasProps {
  className?: string;
  intensity?: 'subtle' | 'vibrant';
  particleCount?: number;
}

export const ThreeDSceneCanvas: React.FC<ThreeDSceneCanvasProps> = ({
  className = '',
  intensity = 'subtle',
  particleCount = 180,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Verify WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Lightweight for background
    container.appendChild(renderer.domElement);

    // Multi-Point Lighting
    const ambient = new THREE.AmbientLight(0xADBBDA, intensity === 'vibrant' ? 1.0 : 0.6);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xF2F3F5, intensity === 'vibrant' ? 1.8 : 1.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x7AA7FF, 2, 20);
    pointLight.position.set(-8, -5, 5);
    scene.add(pointLight);

    // Floating Geometric Polyhedra (Study Knowledge Nodes)
    const floatingObjects: { mesh: THREE.Mesh; rotSpeed: { x: number; y: number; z: number }; initialY: number }[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.4, 0),
      new THREE.OctahedronGeometry(0.45, 0),
      new THREE.TorusGeometry(0.5, 0.08, 12, 32),
    ];

    const metallicMat = new THREE.MeshStandardMaterial({
      color: 0x8697C4,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: intensity === 'vibrant' ? 0.75 : 0.45,
    });

    const objectCount = intensity === 'vibrant' ? 10 : 6;
    for (let i = 0; i < objectCount; i++) {
      const geo = geometries[i % geometries.length];
      const mesh = new THREE.Mesh(geo, metallicMat);

      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8 - 2;

      mesh.position.set(x, y, z);
      scene.add(mesh);

      floatingObjects.push({
        mesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.01,
        },
        initialY: y,
      });
    }

    // Ambient Particle Constellation
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 22;
      positions[i + 1] = (Math.random() - 0.5) * 18;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x7091E6,
      size: 0.05,
      transparent: true,
      opacity: intensity === 'vibrant' ? 0.6 : 0.35,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObs = new ResizeObserver(handleResize);
    resizeObs.observe(container);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const t = clock.getElapsedTime();

      // Smooth mouse parallax
      curMouseX += (targetMouseX - curMouseX) * 0.04;
      curMouseY += (targetMouseY - curMouseY) * 0.04;

      camera.position.x = curMouseX;
      camera.position.y = -curMouseY;
      camera.lookAt(0, 0, 0);

      // Float & rotate polyhedra
      floatingObjects.forEach((item, idx) => {
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.rotation.z += item.rotSpeed.z;
        item.mesh.position.y = item.initialY + Math.sin(t * 0.8 + idx) * 0.35;
      });

      // Slowly rotate particle field
      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObs.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometries.forEach((g) => g.dispose());
      metallicMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, [intensity, particleCount]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
    />
  );
};
