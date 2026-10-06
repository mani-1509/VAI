"use client";

import React, { useState, useEffect, useRef } from "react";

export default function StickyTransformationEngine() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: "01",
      phase: "Phase 1 • Cognitive Framing",
      title: "Prompt Architecture & Reasoning Orchestration",
      desc: "Go beyond standard chat prompts. Master multi-shot meta-prompting, structured XML output formatting, context vector windows, and how to command frontier models like Claude 3.7 and DeepSeek.",
      tags: [
        "Claude 3.7 Thinking",
        "DeepSeek-R1",
        "Few-Shot Patterns",
        "Structured Output",
      ],
      preview: [
        "> SYSTEM: Initializing Cognitive Framework v4.2",
        "> INGEST: Parsing complex multi-variable domain inputs...",
        "> REASONING: Executing chain-of-thought synthesis...",
        "> RESULT: 10x high-fidelity architecture generated (280ms)",
      ],
    },
    {
      id: "02",
      phase: "Phase 2 • Agentic Systems",
      title: "Autonomous Multi-Agent Workflows (Zero Code)",
      desc: "Connect autonomous AI agents that conduct research, write copy, execute API webhooks, sync Notion & CRM databases, and manage multi-step business pipelines autonomously.",
      tags: [
        "n8n Pipelines",
        "Make.com Automation",
        "Auto-Research Swarms",
        "API Webhooks",
      ],
      preview: [
        "> AGENT_01 (Research Bot): Scraping market signals -> [DONE]",
        "> AGENT_02 (Copy Engine): Generating 8 campaign variants -> [DONE]",
        "> AGENT_03 (Sync Agent): Updating CRM & notifying team -> [LIVE]",
      ],
    },
    {
      id: "03",
      phase: "Phase 3 • Real Monetization",
      title: "Deploy Production Capstones & Scale Income",
      desc: "Package your practical AI skills into high-paying consulting retainers, internal company productivity systems, or autonomous client services.",
      tags: [
        "Client Retainers",
        "Production Capstone",
        "AI Consulting",
        "Career Promotion",
      ],
      preview: [
        "> AVERAGE ALUMNI METRICS:",
        "> +18.5 hrs saved weekly per operator",
        "> +45% average compensation / freelance rate jump",
        "> 100% verified production capstone deployment",
      ],
    },
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.25) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      const yOffset = -120;
      const y = targetCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="engine"
      className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
            Pedagogical Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#fffdef] font-heading">
            How We Build <span className="text-[#ff834f]">AI Architects</span>
          </h2>
          <p className="mt-3 text-base text-[#fffdef]/75 leading-relaxed font-sans">
            A structured, hands-on path from prompt foundations to autonomous
            production workflows.
          </p>
        </div>

        {/* 2-Column Sticky Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Sticky Left Selector */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-3">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#1f1f1f] text-[#fffdef] border-[#ff834f] shadow-lg scale-[1.02]"
                      : "bg-[#141414] text-[#fffdef]/60 border-white/10 hover:border-white/20 hover:bg-[#1a1a1a]"
                  }`}
                >
                  <div
                    className={`text-[11px] font-bold tracking-wider uppercase ${
                      isSelected ? "text-[#ff834f]" : "text-white/40"
                    }`}
                  >
                    {step.phase}
                  </div>
                  <div className="text-sm sm:text-base font-bold mt-1 font-heading text-[#fffdef]">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8 space-y-8">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  id={`step-card-${idx}`}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? "border-[#ff834f]/80 shadow-2xl bg-[#171717] ring-1 ring-[#ff834f]/30"
                      : "border-white/10 opacity-75 bg-[#121212]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-[#ff834f] mb-2">
                    <span className="font-bold tracking-wide">{step.phase}</span>
                    <span className="text-white/30 font-mono text-xl font-bold">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#fffdef] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#fffdef]/75 leading-relaxed mb-5 font-sans">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 text-xs text-[#fffdef] font-bold border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Terminal simulation */}
                  <div className="rounded-xl bg-[#0a0a0a] p-4 sm:p-5 font-mono text-xs text-[#fffdef] space-y-2 overflow-x-auto shadow-inner border border-white/10">
                    {step.preview.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className={
                          lIdx === step.preview.length - 1
                            ? "text-[#ff834f] font-bold"
                            : "text-[#fffdef]/75"
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
