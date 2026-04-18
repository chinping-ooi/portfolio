"use client"

import { useEffect, useState } from "react";

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
    title: "Digital SME Cloud",
    image: "/projects/digitalsme.png",
    link: "https://digitalsme.cloud",
  },
  {
    id: 4,
    title: "Cylon Tech",
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
    title: "Digital SME Promo",
    image: "/projects/promo_digitalsme.png",
    link: "https://promo.digitalsme.cloud",
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
        className="absolute inset-0 z-0 opacity-60 scale-105 transition-opacity duration-1000" style={{ backgroundImage: "url('/background/flower-6.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.6)" }}
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
            <p className="text-sm text-gray-500 leading-relaxed font-light max-w-xs md:text-right pb-2">
              Real production websites I personally built and delivered — each one live, client-facing, and shipped end-to-end.
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-orange-500/50 via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in [animation-delay:200ms]">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-700 backdrop-blur-3xl">
              <div className="relative aspect-video overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-black text-[10px] font-black tracking-widest rounded-full hover:scale-105 transition-all">
                    VISIT LIVE SITE
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors uppercase">
                  {project.title}
                </h3>
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