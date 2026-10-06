"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function BentoFeatures() {
  const [activeTab, setActiveTab] = useState<"standard" | "vai">("vai");
  const [copied, setCopied] = useState(false);

  const samplePrompt = {
    standard:
      "Write a marketing email for my B2B SaaS tool that improves customer retention.",
    vai:
      "<system_role>Senior B2B Growth Architect & Direct-Response Strategist</system_role>\n<context>Product: RetentionAI (Reduces churn by 28% via predictive health scores)</context>\n<objective>Draft a 3-part nurture sequence utilizing the PAS framework</objective>\n<constraints>Authoritative tone, under 140 words, include 2 clear action calls</constraints>",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePrompt[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
            Core Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#fffdef] font-heading">
            Built for High-Leverage <span className="text-[#ff834f]">Execution</span>
          </h2>
          <p className="mt-3 text-base text-[#fffdef]/75 leading-relaxed font-sans">
            Tangible skills, tested automation templates, and actionable systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Interactive Prompt Sandbox (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff834f]">
                  Prompt Architecture Lab
                </span>
                <div className="flex items-center gap-1 p-0.5 rounded-lg border border-white/10 bg-black/40 text-xs">
                  <button
                    onClick={() => setActiveTab("standard")}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer font-bold ${
                      activeTab === "standard"
                        ? "bg-[#252525] text-[#fffdef]"
                        : "text-[#fffdef]/60 hover:text-[#fffdef]"
                    }`}
                  >
                    Basic Prompt
                  </button>
                  <button
                    onClick={() => setActiveTab("vai")}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer font-bold ${
                      activeTab === "vai"
                        ? "bg-[#ff834f] text-[#171717] shadow-xs"
                        : "text-[#fffdef]/60 hover:text-[#fffdef]"
                    }`}
                  >
                    VAI Meta-Prompt
                  </button>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#fffdef]">
                Cognitive Framing vs. One-Liner Prompts
              </h3>
              <p className="text-xs sm:text-sm text-[#fffdef]/75 mt-1 mb-4 leading-relaxed font-sans">
                Learn XML tag scoping, few-shot conditioning, and structured
                reasoning to achieve enterprise-grade outputs.
              </p>

              {/* Code Box */}
              <div className="rounded-xl bg-[#0a0a0a] text-[#fffdef] p-4 font-mono text-xs relative shadow-inner border border-white/10">
                <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/10 text-[11px] text-[#fffdef]/60">
                  <span>
                    {activeTab === "vai"
                      ? "XML Structured Template"
                      : "Generic Query"}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[#ff834f] hover:underline cursor-pointer font-bold"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[#fffdef]/90 max-h-36 overflow-y-auto">
                  {samplePrompt[activeTab]}
                </pre>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#fffdef]/60 flex justify-between">
              <span>500+ Verified Blueprints Included</span>
              <span className="font-bold text-[#ff834f]">
                High-Precision Output
              </span>
            </div>
          </div>

          {/* Card 2: 2026 Model Selection Matrix (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff834f] mb-3 block">
                Model Matrix
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#fffdef]">
                The Frontier Stack
              </h3>
              <p className="text-xs sm:text-sm text-[#fffdef]/75 mt-1 mb-5 leading-relaxed font-sans">
                Know precisely which model to deploy for reasoning, coding, and
                automating.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { name: "Claude 3.7", for: "Complex Reasoning" },
                  { name: "DeepSeek-R1", for: "Cost-Effective Logic" },
                  { name: "GPT-4o & o3", for: "Multimodal Analysis" },
                  { name: "n8n / Make", for: "Multi-Agent Pipelines" },
                  { name: "Cursor", for: "AI Code Generation" },
                  { name: "Midjourney", for: "Generative Visuals" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-[#ff834f]/50 transition-colors"
                  >
                    <div className="font-bold text-[#fffdef] font-heading">{item.name}</div>
                    <div className="text-[10px] text-[#fffdef]/60 mt-0.5 font-sans">
                      {item.for}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#fffdef]/60">
              Curriculum updated weekly as new models release
            </div>
          </div>

          {/* Card 3: 1:1 Reviews (4 cols) */}
          <div className="md:col-span-1 lg:col-span-4 p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff834f] mb-2 block">
              Support
            </span>
            <h4 className="text-base font-bold font-heading text-[#fffdef]">
              1:1 Workflow Reviews
            </h4>
            <p className="text-xs text-[#fffdef]/75 mt-1.5 leading-relaxed font-sans">
              Get your automation pipelines, prompts, and client proposals
              audited directly by senior mentors during office hours.
            </p>
          </div>

          {/* Card 4: Mastermind Network (4 cols) */}
          <div className="md:col-span-1 lg:col-span-4 p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff834f] mb-2 block">
              Community
            </span>
            <h4 className="text-base font-bold font-heading text-[#fffdef]">
              15,000+ Alumni Network
            </h4>
            <p className="text-xs text-[#fffdef]/75 mt-1.5 leading-relaxed font-sans">
              Private community access, collaboration opportunities, and direct
              inbound contract referrals.
            </p>
          </div>

          {/* Card 5: Automation Vault (4 cols) */}
          <div className="md:col-span-1 lg:col-span-4 p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff834f] mb-2 block">
              Assets
            </span>
            <h4 className="text-base font-bold font-heading text-[#fffdef]">
              Plug & Play Agent Vault
            </h4>
            <p className="text-xs text-[#fffdef]/75 mt-1.5 leading-relaxed font-sans">
              Download copy-paste JSON workflows for n8n, Make, research agents,
              and customer triage bots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
