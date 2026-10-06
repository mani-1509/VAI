"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import BallRoboHero3D from "@/components/BallRoboHero3D";
import StickyTransformationEngine from "@/components/StickyTransformationEngine";
import BentoFeatures from "@/components/BentoFeatures";
import ProgramsSection from "@/components/ProgramsSection";
import AiRoiCalculator from "@/components/AiRoiCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import { ArrowRight, Sparkles } from "lucide-react";

// Lazy load physics playground to optimize initial page performance
const PhysicsGravityCTA = dynamic(
  () => import("@/components/PhysicsGravityCTA"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 flex items-center justify-center text-xs text-white/40">
        Loading interactive physics...
      </div>
    ),
  },
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#fffdef]">
      {/* HERO SECTION */}
      <section className="relative w-full pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Headline, Subtitle, Actions, Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ff834f]" />
                <span>COHORT ADMISSIONS OPEN • BATCH 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fffdef] leading-[1.08] font-heading">
                Master Practical AI
                <i className="text-[#ff834f] block sm:inline">
                  &quot;Automate Real Workflows&quot;
                </i>{" "}
                Accelerate Career.
              </h1>

              <p className="text-base sm:text-lg text-[#fffdef]/80 max-w-lg leading-relaxed font-sans">
                A rigorous, cohort-based academy designed to take you from basic
                prompts to production-grade autonomous agent systems, zero-code
                automation, and high-impact business implementations.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/#programs"
                  className="w-full sm:w-auto claude-button-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-all"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto claude-button-secondary px-6 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all"
                >
                  <span>Book Strategy Call</span>
                </Link>
              </div>

              {/* Minimalist Metrics */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md">
                <div className="p-3.5 rounded-xl bg-[#171717] border border-white/10 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-[#fffdef]">
                    1,500+
                  </div>
                  <div className="text-xs text-[#fffdef]/60 mt-0.5 font-sans">
                    Students Mentored
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#171717] border border-white/10 shadow-sm">
                  <div className="text-2l sm:text-3xl font-bold font-heading text-[#ff834f]">
                    4.9/5
                  </div>
                  <div className="text-xs text-[#fffdef]/60 mt-0.5 font-sans">
                    Average Rating
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#171717] border border-white/10 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-[#fffdef]">
                    100+
                  </div>
                  <div className="text-xs text-[#fffdef]/60 mt-0.5 font-sans">
                    Tools Covered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Robot Companion (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center justify-center">
                {/* Soft ambient radial glow behind robot */}
                <div className="absolute w-80 h-80 rounded-full bg-[#ff834f]/15 blur-3xl pointer-events-none" />
                <div className="absolute w-64 h-64 rounded-full bg-[#2563eb]/10 blur-3xl pointer-events-none -bottom-4 -right-4" />
                <BallRoboHero3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY TRANSFORMATION ENGINE */}
      <StickyTransformationEngine />

      {/* BENTO ADVANTAGE */}
      <BentoFeatures />

      {/* PROGRAMS & CURRICULUM */}
      <ProgramsSection />

      {/* INTERACTIVE ROI CALCULATOR */}
      <AiRoiCalculator />

      {/* REVIEWS & TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* INTERACTIVE PHYSICS GRAVITY CTA (LAZY LOADED) */}
      <PhysicsGravityCTA />
    </div>
  );
}
