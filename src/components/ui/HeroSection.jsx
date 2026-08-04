import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, MapPin, Mail } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Typewriter component for animated subtitle titles
const TypewriterEffect = ({ words = ['Full Stack Developer', 'Frontend Engineer', 'Solutions Engineer', 'MERN & Next.js Specialist'] }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 90);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text-cyan">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-5 sm:h-7 bg-[#10B981] ml-1 rounded-full"
      />
    </span>
  );
};

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6">
      <div className="w-full px-2 sm:px-12 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-5 sm:space-y-6"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold glass-panel border border-[#10B981]/40 text-[#10B981]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
            <span>Available for Full Stack Opportunities</span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Ronit <span className="gradient-text-cyan">Roy</span>
            </h1>
            <div className="mt-2 text-base sm:text-2xl font-bold text-slate-300 flex items-center justify-center md:justify-start gap-2 min-h-[40px] flex-wrap sm:flex-nowrap">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-[#10B981] shrink-0" />
              <TypewriterEffect />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
            Building fast, full-stack web experiences — from client platforms for 20+ businesses to AI-powered analytical tools.
          </p>

          {/* Location & Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#10B981]" />
              Kolkata, India
            </span>
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/royy-05/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#10B981] transition-colors"
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ronit-roy05/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#10B981] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:royyronit05@gmail.com"
                className="hover:text-[#10B981] transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-1">
            <a
              href="#my-work"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 font-extrabold text-xs sm:text-sm hover:shadow-lg hover:shadow-[#10B981]/30 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="Ronit_Roy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl glass-panel text-white font-semibold text-xs sm:text-sm hover:border-[#10B981]/50 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Profile Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative group w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px]">
            {/* Animated Glow Backing */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#10B981] via-emerald-600 to-[#059669] opacity-75 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse" />

            {/* Frame Container */}
            <div className="relative glass-panel p-2.5 sm:p-3 rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 flex items-center justify-center">
                <img
                  src="/assets/dp3.jpeg"
                  alt="Ronit Roy Profile"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-semibold text-white glass-panel px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                  <span className="flex items-center gap-1 text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    Ronit Roy
                  </span>
                  <span className="text-slate-400 text-[9px] uppercase tracking-wider font-mono">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive Scroll Down Indicator */}
      <div className="mt-8 md:mt-12 flex flex-col items-center gap-1.5 text-slate-400 text-[11px] animate-bounce pointer-events-none">
        <span>Scroll to Explore</span>
        <div className="w-4 h-7 rounded-full border border-slate-500 flex items-start justify-center p-0.5">
          <div className="w-1 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
