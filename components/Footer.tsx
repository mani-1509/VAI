"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-white/15 bg-[#080808] text-[#fffdef] pt-16 pb-12 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 border border-white/15 flex items-center justify-center shadow-xs">
                <Image
                  src="/VAI.svg"
                  alt="VAI Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-bold text-base sm:text-lg text-[#fffdef] font-heading tracking-tight">
                VAIBHAV AI ACADEMY
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#fffdef]/80 leading-relaxed max-w-sm font-sans">
              Teaching creators, professionals, and founders how to master
              practical generative AI, prompt architectures, and autonomous
              agent systems.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/vaibhavaiacademy/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-all hover:scale-105 shadow-xs"
                aria-label="Instagram"
                title="@vaibhavaiacademy on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-all hover:scale-105 shadow-xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-all hover:scale-105 shadow-xs"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-all hover:scale-105 shadow-xs"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff834f] font-mono">
              Academic Tracks
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#fffdef]/80">
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Autonomous Agents Masterclass
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Applied Prompt Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Executive AI Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/#engine"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Pedagogical Framework
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff834f] font-mono">
              Explore
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#fffdef]/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  About Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Admissions & Calls
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="hover:text-[#ff834f] transition-colors"
                >
                  Alumni Outcomes
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Info (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff834f] font-mono">
              Admissions
            </div>
            <div className="space-y-2 text-xs sm:text-sm font-sans text-[#fffdef]/80">
              <div className="text-[#fffdef] font-bold">Batch 2026 Open</div>
              <div className="text-[#fffdef]/60">40 Seats per cohort</div>
              <Link
                href="/contact"
                className="inline-block mt-1 text-xs font-bold text-[#ff834f] hover:underline"
              >
                Apply for Cohort →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-mono">
          <div>© 2026 Vaibhav AI Academy. All rights reserved.</div>
          <div className="flex items-center gap-2 text-[#ff834f]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff834f] animate-pulse" />
            <span className="font-bold">ALL SYSTEMS OPERATIONAL • 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
