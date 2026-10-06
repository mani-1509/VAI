"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "automation",
    experience: "beginner",
    message: "",
  });

  const [selectedSlot, setSelectedSlot] = useState("11:00 AM");
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [submitted, setSubmitted] = useState(false);
  const [callBooked, setCallBooked] = useState(false);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff834f", "#2563eb", "#ffffff"],
    });
    setSubmitted(true);
  };

  const handleBookCall = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ["#ff834f", "#10b981", "#ffffff"],
    });
    setCallBooked(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#fffdef]">
      {/* Hero */}
      <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25">
            Admissions & Consultation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fffdef] leading-tight font-heading">
            Get in <span className="text-[#ff834f]">Touch</span>
          </h1>
          <p className="text-base text-[#fffdef]/75 max-w-lg mx-auto leading-relaxed font-sans">
            Submit your cohort application or schedule a 1:1 strategy consultation
            with our academic team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Info & 1:1 Booking (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-lg font-bold font-heading text-[#fffdef]">
                  Direct Channels
                </h3>

                <div className="space-y-3 text-xs font-sans">
                  <a
                    href="https://www.instagram.com/vaibhavaiacademy/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-[#ff834f] hover:bg-white/10 transition-colors shadow-xs"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#ff834f]" />
                    <div>
                      <div className="font-bold text-[#fffdef] font-heading">Instagram</div>
                      <div className="text-[#ff834f] font-mono">@vaibhavaiacademy</div>
                    </div>
                  </a>

                  <div className="p-3 rounded-xl border border-white/10 bg-white/5 shadow-xs">
                    <div className="font-bold text-[#fffdef] font-heading">Email</div>
                    <div className="text-[#fffdef]/70 font-mono">
                      admissions@vaibhavaiacademy.com
                    </div>
                  </div>

                  <div className="p-3 rounded-xl border border-white/10 bg-white/5 shadow-xs">
                    <div className="font-bold text-[#fffdef] font-heading">Response Time</div>
                    <div className="text-[#fffdef]/70">
                      Within 2 to 4 hours (7 days a week)
                    </div>
                  </div>
                </div>
              </div>

              {/* 1:1 Strategy Call Booking Widget */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold font-heading text-[#fffdef]">
                    Book 1:1 Strategy Call
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff834f] px-2 py-0.5 rounded-full bg-[#ff834f]/10 border border-[#ff834f]/25 font-mono">
                    Free 20-Min
                  </span>
                </div>

                <p className="text-xs text-[#fffdef]/75 leading-relaxed font-sans">
                  Speak directly with an admissions lead to review your
                  background and select the right curriculum path.
                </p>

                {callBooked ? (
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#ff834f]/10 flex items-center justify-center text-[#ff834f]">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold font-heading text-[#fffdef]">
                      Strategy Call Confirmed!
                    </h4>
                    <p className="text-xs text-[#fffdef]/70 font-sans">
                      We sent a Google Meet invitation for {selectedDay} at{" "}
                      {selectedSlot}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookCall} className="space-y-4">
                    {/* Day Selection */}
                    <div>
                      <label className="block text-xs font-bold text-[#fffdef] mb-1.5 font-sans">
                        Select Day
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {["Today", "Tomorrow", "In 2 Days"].map((day) => (
                          <button
                            type="button"
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`py-2 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                              selectedDay === day
                                ? "bg-[#ff834f] text-[#171717] border-[#ff834f]"
                                : "border-white/10 bg-white/5 text-[#fffdef]/70 hover:border-white/20"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slot Selection */}
                    <div>
                      <label className="block text-xs font-bold text-[#fffdef] mb-1.5 font-sans">
                        Select Time Slot (EST)
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          "11:00 AM",
                          "02:30 PM",
                          "04:00 PM",
                          "06:30 PM",
                          "08:00 PM",
                          "09:30 PM",
                        ].map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 rounded-xl border text-center transition-all cursor-pointer font-mono font-bold ${
                              selectedSlot === slot
                                ? "bg-[#ff834f] text-[#171717] border-[#ff834f]"
                                : "border-white/10 bg-white/5 text-[#fffdef]/70 hover:border-white/20"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full claude-button-primary py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-transform"
                    >
                      <span>Reserve Call Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Cohort Application Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 shadow-2xl space-y-6">
                <div>
                  <div className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff834f] bg-[#ff834f]/10 border border-[#ff834f]/25 mb-2 font-mono">
                    Admissions Form
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#fffdef]">
                    Cohort Application (Batch 2026)
                  </h3>
                  <p className="text-xs text-[#fffdef]/75 mt-1 font-sans">
                    Complete your candidate profile. Admissions decisions are
                    reviewed within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#ff834f]/10 flex items-center justify-center text-[#ff834f]">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-[#fffdef]">
                      Application Submitted!
                    </h4>
                    <p className="text-xs text-[#fffdef]/75 max-w-sm mx-auto leading-relaxed font-sans">
                      Thank you, {formData.name || "Candidate"}. Our admissions
                      committee will review your profile and send enrollment
                      materials to {formData.email || "your email"}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Full Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                          Primary Goal *
                        </label>
                        <select
                          value={formData.goal}
                          onChange={(e) =>
                            setFormData({ ...formData, goal: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                        >
                          <option value="automation">
                            Automate Business Workflows
                          </option>
                          <option value="agency">
                            Build AI Agency / Client Retainers
                          </option>
                          <option value="career">
                            Career Promotion & Leadership
                          </option>
                          <option value="creator">
                            Scale Content & Media Production
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                        Prior AI Experience
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          { id: "beginner", label: "Beginner" },
                          { id: "intermediate", label: "Intermediate" },
                          { id: "advanced", label: "Advanced" },
                        ].map((exp) => (
                          <button
                            type="button"
                            key={exp.id}
                            onClick={() =>
                              setFormData({ ...formData, experience: exp.id })
                            }
                            className={`py-2 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                              formData.experience === exp.id
                                ? "bg-[#ff834f] text-[#171717] border-[#ff834f]"
                                : "border-white/10 bg-[#0a0a0a] text-[#fffdef]/70 hover:border-white/20"
                            }`}
                          >
                            {exp.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#fffdef] mb-1 font-sans">
                        What workflow or project do you want to build?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Briefly describe your current workflows or target AI projects..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/15 text-xs text-[#fffdef] focus:outline-none focus:border-[#ff834f]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full claude-button-primary py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
