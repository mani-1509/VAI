"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Static Tech Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Static Warm Soft Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#ff834f]/15 via-[#ffa87d]/5 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2563eb]/10 via-[#7c3aed]/5 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-[#ff834f]/10 via-transparent to-transparent blur-3xl" />
    </div>
  );
}
