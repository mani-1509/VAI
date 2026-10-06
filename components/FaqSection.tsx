"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need technical or coding experience to join?",
      a: "No. The curriculum is engineered for non-technical professionals, creators, and developers alike. We focus on zero-code automation tools (n8n, Make), prompt architectures, and intuitive agent setups.",
    },
    {
      q: "What is the expected weekly time commitment?",
      a: "We recommend 4 to 6 hours per week, which includes the interactive live cohort lab and hands-on workflow exercises. All sessions are recorded if you cannot attend live.",
    },
    {
      q: "What AI tools will I need access to?",
      a: "We provide guided setup instructions for Claude 3.7, ChatGPT Plus, DeepSeek, Cursor, and open-source automation frameworks, alongside exclusive partner perks and discounts.",
    },
    {
      q: "How does 1:1 mentorship work?",
      a: "You gain direct access to our private mastermind channel and weekly office hours where you can submit your workflows, prompts, and client pitches for personalized audits.",
    },
    {
      q: "What is the refund guarantee?",
      a: "We offer a 100% 7-day money-back guarantee. If you attend the first week and find it isn't the most actionable AI training you've taken, we will issue a full refund.",
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 border-b border-white/10 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-3">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#fffdef] font-heading">
            Frequently Asked <span className="text-[#ff834f]">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-1 rounded-2xl bg-[#171717] border border-white/10 overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold font-heading text-sm sm:text-base text-[#fffdef] hover:text-[#ff834f] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#ff834f] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#fffdef]/75 leading-relaxed border-t border-white/10 pt-3 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
