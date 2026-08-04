import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'VTS Infotech',
    role: 'Full Stack Developer',
    year: '2025 – 2026',
    period: 'Dec 2025 – July 2026',
    badge: 'Full Stack Role',
    accent: '#10B981',
    bullets: [
      'Delivered web solutions for 20+ clients including Bengal Super League (BSL), Bazaar Kolkata, e-commerce brands, and resorts.',
      'Contributed to billing software development and built custom admin panels using PHP and the MERN stack.',
      'Developed complex web applications with Next.js and PHP; managed WordPress landing pages and marketing campaigns.',
      'Managed live deployments, real-time updates, and cross-team collaboration across multiple production environments.',
    ],
  },
  {
    company: 'Rescue Federation',
    role: 'Web Developer Intern',
    year: '2025',
    period: 'Aug – Nov 2025',
    badge: 'Internship',
    accent: '#10B981',
    bullets: [
      'Maintained and developed company websites using WordPress and PHP with live content updates.',
      'Installed, configured, and maintained custom WordPress plugins to enhance site capabilities.',
      'Optimized website load speeds, configured SEO meta tags, and boosted search index visibility.',
      'Redesigned visual layouts and implemented fully responsive UI across mobile and desktop devices.',
    ],
  },
  {
    company: 'Internshala',
    role: 'Web Development Trainee',
    year: '2025',
    period: 'Jan – Mar 2025',
    badge: 'Training Program',
    accent: '#10B981',
    bullets: [
      'Completed an intensive project-based Web Development curriculum covering full-stack concepts.',
      'Ranked top performer in cohort with an overall score of 97%.',
    ],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef(null);

  // Scroll animation hooks for dynamic line height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6">
      <div className="w-[92%] sm:w-[90%] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-panel border border-[#10B981]/40 text-[#10B981]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Zone 03 — Career Journey & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My Career & <span className="gradient-text-cyan">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative min-h-[400px]">
          {/* Vertical Track Background Line (Anchored at left-4 on mobile, left-[300px] on desktop) */}
          <div className="absolute left-4 md:left-[300px] top-4 bottom-4 w-1 -translate-x-1/2 bg-slate-800/80 rounded-full" />

          {/* Animated Scroll Progress Beam */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 md:left-[300px] top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#10B981] via-[#34d399] to-[#059669] shadow-[0_0_12px_#10B981] rounded-full z-0"
          />

          {/* Experience Timeline Items */}
          <div className="space-y-10 sm:space-y-12 relative z-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* 100% Perfectly Aligned Dot Node (Anchored at left-4 on mobile, left-[300px] on desktop) */}
                <div className="absolute left-4 md:left-[300px] -translate-x-1/2 top-1.5 flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Glowing outer pulse aura */}
                    <div className="absolute -inset-2 rounded-full bg-[#10B981]/30 blur-md animate-pulse" />
                    {/* Node Circle */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-950 border-2 flex items-center justify-center z-10 shadow-lg border-[#10B981]">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981] animate-ping" />
                    </div>
                  </motion.div>
                </div>

                {/* Left Side (Desktop: w-[300px] text-right pr-10, Mobile: pl-10) */}
                <div className="pl-10 md:pl-0 md:w-[300px] md:text-right md:pr-10 space-y-1.5 sm:space-y-2 pt-0.5 shrink-0">
                  <span className="inline-block text-[11px] sm:text-xs font-extrabold font-mono tracking-widest text-[#10B981] uppercase bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
                    {exp.period}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 justify-start md:justify-end text-slate-400 font-semibold text-xs sm:text-sm">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Right Side (Desktop: flex-1 pl-10, Mobile: pl-10 mt-4) */}
                <div className="pl-10 md:pl-10 flex-1 w-full mt-4 md:mt-0">
                  <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-[#10B981]/40 space-y-4 hover:bg-slate-900/90 transition-all duration-300 group shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        Key Deliverables
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-950 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] shrink-0">
                        {exp.badge}
                      </span>
                    </div>

                    <ul className="space-y-2.5 sm:space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] shrink-0 mt-0.5 group-hover:text-emerald-300 transition-colors" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
