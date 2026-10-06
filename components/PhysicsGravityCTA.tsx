"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import Matter from "matter-js";

interface PillConfig {
  text: string;
  bg: string;
  color: string;
  borderColor?: string;
  fontSize?: number;
}

// Strictly AI Academy Focused Pills
const PILLS: PillConfig[] = [
  {
    text: "AUTONOMOUS AGENTS",
    bg: "#171717",
    color: "#ff834f",
    borderColor: "#ff834f",
    fontSize: 16,
  },
  { text: "CLAUDE 3.7", bg: "#ff834f", color: "#ffffff", fontSize: 17 },
  { text: "DEEPSEEK-R1", bg: "#2563eb", color: "#ffffff", fontSize: 17 },
  { text: "PROMPT OPS", bg: "#7c3aed", color: "#ffffff", fontSize: 17 },
  { text: "GPT-4o & o3", bg: "#10b981", color: "#171717", fontSize: 17 },
  { text: "N8N WORKFLOWS", bg: "#ea580c", color: "#ffffff", fontSize: 16 },
  { text: "AI FOUNDERS", bg: "#ffc700", color: "#171717", fontSize: 17 },
  { text: "CREWAI", bg: "#ec4899", color: "#ffffff", fontSize: 17 },
  {
    text: "LANGCHAIN",
    bg: "#171717",
    color: "#10b981",
    borderColor: "#10b981",
    fontSize: 16,
  },
  { text: "RAG PIPELINES", bg: "#3b82f6", color: "#ffffff", fontSize: 17 },
  { text: "CURSOR & WINDSURF", bg: "#6366f1", color: "#ffffff", fontSize: 16 },
  { text: "AI ARCHITECTS", bg: "#ff834f", color: "#171717", fontSize: 17 },
  { text: "VECTOR SEARCH", bg: "#0d9488", color: "#ffffff", fontSize: 16 },
  { text: "FINE-TUNING", bg: "#facc15", color: "#171717", fontSize: 17 },
  {
    text: "ENTERPRISE AI",
    bg: "#171717",
    color: "#ffffff",
    borderColor: "#ffffff",
    fontSize: 16,
  },
  {
    text: "MIDJOURNEY",
    bg: "#ffffff",
    color: "#171717",
    borderColor: "#ff834f",
    fontSize: 17,
  },
  { text: "MAKE.COM", bg: "#8b5cf6", color: "#ffffff", fontSize: 17 },
  { text: "KNOWLEDGE GRAPHS", bg: "#0284c7", color: "#ffffff", fontSize: 16 },
  { text: "SYSTEM PROMPTS", bg: "#9333ea", color: "#ffffff", fontSize: 16 },
  { text: "METAPROMPTS", bg: "#10b981", color: "#ffffff", fontSize: 17 },
  { text: "AI AUTOMATION", bg: "#ff7d54", color: "#171717", fontSize: 17 },
  { text: "DEV WORKFLOWS", bg: "#06b6d4", color: "#171717", fontSize: 16 },
];

export default function PhysicsGravityCTA() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const isInitializedRef = useRef<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load trigger via IntersectionObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const spawnPhysics = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = Math.max(containerRef.current.clientHeight, 640);

    // Clean up previous engine if any
    if (engineRef.current) {
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (renderRef.current) Matter.Render.stop(renderRef.current);
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
    }

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 1.3, scale: 0.0015 },
    });
    engineRef.current = engine;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Boundaries: Floor at bottom of canvas, open ceiling so all fall cleanly
    const wallThickness = 120;
    const groundY = height;

    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(
      width / 2,
      groundY + wallThickness / 2,
      width * 2,
      wallThickness,
      wallOptions,
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      wallOptions,
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      wallOptions,
    );

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Measure exact text width helper
    const tempCtx = canvas.getContext("2d");

    // Create Crisp, Non-Stretched Pill Bodies (compact height: 56px)
    const pillHeight = 56;
    const columns = Math.max(Math.floor(width / 220), 3);

    const pillBodies = PILLS.map((pill, idx) => {
      let textWidth = 120;
      if (tempCtx) {
        tempCtx.font = `900 ${pill.fontSize || 16}px 'Space Mono', 'Unbounded', sans-serif`;
        textWidth = tempCtx.measureText(pill.text).width;
      }

      // Compact, tight, non-stretched pill width (padding +44px)
      const pillWidth = Math.round(textWidth + 44);

      // Distribute evenly across columns above the canvas so all pills enter the viewport immediately
      const colIndex = idx % columns;
      const rowIndex = Math.floor(idx / columns);
      const colWidth = width / columns;

      const startX =
        colWidth * colIndex + colWidth / 2 + (Math.random() - 0.5) * 40;
      const startY = -40 - rowIndex * 70 - (idx % 2) * 20;

      const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
        chamfer: { radius: pillHeight / 2 },
        restitution: 0.55,
        friction: 0.3,
        frictionAir: 0.014,
        density: 0.003,
        render: {
          fillStyle: pill.bg,
          strokeStyle: pill.borderColor || "transparent",
          lineWidth: pill.borderColor ? 2.5 : 0,
        },
      });

      (body as any).pillData = {
        ...pill,
        width: pillWidth,
        height: pillHeight,
      };

      // Random gentle spin & downward velocity
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: Math.random() * 2 + 1,
      });

      return body;
    });

    Composite.add(engine.world, pillBodies);

    // Mouse control for active catch & throw physics
    const mouse = Mouse.create(canvas);

    // Unbind mousewheel events so hovering the canvas never blocks page scrolling
    if (mouse.element) {
      mouse.element.removeEventListener(
        "mousewheel",
        (mouse as any).mousewheel,
      );
      mouse.element.removeEventListener(
        "DOMMouseScroll",
        (mouse as any).mousewheel,
      );
      mouse.element.removeEventListener("wheel", (mouse as any).mousewheel);
    }

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.85,
        damping: 0.05,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // High-DPI canvas text & multi-layer drop shadow drawing
    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;
      if (!ctx) return;

      pillBodies.forEach((b) => {
        const data = (b as any).pillData;
        if (!data) return;

        const { position, angle } = b;

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);

        const r = data.height / 2;
        const w = data.width;
        const h = data.height;

        // 1. Draw Deep Multi-Layer Drop Shadow
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
        ctx.shadowBlur = 16;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 8;

        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, r);
        ctx.fillStyle = data.bg;
        ctx.fill();
        ctx.restore();

        // 2. Draw Pill Body & Border
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, r);
        ctx.fillStyle = data.bg;
        ctx.fill();

        if (data.borderColor) {
          ctx.strokeStyle = data.borderColor;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // 3. Draw Crisp Bold Uppercase Text
        const fSize = data.fontSize || 16;
        ctx.font = `900 ${fSize}px 'Space Mono', 'Unbounded', 'Syne', system-ui, sans-serif`;
        ctx.fillStyle = data.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(data.text, 0, 1.5);

        ctx.restore();
      });
    });

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);
    isInitializedRef.current = true;
  };

  useEffect(() => {
    if (!isVisible) return;
    spawnPhysics();

    const handleResize = () => {
      if (isInitializedRef.current) {
        spawnPhysics();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (renderRef.current) Matter.Render.stop(renderRef.current);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
    };
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-12 sm:pt-16 pb-0 overflow-hidden bg-[#101010]"
    >
      {/* TOP CALLOUT STRIP & MARQUEE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#ff834f] text-[#fffdef] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden border border-[#171717]/10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-[#171717] text-[#fffdef]">
                <Sparkles className="w-3.5 h-3.5 text-[#ff834f]" />
                <span>WEEKLY AI INSIGHTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight text-[#171717]">
                YOUR INBOX JUST GOT 10X SMARTER
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/85 font-sans">
                Subscribe to our curated newsletter with breakdown guides,
                prompt architectures, and autonomous agent playbooks.
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#fffdef] text-[#171717] text-xs font-semibold placeholder:text-[#171717]/50 border border-[#171717]/15 focus:outline-none focus:ring-2 focus:ring-[#171717] shadow-inner"
              />
              <button className="claude-button-dark px-5 py-2.5 rounded-xl text-xs font-bold font-heading shrink-0 cursor-pointer flex items-center gap-1.5 active:scale-95">
                <span>JOIN FREE</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#171717] text-[#fffdef] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-white/10 text-[#ff834f] border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#ff834f]" />
                <span>1:1 STRATEGY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight text-[#fffdef]">
                ALWAYS HERE TO GUIDE YOUR AI ROADMAP
              </h3>
              <p className="text-xs sm:text-sm text-[#fffdef]/75 font-sans">
                Whether you're a founder, developer, or creator, our admissions
                team is ready to map your learning pathway.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href="/contact"
                className="claude-button-primary px-5 py-2.5 rounded-xl text-xs font-bold font-heading inline-flex items-center gap-1.5 active:scale-95"
              >
                <span>BOOK ADMISSIONS CALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://instagram.com/vaibhavaiacademy"
                target="_blank"
                rel="noreferrer"
                className="claude-button-secondary px-4 py-2.5 rounded-xl text-xs font-bold font-heading inline-flex items-center gap-1.5 active:scale-95"
              >
                <span>INSTAGRAM ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* MARQUEE RIBBON BANNER */}
        <div className="w-full overflow-hidden py-3.5 bg-[#171717] rounded-xl border border-white/10 shadow-md">
          <div className="flex items-center gap-6 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-6 text-sm sm:text-base font-bold font-heading tracking-widest text-[#fffdef]"
              >
                <span className="text-[#ff834f]">⟡</span>
                <span>BUILD WITH VAIBHAV AI ACADEMY</span>
                <span className="text-[#ff834f]">⚡</span>
                <span className="px-3.5 py-0.5 rounded-md bg-[#ff834f] text-[#171717]">
                  AUTONOMOUS WORKFLOWS
                </span>
                <span className="text-[#ff834f]">⟡</span>
                <span>PRODUCTION GRADE AI AGENTS</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-WIDTH EDGE-TO-EDGE INTERACTIVE PHYSICS GRAVITY PLAYGROUND */}
      <div className="relative w-full h-[640px] sm:h-[680px] bg-gradient-to-b from-[#141414] via-[#171717] to-[#0a0a0a] text-[#fffdef] p-6 sm:p-12 border-t border-b border-white/10 flex flex-col justify-between overflow-hidden select-none">
        {/* Background Header Text */}
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#ff834f] bg-white/10 border border-white/10 mb-3">
            <span>INTERACTIVE PHYSICS • DRAG & TOSS BADGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#fffdef] tracking-tight leading-[1.05]">
            BUILD WITH VAIBHAV AI. <br />
            <span className="text-[#ff834f]">THEN AUTOMATE IT ALL.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#fffdef]/75 max-w-xl font-sans">
            Grab, catch, and fling the badges below! Ready to master
            production-grade AI?
          </p>
        </div>

        {/* Redesigned Reset Gravity Button */}
        <button
          onClick={() => spawnPhysics()}
          title="Reset Physics Badges"
          className="group absolute top-6 right-6 sm:top-10 sm:right-10 z-20 px-4 py-2.5 rounded-full bg-[#171717]/85 hover:bg-[#1f1f1f] text-[#fffdef] border border-white/20 hover:border-[#ff834f] transition-all duration-200 active:scale-90 active:translate-y-0.5 cursor-pointer flex items-center gap-2 text-xs font-bold shadow-xl backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,131,79,0.25)]"
        >
          <RefreshCw className="w-4 h-4 text-[#ff834f] transition-transform duration-500 ease-out group-hover:rotate-180 group-active:rotate-360" />
        </button>

        {/* Full Width Interactive Physics Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-15 cursor-grab active:cursor-grabbing"
        />
      </div>
    </section>
  );
}
