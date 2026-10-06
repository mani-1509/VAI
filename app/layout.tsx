import type { Metadata } from "next";
import { Space_Mono, Plus_Jakarta_Sans, Newsreader, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  adjustFontFallback: false,
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  adjustFontFallback: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vaibhav AI Academy | Master Practical AI & Autonomous Workflows",
  description:
    "Vaibhav AI Academy is the premier learning academy for creators, professionals, and founders to master generative AI, prompt architectures, and autonomous agent workflows.",
  keywords: [
    "Vaibhav AI Academy",
    "AI Academy",
    "Generative AI Masterclass",
    "Autonomous AI Agents",
    "Prompt Engineering",
    "No-Code AI Automation",
  ],
  openGraph: {
    title: "Vaibhav AI Academy | Master Practical AI & Autonomous Workflows",
    description:
      "Join 15,000+ creators, professionals, and founders mastering practical AI, autonomous agent workflows, and prompt engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceMono.variable} ${plusJakarta.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0d0d0d] text-[#fffdef] selection:bg-[#ff834f]/30 selection:text-[#ff834f] relative">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
