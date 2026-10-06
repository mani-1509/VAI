"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";

export default function BallRoboHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const roboGroupRef = useRef<THREE.Group | null>(null);
  const eyeRef = useRef<THREE.Object3D | null>(null);
  const leftLegRef = useRef<THREE.Object3D | null>(null);
  const rightLegRef = useRef<THREE.Object3D | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const eyeActionRef = useRef<THREE.AnimationAction | null>(null);
  const jumpTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || 480;
    let height = container.clientHeight || 520;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 2.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(4, 5, 4);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xff834f, 2.0);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    const frontKey = new THREE.PointLight(0xffe2d4, 1.6, 8);
    frontKey.position.set(0, 1.5, 3);
    scene.add(frontKey);

    // Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(3.0, 3.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x171717,
      transparent: true,
      opacity: 0.1,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.35;
    scene.add(shadowMesh);

    // Mouse Tracking Coordinates (Scoped to Right Hero Side)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let hasMouseMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Check if mouse is on the right side of the screen or near the 3D model container
      const isRightSide = e.clientX >= window.innerWidth * 0.42 || 
        (e.clientX >= rect.left - 60 && e.clientX <= rect.right + 60 && e.clientY >= rect.top - 60 && e.clientY <= rect.bottom + 60);

      if (isRightSide) {
        hasMouseMoved = true;
        // Normalize coordinates relative to container center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetMouseX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width * 0.65)));
        targetMouseY = Math.max(-1, Math.min(1, -(e.clientY - centerY) / (rect.height * 0.65)));
      } else {
        // Outside right side: smoothly relax back to idle center
        targetMouseX = 0;
        targetMouseY = 0;
      }
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Base transforms for eyes
    const eyeBasePos = new THREE.Vector3();

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      "/ballrobo.glb",
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.0 / (maxDim || 1);
        model.scale.set(scale, scale, scale);

        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale - 0.05;
        model.position.z = -center.z * scale;

        // Rotate front facing camera
        model.rotation.y = -Math.PI / 2;

        model.traverse((child) => {
          if (child.name === "LeftEye") {
            eyeRef.current = child;
            eyeBasePos.copy(child.position);
            child.renderOrder = 20;
          }
          if (child.name === "LeftLeg") {
            leftLegRef.current = child;
          }
          if (child.name === "RightLeg") {
            rightLegRef.current = child;
          }

          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.roughness = Math.min(mat.roughness ?? 0.35, 0.5);
              mat.metalness = Math.max(mat.metalness ?? 0.3, 0.2);
              if (child.name === "LeftEye") {
                mat.emissive = new THREE.Color(0xfffdef);
                mat.emissiveIntensity = 0.35;
              }
            }
          }
        });

        // Configure Animation Mixer
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            if (clip.name === "AntinaAction") {
              const antinaAction = mixer.clipAction(clip);
              antinaAction.setLoop(THREE.LoopRepeat, Infinity);
              antinaAction.timeScale = 0.35;
              antinaAction.play();
            } else if (clip.name === "EyeAction") {
              const eyeAction = mixer.clipAction(clip);
              eyeAction.setLoop(THREE.LoopOnce, 1);
              eyeAction.clampWhenFinished = true;
              eyeAction.timeScale = 1.0;
              eyeActionRef.current = eyeAction;
            }
          });
          mixerRef.current = mixer;
        }

        const rootGroup = new THREE.Group();
        rootGroup.add(model);
        scene.add(rootGroup);
        roboGroupRef.current = rootGroup;

        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error("Failed to load model:", err);
        setIsLoading(false);
      },
    );

    // Idle Look Sequence
    const idleGazeSequence = [
      { x: -0.045, y: 0.045, duration: 2.4 }, // top-left
      { x: 0, y: 0, duration: 2.0 }, // center
      { x: 0.045, y: 0.045, duration: 2.4 }, // top-right
      { x: 0, y: 0, duration: 2.0 }, // center
      { x: 0, y: -0.045, duration: 2.4 }, // down
      { x: 0, y: 0, duration: 2.5 }, // center
    ];

    let currentStep = 0;
    let stepTimer = 0;
    let blinkTimer = 0; // 5-second interval timer

    // Animation Loop
    let animId: number;
    let lastTime = performance.now();
    let startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;

      // Update animation mixer
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      // 5-second gap between blinks
      blinkTimer += delta;
      if (blinkTimer >= 5.0) {
        blinkTimer = 0;
        if (eyeActionRef.current) {
          eyeActionRef.current.reset().play();
        }
      }

      // Smooth mouse coordinate interpolation
      mouseX = THREE.MathUtils.lerp(mouseX, targetMouseX, 0.09);
      mouseY = THREE.MathUtils.lerp(mouseY, targetMouseY, 0.09);
      if (Math.abs(mouseX) < 0.01 && Math.abs(mouseY) < 0.01 && targetMouseX === 0) {
        hasMouseMoved = false;
      }

      // Idle look sequence timer
      stepTimer += delta;
      const gaze = idleGazeSequence[currentStep];
      if (stepTimer >= gaze.duration) {
        stepTimer = 0;
        currentStep = (currentStep + 1) % idleGazeSequence.length;
      }

      // Dynamic Eye Tracking: Eyes move visibly and accurately with mouse cursor
      if (eyeRef.current) {
        // Safe offset bounds within the black visor screen
        const maxOffsetZ = 0.12;
        const maxOffsetY = 0.09;

        const mouseEyeZ = -mouseX * maxOffsetZ; // horizontal tracking on face plane
        const mouseEyeY = mouseY * maxOffsetY;  // vertical tracking on face plane

        const targetZ = hasMouseMoved
          ? eyeBasePos.z + mouseEyeZ
          : eyeBasePos.z + gaze.x * 1.5;

        const targetY = hasMouseMoved
          ? eyeBasePos.y + mouseEyeY
          : eyeBasePos.y + gaze.y * 1.5;

        // Keep X safely positioned slightly in front so eyes never clip behind the visor
        const targetX = eyeBasePos.x + 0.004;

        eyeRef.current.position.z = THREE.MathUtils.lerp(
          eyeRef.current.position.z,
          targetZ,
          0.12,
        );
        eyeRef.current.position.y = THREE.MathUtils.lerp(
          eyeRef.current.position.y,
          targetY,
          0.12,
        );
        eyeRef.current.position.x = THREE.MathUtils.lerp(
          eyeRef.current.position.x,
          targetX,
          0.12,
        );
      }

      // Subtle Zero-G Leg Float
      if (leftLegRef.current && rightLegRef.current) {
        const floatSpeed = 1.0;
        leftLegRef.current.rotation.x = Math.sin(elapsed * floatSpeed) * 0.07;
        rightLegRef.current.rotation.x =
          Math.sin(elapsed * floatSpeed + 0.5) * -0.07;
      }

      // Body: Increased lively movement with floating hover and banking
      if (roboGroupRef.current) {
        const floatY = Math.sin(elapsed * 1.5) * 0.08;

        const targetBodyRotY = mouseX * 0.44; // turn head/body left/right with cursor
        const targetBodyRotX = -mouseY * 0.28; // tilt head/body up/down with cursor
        const targetBodyRotZ = -mouseX * 0.09; // subtle body banking angle
        const targetBodyX = mouseX * 0.08;     // gentle sideways hover drift

        if (!jumpTweenRef.current?.isActive()) {
          roboGroupRef.current.position.y = THREE.MathUtils.lerp(
            roboGroupRef.current.position.y,
            floatY,
            0.06,
          );
          roboGroupRef.current.position.x = THREE.MathUtils.lerp(
            roboGroupRef.current.position.x,
            targetBodyX,
            0.06,
          );
        }

        roboGroupRef.current.rotation.y = THREE.MathUtils.lerp(
          roboGroupRef.current.rotation.y,
          targetBodyRotY,
          0.09,
        );
        roboGroupRef.current.rotation.x = THREE.MathUtils.lerp(
          roboGroupRef.current.rotation.x,
          targetBodyRotX,
          0.09,
        );
        roboGroupRef.current.rotation.z = THREE.MathUtils.lerp(
          roboGroupRef.current.rotation.z,
          targetBodyRotZ,
          0.09,
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Interactive jump and eye reaction on click
  const handleJumpClick = () => {
    if (!roboGroupRef.current || jumpTweenRef.current?.isActive()) return;

    jumpTweenRef.current = gsap.to(roboGroupRef.current.position, {
      y: "+=0.35",
      duration: 0.28,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    if (eyeActionRef.current) {
      eyeActionRef.current.reset().play();
    }
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center select-none bg-transparent">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-[#ff834f]/15 blur-3xl" />
      </div>

      {/* WebGL Canvas */}
      <div
        ref={containerRef}
        onClick={handleJumpClick}
        className="w-full h-full cursor-pointer z-10"
        title="Click to make the companion jump!"
      />

      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-xs font-semibold text-[#171717]/50 tracking-wider uppercase">
            Loading AI Companion...
          </div>
        </div>
      )}
    </div>
  );
}
