"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 border border-white/10">
                <Image
                  src="/VAI.svg"
                  alt="Vaibhav AI Academy"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="font-bold text-sm sm:text-base tracking-tight text-[#fffdef] font-heading">
                VAIBHAV AI
              </div>
            </Link>
          </div>

          {/* Middle: Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-1 p-1 rounded-full border border-white/10 bg-[#171717]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                    isActive
                      ? "bg-[#ff834f] text-[#171717] shadow-sm"
                      : "text-[#fffdef]/70 hover:text-[#fffdef] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Instagram + CTA */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-3">
            <a
              href="https://www.instagram.com/vaibhavaiacademy/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#fffdef] hover:border-[#ff834f] hover:text-[#ff834f] transition-colors"
              aria-label="Instagram @vaibhavaiacademy"
              title="@vaibhavaiacademy on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/contact"
              className="claude-button-primary px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 transition-transform"
            >
              <span>Apply</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="claude-button-primary px-3 py-1 rounded-md text-xs font-bold"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#fffdef] hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 mt-3 border-t border-white/10 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-bold rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#ff834f] text-[#171717]"
                      : "text-[#fffdef] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <a
                href="https://www.instagram.com/vaibhavaiacademy/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#ff834f]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@vaibhavaiacademy</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
