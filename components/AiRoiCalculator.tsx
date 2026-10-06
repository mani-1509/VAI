"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AiRoiCalculator() {
  const [manualHours, setManualHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [teamSize, setTeamSize] = useState(1);

  const hoursSavedPerWeek = Math.round(manualHours * 0.7 * teamSize);
  const annualDollarSavings = Math.round(hoursSavedPerWeek * hourlyRate * 48);
  const courseTuition = 499;
  const daysToRoi = Math.max(
    2,
    Math.round((courseTuition / ((hoursSavedPerWeek * hourlyRate) / 7)) * 10) / 10
  );

  return (
    <section className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25">
              ROI Simulator
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#fffdef] font-heading">
              Quantify Your <span className="text-[#ff834f]">AI Leverage</span>
            </h2>
            <p className="text-sm text-[#fffdef]/75 leading-relaxed font-sans">
              Estimate the hours reclaimed and revenue created when routine
              research, data entry, content synthesis, and workflows are automated.
            </p>

            <div className="p-4 rounded-xl border border-white/10 bg-[#171717] shadow-md text-xs text-[#fffdef]/75 leading-relaxed">
              <strong className="text-[#ff834f] block mb-1 font-heading text-sm font-bold">
                Alumni Benchmark
              </strong>
              93% of graduates recover their full tuition investment within 3
              weeks of applying custom automated workflows.
            </div>
          </div>

          {/* Right Calculator (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 shadow-xl space-y-6">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2 font-sans">
                <span className="text-[#fffdef] font-heading">Manual Work Per Week</span>
                <span className="text-[#ff834f] font-mono">{manualHours} hrs / week</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#ff834f]"
              />
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2 font-sans">
                <span className="text-[#fffdef] font-heading">Effective Hourly Value ($/hr)</span>
                <span className="text-[#ff834f] font-mono">${hourlyRate} / hr</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#ff834f]"
              />
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2 font-sans">
                <span className="text-[#fffdef] font-heading">Team Size</span>
                <span className="text-[#ff834f] font-mono">
                  {teamSize} {teamSize === 1 ? "Person" : "People"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#ff834f]"
              />
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#0a0a0a] text-[#fffdef] text-center shadow-inner border border-white/10">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold font-sans">
                  Time Saved
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#fffdef] mt-0.5">
                  {hoursSavedPerWeek}h
                </div>
                <div className="text-[10px] text-white/40">per week</div>
              </div>

              <div className="border-x border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-[#ff834f] font-bold font-sans">
                  Annual Value
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#ff834f] mt-0.5">
                  ${annualDollarSavings.toLocaleString()}
                </div>
                <div className="text-[10px] text-white/40">recovered</div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold font-sans">
                  Breakeven
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#fffdef] mt-0.5">
                  ~{daysToRoi}d
                </div>
                <div className="text-[10px] text-white/40">to 100% ROI</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full claude-button-primary py-3 rounded-xl text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 block cursor-pointer hover:scale-105 transition-transform"
            >
              <span>Automate Your Workflows</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
