"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Send, MapPin, ArrowUpRight, CheckCircle2, Loader2, XCircle, Briefcase } from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-orange-500 selection:text-white">
      <div className="absolute inset-0 z-0 opacity-70 scale-105 transition-opacity duration-1000" style={{ backgroundImage: "url('/background/flower-3.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(20%) brightness(0.6)" }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />

      <div className="relative z-20 max-w-6xl mx-auto pt-32 pb-20 px-6 md:px-12">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Communication</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Touch.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
            Let's build something extraordinary together. Whether you have a potential role, a project idea, or just want to connect—I'm just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex flex-col gap-4">
              <a href="mailto:chinping.ooi.03@gmail.com" className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-orange-500/30 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                    <Mail className="text-orange-500 group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Email Me</h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400 text-sm transition-colors group-hover:text-white/80">chinping.ooi.03@gmail.com</p>
                      <p className="text-[9px] uppercase tracking-widest font-black text-orange-500/70 group-hover:text-orange-400 transition-colors">I'll get back to you shortly.</p>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/20 transition-all duration-500 relative z-10 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} className="text-orange-500" />
                </div>
              </a>

              <a href="https://wa.me/60142538359" target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-orange-500/30 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Call Me</h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400 text-sm transition-colors group-hover:text-white/80">+60-142538359</p>
                      <p className="text-[9px] uppercase tracking-widest font-black text-orange-500/70 group-hover:text-orange-400 transition-colors">Drop me a WhatsApp or Email before calling.</p>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/20 transition-all duration-500 relative z-10 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} className="text-orange-500" />
                </div>
              </a>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-orange-500/30 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden cursor-default gap-6 sm:gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500 shrink-0">
                  <MapPin className="text-white group-hover:text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Location</h3>
                  <p className="text-gray-400 text-sm transition-colors group-hover:text-white/80">Based in Perak / Penang.</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-orange-500/30 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden cursor-default gap-6 sm:gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500 shrink-0">
                  <Briefcase className="text-white group-hover:text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Work Availability</h3>
                  <p className="text-gray-400 text-sm transition-colors group-hover:text-white/80">2-months notice period required.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 animate-fade-in shadow-2xl relative h-fit">
            {status === 'success' && (
              <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center rounded-[2.5rem] p-8 text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="text-orange-500 mb-4" size={64} />
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you very soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-orange-500 border border-orange-500/20 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm font-bold">
                  Send another
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-3 block group-focus-within:text-orange-500 transition-colors">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-all placeholder:text-white/30" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-3 block group-focus-within:text-orange-500 transition-colors">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-all placeholder:text-white/30" />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-3 block group-focus-within:text-orange-500 transition-colors">Subject</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can I help you?" className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-all placeholder:text-white/30" />
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-3 block group-focus-within:text-orange-500 transition-colors">Message</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me more about your project..." className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-all placeholder:text-white/30 resize-none" />
              </div>

              <button type="submit" disabled={status === 'loading'} className="group relative w-full h-14 bg-white rounded-full overflow-hidden transition-all active:scale-95 shadow-orange-500/10 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-center gap-3 text-black group-hover:text-white transition-colors">
                  {status === 'loading' ? (
                    <>
                      <span className="text-[11px] font-black uppercase tracking-widest">Sending...</span>
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : status === 'error' ? (
                    <>
                      <span className="text-[11px] font-black uppercase tracking-widest text-red-500 group-hover:text-white">Try Again</span>
                      <XCircle size={16} className="text-red-500 group-hover:text-white" />
                    </>
                  ) : (
                    <>
                      <span className="text-[11px] font-black uppercase tracking-widest">Shoot Message</span>
                      <Send size={16} />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-10 text-[10vw] font-black text-white/[0.02] pointer-events-none select-none uppercase -z-10 leading-none">
        Connection
      </div>
    </main>
  );
}