"use client"

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black selection:bg-orange-500 selection:text-white">
      <div className="absolute inset-0 z-0 opacity-70 scale-105 animate-[pulse_15s_ease-in-out_infinite]" style={{ backgroundImage: "url('/background/flower-1.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.6)" }} />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/90" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block px-5 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md animate-fade-in">
          <span className="text-xs font-bold text-orange-500 tracking-[0.3em] uppercase">Junior Software Developer</span>
        </div>

        <div className="overflow-hidden mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none animate-fade-in-left">
            CHIN PING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">OOI</span>
          </h1>
        </div>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light animate-fade-in [animation-delay:400ms]">
          Junior Software Developer with nearly <span className="text-white font-medium"> 2 years</span> of full-stack experience.
          Primarily focused on <span className="text-white font-medium">frontend and backend</span> for <span className="text-white font-medium">website and ERP development</span>, building and delivering <span className="text-white font-medium">20+ CMS websites</span> and reliable enterprise applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in [animation-delay:600ms]">
          <Link href="/project" className="group relative px-8 py-3.5 bg-white text-black text-xs font-black tracking-widest rounded-full transition-all hover:pr-10 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE WORKS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link href="/contact" className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black tracking-widest rounded-full backdrop-blur-md hover:bg-white/10 transition-all hover:border-white/30 active:scale-95 text-center">
            GET IN TOUCH
          </Link>

          <a href="https://drive.google.com/file/d/1iSx9Ili0cRfLQDcd4WAeskABNjP6qQxH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black tracking-widest rounded-full backdrop-blur-md hover:bg-orange-500 hover:text-white transition-all active:scale-95 text-center">
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="mt-16 md:mt-24 flex items-center justify-center gap-10 opacity-60 hover:opacity-100 transition-opacity duration-500 animate-fade-in [animation-delay:800ms]">
          <a href="mailto:chinping.ooi.03@gmail.com" className="text-white hover:text-orange-500 transition-colors transform hover:-translate-y-1 flex items-center gap-2">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Get in touch</span>
          </a>
        </div>
      </div>

      <div className="absolute top-20 left-10 z-20 hidden xl:block opacity-30 select-none animate-pulse">
        <div className="text-[10px] text-white tracking-[1em] uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Portfolio 2026
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 text-right hidden lg:block opacity-90">
        <span className="text-[11px] text-white font-bold tracking-[0.2em] uppercase block mb-1">Based in Perak / Penang, Malaysia</span>
        <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase">Open for Opportunities</span>
      </div>
    </main>
  );
}