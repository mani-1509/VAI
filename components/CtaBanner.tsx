"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-ambient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#171717] text-[#fffdef] p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle warm glow orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff834f]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-[#ff834f] bg-white/10 border border-white/10">
            Admissions Open • Cohort Starts May 15
          </div>

          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight font-heading">
            Build Real-World <span className="text-[#ff834f] font-editorial">AI Systems</span> with Us
          </h2>

          <p className="relative z-10 text-sm sm:text-base text-[#fffdef]/75 max-w-md mx-auto leading-relaxed font-sans">
            Join thousands of professionals, creators, and founders leveraging
            practical AI workflows.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto claude-button-primary px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Enroll in Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
