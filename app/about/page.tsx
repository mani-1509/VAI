import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "About | Vaibhav AI Academy",
  description:
    "The mission, story, and principles behind Vaibhav AI Academy — empowering professionals and creators with practical artificial intelligence.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Hands-On First",
      desc: "No abstract slides. Every session is focused on configuring real automations, structured prompts, and deployable agents.",
    },
    {
      title: "Zero Jargon",
      desc: "We demystify artificial intelligence into clear, intuitive mental models that anyone can master.",
    },
    {
      title: "Tangible ROI",
      desc: "We focus on real outcomes: hours saved per week, client retainers won, and career advancement.",
    },
    {
      title: "Frontier Speed",
      desc: "Curriculum updated continuously to reflect the latest releases: Claude 3.7, DeepSeek-R1, and modern agent systems.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Inception",
      desc: "Launched with a focus on practical generative AI workflows, mentoring 1,500 students in the first 90 days.",
    },
    {
      year: "2025",
      title: "Enterprise & Automation Tracks",
      desc: "Expanded into cohort-based masterclasses and autonomous agent tracks across startups and agencies.",
    },
    {
      year: "2026",
      title: "15,000+ Global Alumni Network",
      desc: "One of the leading applied AI academies, featuring live interactive labs and private mastermind access.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#fffdef]">
      {/* Hero */}
      <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25">
            Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fffdef] leading-tight font-heading">
            Democratizing <span className="text-[#ff834f]">Applied AI</span>
          </h1>
          <p className="text-base text-[#fffdef]/75 max-w-xl mx-auto leading-relaxed font-sans">
            We bridge the gap between AI hype and real-world implementation,
            empowering individuals to master high-leverage workflows.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 text-center space-y-4 shadow-xl">
                <div className="relative w-28 h-28 mx-auto rounded-2xl bg-[#101010] border border-white/10 p-3 shadow-xs">
                  <Image
                    src="/VAI.png"
                    alt="Vaibhav AI Academy"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#fffdef]">Vaibhav</h3>
                  <p className="text-xs font-bold text-[#ff834f] mt-0.5 font-mono">
                    Founder & Lead AI Architect
                  </p>
                </div>
                <div className="pt-1">
                  <a
                    href="https://www.instagram.com/vaibhavaiacademy/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-bold text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>@vaibhavaiacademy</span>
                  </a>
                </div>
                <p className="text-xs text-[#fffdef]/70 leading-relaxed font-sans text-left pt-2 border-t border-white/10">
                  "Most AI education focuses on theory or toy examples. We
                  built Vaibhav AI Academy to teach the exact production systems,
                  reasoning patterns, and autonomous pipelines that drive
                  tangible business results."
                </p>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25">
                The Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fffdef] font-heading">
                Why Vaibhav AI Academy Exists
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#fffdef]/75 leading-relaxed font-sans">
                <p>
                  Artificial Intelligence is the single largest leverage
                  multiplier of our generation. However, the speed of model
                  releases has created immense noise and confusion.
                </p>
                <p>
                  Our curriculum strips away unnecessary complexity to focus on
                  repeatable architectures: prompt reasoning schemas, n8n/Make
                  autonomous pipelines, and actionable implementation playbooks.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl border border-white/10 bg-[#171717]">
                  <div className="text-2xl font-bold font-heading text-[#ff834f]">
                    15k+
                  </div>
                  <div className="text-xs text-[#fffdef]/60 mt-0.5 font-sans">
                    Alumni Mentored
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-[#171717]">
                  <div className="text-2xl font-bold font-heading text-[#fffdef]">
                    100%
                  </div>
                  <div className="text-xs text-[#fffdef]/60 mt-0.5 font-sans">
                    Hands-on Practice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
              Core Pillars
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fffdef] font-heading">
              Our Educational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-lg space-y-2 hover:border-[#ff834f]/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-bold font-heading text-[#fffdef]">
                  <Check className="w-4 h-4 text-[#ff834f]" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#fffdef]/75 leading-relaxed font-sans pl-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
              Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fffdef] font-heading">
              Key Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-[#171717] border border-white/10 shadow-md space-y-3"
              >
                <div className="text-2xl font-bold font-mono text-[#ff834f]">
                  {m.year}
                </div>
                <div className="text-sm font-bold font-heading text-[#fffdef]">
                  {m.title}
                </div>
                <p className="text-xs text-[#fffdef]/75 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="w-full py-16 bg-[#171717] text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#fffdef]">
            Ready to Master Practical AI?
          </h2>
          <p className="text-xs sm:text-sm text-[#fffdef]/75 max-w-md mx-auto font-sans">
            Join thousands of professionals and creators building autonomous agent workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="claude-button-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span>Explore Programs & Apply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
