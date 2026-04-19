"use client"

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hamel Film",
    image: "/projects/hamelfilm.png",
    link: "https://hamelfilm.com",
  },
  {
    id: 2,
    title: "Lexi Global",
    image: "/projects/lexiglobal.png",
    link: "https://lexiglobal.my",
  },
  {
    id: 3,
    title: "Digital SME",
    image: "/projects/digitalsme.png",
    link: "https://digitalsme.cloud",
  },
  {
    id: 4,
    title: "Cylontech",
    image: "/projects/cylontech.png",
    link: "https://www.cylontechsb.com",
  },
  {
    id: 5,
    title: "Inokalis",
    image: "/projects/inokalis.png",
    link: "http://inokalis.com.my",
  },
  {
    id: 6,
    title: "Smart Provident",
    image: "/projects/smartprovident.png",
    link: "https://www.smartprovident.com",
  },
  {
    id: 7,
    title: "Amica Food Inc",
    image: "/projects/amicafoodinc.png",
    link: "https://amicafoodinc.com",
  },
  {
    id: 8,
    title: "Nanoxield",
    image: "/projects/nanoxield.png",
    link: "http://nanoxield.com",
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-orange-500 selection:text-white">
      <div
        className="absolute inset-0 z-0 opacity-60 scale-105 transition-opacity duration-1000" style={{ backgroundImage: "url('/background/flower-4.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.6)" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />

      <div className="relative z-20 max-w-7xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">

        <div className="mb-20 md:mb-28 animate-fade-in-left">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-5 block">Selected Works · {projects.length} Projects</span>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.9]">
                MY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">WORKS.</span>
              </h1>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light max-w-xs md:text-right pb-2">
              Real production websites I personally built and delivered — each one live, client-facing, and shipped end-to-end.
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-orange-500/50 via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in [animation-delay:200ms]">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-700 bg-black/50 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] shadow-2xl">
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-70"
              />

              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

              {/* Top Section: Portfolio Tag */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 px-5 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg pointer-events-none">
                  For Portfolio Use Only
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-start gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-500">
                  {project.title}
                </h3>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                  Visit Live Site
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed -bottom-20 -right-20 text-[180px] font-black text-white/[0.02] pointer-events-none select-none uppercase -z-10 transform -rotate-12">
        Works
      </div>
    </main>
  );
}