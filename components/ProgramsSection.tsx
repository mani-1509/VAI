"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Download, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProgramsSection() {
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [activeModalProg, setActiveModalProg] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const programs = [
    {
      id: "01",
      title: "Generative AI & Autonomous Agents Masterclass",
      badge: "Flagship Cohort",
      duration: "8 Weeks • Live Interactive Labs",
      summary:
        "The comprehensive flagship program for mastering prompt architectures, autonomous multi-agent pipelines (n8n/Make), and deploying production-grade AI systems.",
      modules: [
        {
          week: "Weeks 1-2",
          title: "Prompt Architecture & Reasoning",
          topics: ["Claude 3.7 & DeepSeek-R1", "XML Schemas & Context Windows"],
        },
        {
          week: "Weeks 3-4",
          title: "Autonomous Agent Swarms",
          topics: ["n8n & Make Orchestration", "CrewAI & Multi-Tool Routing"],
        },
        {
          week: "Weeks 5-6",
          title: "AI Media & Video Flywheels",
          topics: [
            "Midjourney & Flux Workflows",
            "Automated Scripting & Voice",
          ],
        },
        {
          week: "Weeks 7-8",
          title: "Monetization & Retainers",
          topics: [
            "Client Retainers ($2k-$10k+)",
            "Live Production Deployment",
          ],
        },
      ],
      price: "$499 / ₹39,999",
      schedule: "Cohort Starts May 15, 2026",
    },
    {
      id: "02",
      title: "Applied Prompt Engineering & Custom Assistants",
      badge: "Fast Track",
      duration: "4 Weeks • Hands-on Labs",
      summary:
        "Fast-track your personal productivity. Master prompt patterns, build specialized custom GPTs, and 10x your output with code & copy automation.",
      modules: [
        {
          week: "Week 1",
          title: "Foundation Models & Zero Hallucination",
          topics: [
            "Context Windows & System Prompts",
            "JSON Schema Enforcement",
          ],
        },
        {
          week: "Week 2",
          title: "Data Analysis & Scripting",
          topics: ["Automating Spreadsheets", "Custom Knowledge Embeddings"],
        },
        {
          week: "Week 3",
          title: "Custom GPTs & API Actions",
          topics: ["Building Proprietary GPTs", "Connecting External APIs"],
        },
        {
          week: "Week 4",
          title: "Personal Operating System",
          topics: ["Email & Meeting Systems", "Production Deployment"],
        },
      ],
      price: "$299 / ₹24,999",
      schedule: "Cohort Starts June 01, 2026",
    },
    {
      id: "03",
      title: "Executive AI & Business Transformation",
      badge: "Executive Mastermind",
      duration: "6 Weeks • Weekend Masterclasses",
      summary:
        "For business owners, executives, and department leads seeking to implement AI governance and organizational automation.",
      modules: [
        {
          week: "Weeks 1-2",
          title: "Strategic Opportunity Mapping",
          topics: ["High-ROI AI Assessment", "Security & Data Governance"],
        },
        {
          week: "Weeks 3-4",
          title: "Departmental Automation",
          topics: ["Sales Lead Pipelines", "Customer Triage & HR Bots"],
        },
        {
          week: "Weeks 5-6",
          title: "AI Leadership & Culture",
          topics: [
            "AI-Native Operating Culture",
            "1:1 Executive Roadmap Review",
          ],
        },
        {
          week: "Capstone",
          title: "Enterprise Deployment",
          topics: ["Executive Credential", "Measuring Company-wide ROI"],
        },
      ],
      price: "$899 / ₹69,999",
      schedule: "Next Batch: June 01, 2026",
    },
  ];

  const handleOpenSyllabus = (progTitle: string) => {
    setActiveModalProg(progTitle);
    setDownloadSuccess(false);
    setSyllabusModalOpen(true);
  };

  const handleDownloadSyllabus = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff834f", "#fffdef", "#2563eb"],
    });
    setTimeout(() => {
      setSyllabusModalOpen(false);
    }, 2000);
  };

  return (
    <section
      id="programs"
      className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
            Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#fffdef] font-heading">
            Structured Tracks for{" "}
            <span className="text-[#ff834f]">Every Goal</span>
          </h2>
          <p className="mt-3 text-base text-[#fffdef]/75 leading-relaxed font-sans">
            Scroll through our curriculum tracks. Each card is formatted with
            syllabus details and tuition outcomes in a balanced 2:1 ratio.
          </p>
        </div>

        {/* Stacked Sticky Cards Container in 2:1 Ratio */}
        <div className="space-y-12 pb-8">
          {programs.map((prog, idx) => {
            const topOffset = 80 + idx * 24;

            return (
              <div
                key={prog.id}
                style={{ top: `${topOffset}px`, backgroundColor: "#171717" }}
                className="sticky rounded-2xl p-6 sm:p-8 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#ff834f]/25 bg-[#171717] text-[#fffdef] transition-all duration-300 lg:aspect-[2/1] flex flex-col justify-between overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full">
                  {/* Left Column (8 cols): Header, Summary & 2x2 Modules Grid */}
                  <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
                    {/* Top Header */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <div className="flex items-center gap-2.5 text-xs font-semibold">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#ff834f]/10 text-[#ff834f] border border-[#ff834f]/25 text-[11px] font-bold">
                            {prog.badge}
                          </span>
                          <span className="text-[#fffdef]/60 text-[11px] font-mono">
                            {prog.duration}
                          </span>
                        </div>
                        <span className="text-xl font-bold font-mono text-white/30">
                          {prog.id}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#fffdef] tracking-tight">
                        {prog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#fffdef]/75 mt-1 leading-relaxed font-sans">
                        {prog.summary}
                      </p>
                    </div>

                    {/* 2x2 Compact Modules Grid */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#ff834f]">
                        Curriculum Highlights
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prog.modules.map((mod) => (
                          <div
                            key={mod.week}
                            className="p-3 rounded-xl border border-white/10 bg-[#101010] shadow-xs hover:border-[#ff834f]/40 transition-colors"
                          >
                            <div className="text-[10px] font-bold text-[#ff834f] font-mono">
                              {mod.week}
                            </div>
                            <div className="text-xs font-bold font-heading text-[#fffdef] truncate mt-0.5 mb-1">
                              {mod.title}
                            </div>
                            <ul className="space-y-0.5 text-[11px] text-[#fffdef]/70 font-sans">
                              {mod.topics.map((t, i) => (
                                <li key={i} className="flex items-center gap-1">
                                  <span className="text-[#ff834f] text-[9px]">
                                    •
                                  </span>
                                  <span className="truncate">{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (4 cols): Pricing & Action */}
                  <div className="lg:col-span-4 p-5 sm:p-6 rounded-xl bg-[#0c0c0c] text-[#fffdef] flex flex-col justify-between space-y-4 shadow-inner border border-white/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#ff834f] font-bold">
                        All-Inclusive Tuition
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-heading mt-0.5 text-[#fffdef]">
                        {prog.price}
                      </div>
                      <div className="text-[11px] text-[#fffdef]/60 mt-0.5 font-mono">
                        {prog.schedule}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-[#fffdef]/80 font-sans">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#ff834f] shrink-0" />
                        <span className="text-[11px]">
                          Academy Accreditation
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#ff834f] shrink-0" />
                        <span className="text-[11px]">Limited to 40 Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#ff834f] shrink-0" />
                        <span className="text-[11px]">
                          7-Day Money-Back Guarantee
                        </span>
                      </div>
                    </div>

                    <div className="pt-1 space-y-2">
                      <Link
                        href="/contact"
                        className="w-full claude-button-primary py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 block cursor-pointer hover:scale-105 transition-transform"
                      >
                        <span>Apply for Cohort</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleOpenSyllabus(prog.title)}
                        className="w-full py-2 rounded-xl border border-white/15 text-[11px] font-bold text-white/90 hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Syllabus</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Syllabus Download Modal */}
      {syllabusModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#171717] text-[#fffdef] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <button
              onClick={() => setSyllabusModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold font-heading text-[#fffdef]">
              Download Syllabus
            </h3>
            <p className="text-xs text-[#fffdef]/70 mt-1 mb-5 font-sans">
              Receive the complete curriculum guide for {activeModalProg}.
            </p>

            <form onSubmit={handleDownloadSyllabus} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#fffdef] mb-1 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#fffdef] mb-1 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                />
              </div>

              <button
                type="submit"
                className="w-full claude-button-primary py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer mt-2 hover:scale-105 transition-transform"
              >
                {downloadSuccess ? "✓ Syllabus Sent!" : "Get Instant Access"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
