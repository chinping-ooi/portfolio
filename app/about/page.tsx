"use client"

import { GraduationCap, CheckCircle2, User, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const education = [
  {
    degree: "Diploma in Information Technology",
    school: "Tunku Abdul Rahman University of Management and Technology",
    period: "2022 - 2024",
    cgpa: "3.2 / 4.0",
    description: "Solid foundation in full-stack development and system architecture.",
    coursework: [
      "System Analysis & Design", "SDLC", "Object-Oriented Programming",
      "Database Management (DBMS)", "MVC Architecture", "ERD & Class Diagrams"
    ]
  },
  {
    degree: "Sijil Pelajaran Malaysia (SPM)",
    school: "SMJK Krian",
    period: "2016 - 2021",
    description: "Completed secondary education with focused studies in Economics and Accounting."
  }
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-orange-500 selection:text-white">
      <div className="absolute inset-0 z-0 opacity-60 scale-105 transition-opacity duration-1000" style={{ backgroundImage: "url('/background/flower-2.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.6)" }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black/60" />

      <div className="relative z-20 max-w-6xl mx-auto pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center mb-20 md:mb-32">
          <div className="relative group animate-fade-in-left">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl bg-white/[0.07] backdrop-blur-md flex items-center justify-center group-hover:border-orange-500/40 transition-all duration-700">
              {/* Animated Background Mesh - Slightly brighter */}
              <div className="absolute inset-0 opacity-30 transition-opacity duration-1000 group-hover:opacity-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#f97316_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_#f97316_0%,transparent_60%)]" />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="relative p-8 rounded-full bg-white/10 border border-white/20 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-700 overflow-hidden">
                  <User size={80} strokeWidth={0.5} className="text-white/40 group-hover:text-orange-500 transition-all duration-700 transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black tracking-tighter text-white group-hover:text-orange-400 transition-all duration-700">
                    Chin Ping
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Identity Active</span>
                  </div>
                </div>
              </div>

              {/* Decorative terminal corners - slightly more visible */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-white/20 group-hover:border-orange-500/40 transition-all duration-700 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-white/20 group-hover:border-orange-500/40 transition-all duration-700 rounded-br-lg" />
              <div className="absolute top-6 right-6">
                <Terminal size={14} className="text-white/10 group-hover:text-orange-500/30 transition-all duration-700" />
              </div>

              {/* Scanning Line */}
              <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent top-0 animate-scan pointer-events-none" />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Professional Profile</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                Junior <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Software</span> Engineer.
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-xl">
                I'm Ooi Chin Ping, a Junior Software Engineer with nearly <span className="text-white font-medium"> 2 years</span> of full-stack experience, primarily focused on <span className="text-white font-medium">frontend and backend</span> architectures for <span className="text-white font-medium">website and ERP development</span>, along with basic DevOps tools. I have delivered <span className="text-white font-medium">20+ CMS websites</span> and contributed to <span className="text-white font-medium">2+ ERP systems</span>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-2 sm:gap-x-12 md:gap-x-16 pt-8 border-t border-white/5 whitespace-nowrap overflow-x-auto scrollbar-none">
              <div className="relative pl-3 md:pl-4 min-w-fit">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-7 md:h-8 bg-orange-500 rounded-full"></div>
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1 leading-none">20<span className="text-orange-500 text-xl md:text-2xl">+</span></h4>
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Websites</p>
              </div>
              <div className="relative pl-3 md:pl-4 min-w-fit">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-7 md:h-8 bg-white/10 rounded-full"></div>
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1 leading-none">1</h4>
                <p className="text-[9px] md:text-[10px] text-orange-500/80 uppercase tracking-widest font-bold">SaaS Builder</p>
              </div>
              <div className="relative pl-3 md:pl-4 min-w-fit">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-7 md:h-8 bg-white/10 rounded-full"></div>
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1 leading-none">2<span className="text-orange-500 text-xl md:text-2xl">+</span></h4>
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">ERP Systems</p>
              </div>
            </div>

            <a href="https://drive.google.com/file/d/1W5kr_XbUxZsLvfXEzbZuP12empF3eeg-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black tracking-widest rounded-full hover:bg-orange-500 hover:text-white transition-all active:scale-95 mt-2 w-fit">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <div className="mb-10 md:mb-16">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Career Path</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience History</h2>
          </div>

          <div className="space-y-12">
            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-orange-500/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Junior Software Engineer</h3>
                  <p className="text-gray-400 font-medium mb-3 text-sm">Lexi Global Sdn Bhd</p>
                  <p className="text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase">Full-Stack Development</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 px-5 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 w-fit h-fit shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                  June 2024 - Present
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
                <div className="space-y-4">
                  <h4 className="text-white text-xs font-black uppercase tracking-widest opacity-60">Responsibilities</h4>
                  <ul className="space-y-3">
                    {[
                      "Developed full-stack websites and ERP systems with basic DevOps integration.",
                      "Configured secure domain pointing and network routing via Cloudflare.",
                      "Liaised directly with clients to translate business requirements into technical specs.",
                      "Owned full SDLC involvement from analysis to testing and documentation."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white text-xs font-black uppercase tracking-widest opacity-60">Key Impact</h4>
                  <ul className="space-y-3">
                    {[
                      "Delivered 20+ custom CMS and website solutions.",
                      "Built heavy-duty trailer rental ERP system with complex logic.",
                      "Engineered a proprietary website builder SaaS with high-end CSS.",
                      "Designed and implemented high-volume ERP import & export systems."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed">
                        <CheckCircle2 size={14} className="text-orange-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-40">Tech Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Node.js", "MySQL", "MinIO", "PM2", "Docker", "Nginx", "Cloudflare"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-[11px] text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-orange-500/10 transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">IT Support Technical (Intern)</h3>
                  <p className="text-gray-400 font-medium mb-3 text-sm">Maxfinity IT Business Solution</p>
                  <p className="text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase">Infrastructure & Support</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 px-5 py-2 bg-orange-500/5 rounded-full border border-orange-500/20 w-fit h-fit transition-all group-hover:bg-orange-500/10 group-hover:border-orange-500/30">
                  Nov 2023 - Feb 2024
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                <ul className="space-y-4">
                  {[
                    "Assisted in professional hardware repair and multi-level troubleshooting.",
                    "Managed full system and software installations for optimized performance.",
                    "Provided efficient onsite and remote IT support to resolve critical issues."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed max-w-2xl">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <div className="mb-10 md:mb-16">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Coding Skills</h2>
          </div>

          <div className="space-y-12">
            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
              <h3 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-8">Experienced in</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Angular", "React", "TailwindCSS", "Bootstrap", "Web Design"].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:border-orange-500/50 hover:bg-white/10 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
                {["Node.js", "RESTful API", "MySQL", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-white/10 border border-orange-500/20 rounded-full text-white text-sm font-medium hover:border-orange-500/50 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
                <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:border-orange-500/50 transition-all cursor-default">Git</span>
              </div>
            </div>

            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Familiar with (basic)</h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "Java", "PHP", "C", "JSP", "JQuery", "AJAX", "Supabase", "Docker", "Nginx", "PM2"].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium hover:border-white/30 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
              <h3 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-8">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Malay", "Chinese (Mandarin) - Fluent", "Hokkien", "Teochew"].map((lang) => (
                  <span key={lang} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:border-orange-500/50 hover:bg-white/10 transition-all cursor-default">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 md:gap-16 mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-4">
              <GraduationCap className="text-orange-500" size={32} />
              Academic Foundation
            </h2>
            <p className="text-gray-500 leading-relaxed font-light">
              Foundational learning that shaped my analytical and problem-solving skills in the digital space.
            </p>
          </div>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-10 border-l border-white/10 group">
                <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 px-4 py-1.5 bg-orange-500/10 rounded-full border border-orange-500/20 w-fit">
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h4 className="text-gray-400 font-medium">{edu.school}</h4>
                  {edu.cgpa && (
                    <span className="text-[10px] font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/5">
                      CGPA {edu.cgpa}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl font-light mb-6">
                  {edu.description}
                </p>
                {edu.coursework && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span key={course} className="text-[10px] text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/5">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-1/4 -left-32 transform -rotate-90 text-[120px] font-black text-white/[0.03] pointer-events-none select-none -z-10 uppercase">
        Perak Based
      </div>
      <div className="fixed top-1/4 -right-32 transform rotate-90 text-[120px] font-black text-white/[0.03] pointer-events-none select-none -z-10 uppercase">
        Est 2024
      </div>
    </main>
  );
}