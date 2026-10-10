import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FocusTimer3DVisualProps {
  isRunning: boolean;
  mode: 'focus' | 'shortBreak' | 'longBreak';
  remainingSeconds: number;
  totalTargetSeconds: number;
}

export const FocusTimer3DVisual: React.FC<FocusTimer3DVisualProps> = ({
  isRunning,
  mode,
  remainingSeconds,
  totalTargetSeconds,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ isRunning, mode, remainingSeconds, totalTargetSeconds });

  useEffect(() => {
    stateRef.current = { isRunning, mode, remainingSeconds, totalTargetSeconds };
  }, [isRunning, mode, remainingSeconds, totalTargetSeconds]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Multi-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xF2F3F5, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x7AA7FF, 3.5, 10);
    rimLight.position.set(-4, -3, 2);
    scene.add(rimLight);

    // Group for gyroscopic tilt
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Core Sphere (Flow State Pulse)
    const coreGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x3D52A0,
      metalness: 0.9,
      roughness: 0.18,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Inner Holographic Lattice
    const latticeGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x7AA7FF,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const latticeMesh = new THREE.Mesh(latticeGeo, latticeMat);
    group.add(latticeMesh);

    // 3. Concentric Metallic Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(1.65, 0.04, 16, 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xBFC3C9,
      metalness: 0.95,
      roughness: 0.12,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    group.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.9, 0.03, 16, 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x7AA7FF,
      metalness: 0.88,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    group.add(ring2);

    // Mouse Tracking Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.5;
      targetY = y * 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const t = clock.getElapsedTime();
      const { isRunning: running, mode: currentMode } = stateRef.current;

      // Color adjustments according to mode
      if (currentMode === 'focus') {
        coreMat.color.setHex(0x3D52A0);
        rimLight.color.setHex(0x7AA7FF);
      } else {
        coreMat.color.setHex(0x10B981); // Emerald recharge for breaks
        rimLight.color.setHex(0x34D399);
      }

      // Gyro rotation speed depends on whether timer is running
      const speedMult = running ? 1.6 : 0.4;

      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      group.rotation.y = t * 0.3 * speedMult + currentX;
      group.rotation.x = Math.sin(t * 0.2) * 0.2 - currentY;

      ring1.rotation.x = t * 0.8 * speedMult;
      ring1.rotation.y = t * 0.5 * speedMult;

      ring2.rotation.y = -t * 0.7 * speedMult;
      ring2.rotation.z = t * 0.4 * speedMult;

      latticeMesh.rotation.y = -t * 0.3;

      // Breathing scale pulse when running
      const pulse = running ? 1 + Math.sin(t * 2.2) * 0.04 : 1;
      coreMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      latticeGeo.dispose();
      latticeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Interactive 3D Focus Core (Move mouse to rotate)"
    />
  );
};
