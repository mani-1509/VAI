"use client";

import React, { useState } from "react";

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const reviews = [
    {
      name: "Rohan Mehta",
      role: "Growth Lead, Fintech",
      category: "growth",
      metric: "+52% Workflow Speed",
      quote:
        "Before the academy, I used ChatGPT as a basic lookup tool. Within three weeks, I had built automated content pipelines and ad variant systems with n8n and Claude.",
    },
    {
      name: "Pooja Deshmukh",
      role: "Founder, Agency Horizon",
      category: "agency",
      metric: "+$6,400/mo Added",
      quote:
        "The autonomous agent templates alone paid for the course immediately. We packaged AI automation services for our clients and signed 3 retainers in month two.",
    },
    {
      name: "Karan Singhania",
      role: "Senior Product Manager",
      category: "product",
      metric: "Promoted to AI Lead",
      quote:
        "The cognitive prompt architectures and executive frameworks gave me the clarity to lead our company's internal GenAI transformation.",
    },
    {
      name: "Ananya Roy",
      role: "Solopreneur & Creator",
      category: "creator",
      metric: "350k+ Views & 4x Output",
      quote:
        "Vaibhav's teaching is remarkably clear and practical. No useless hype. I cut down my weekly production hours from 20 to under 4.",
    },
    {
      name: "Siddharth Nair",
      role: "Full-Stack Engineer",
      category: "product",
      metric: "3x Shipping Velocity",
      quote:
        "Learning how to coordinate multi-agent LLM systems with Cursor and architectural constraints transformed how I ship software.",
    },
    {
      name: "Deepika Sen",
      role: "Operations Consultant",
      category: "agency",
      metric: "14 hrs/wk Reclaimed",
      quote:
        "The 1:1 office hours and community are exceptional. Whenever I hit an edge case, mentors reviewed and resolved my pipeline within hours.",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? reviews
      : reviews.filter((r) => r.category === activeCategory);

  return (
    <section
      id="reviews"
      className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
            Alumni Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#fffdef] font-heading">
            Trusted by <span className="text-[#ff834f]">15,000+</span> Alumni
          </h2>
          <p className="mt-3 text-base text-[#fffdef]/75 leading-relaxed font-sans">
            Real feedback from professionals, agency founders, and creators.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "All Reviews" },
            { id: "growth", label: "Growth & Marketing" },
            { id: "agency", label: "Agency & Freelance" },
            { id: "product", label: "Product & Engineering" },
            { id: "creator", label: "Creators" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#ff834f] text-[#171717] border-[#ff834f] shadow-sm"
                  : "bg-[#171717] text-[#fffdef]/70 border-white/10 hover:border-white/20 hover:text-[#fffdef]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-lg flex flex-col justify-between hover:border-[#ff834f]/40 transition-all hover:scale-[1.02]"
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-[#ff834f]/10 border border-[#ff834f]/25 text-[#ff834f] text-[11px] font-bold mb-3 font-mono">
                  {r.metric}
                </div>
                <p className="text-xs sm:text-sm text-[#fffdef]/80 leading-relaxed font-sans">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm font-heading text-[#fffdef]">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-[#fffdef]/50 font-sans">
                    {r.role}
                  </div>
                </div>
                <div className="text-[10px] font-bold text-[#ff834f] uppercase tracking-wider font-mono">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
