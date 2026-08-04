import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Layers, ShieldCheck } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS = [
  {
    title: 'RideFlow',
    subtitle: 'Real-Time Ride-Sharing & Dispatching Platform',
    stack: ['MERN Stack', 'Socket.io', 'Google Maps API', 'JWT'],
    description:
      'Full-stack ride-sharing platform with real-time driver tracking and geospatial dispatching. Features dynamic fare calculation, live chat, and secure JWT-based authentication.',
    image: '/assets/RideFlow.png',
    demo: 'https://ride-flow-gilt.vercel.app/',
    code: 'https://github.com/royy-05/RideFlow',
    badge: 'MERN & Geospatial',
    color: 'border-[#00f0ff]/40',
  },
  {
    title: 'MindCare',
    subtitle: 'AI Mental Health Platform (SIH TechSprint Winner)',
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Gemini API'],
    description:
      'Secure mental health platform with AI-powered chat support and PHQ-9/GAD-7 clinical assessments. Includes anonymous community forums, therapist appointment booking, API rate limiting, and input sanitization.',
    image: '/assets/MindCare.png',
    demo: 'https://mindcare-oqoo.onrender.com/',
    code: 'https://github.com/royy-05/MindCare',
    badge: 'AI & Healthcare',
    color: 'border-purple-500/40',
  },
  {
    title: 'Thinktube AI',
    subtitle: 'AI YouTube Video Analyzer & Summarizer',
    stack: ['Serverless Functions', 'Tailwind CSS', 'Gemini AI API', 'Vercel'],
    description:
      'AI-powered YouTube video analyzer that generates concise video summaries, built on serverless functions with rate-limiting and a clean, responsive Tailwind CSS UI.',
    image: '/assets/thinktube.png',
    demo: 'https://thinktube-ai.vercel.app/',
    code: 'https://github.com/royy-05/Thinktube-AI',
    badge: 'AI & Serverless',
    color: 'border-pink-500/40',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative flex items-center justify-center py-12 sm:py-16 px-6">
      <div className="w-[90%] mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold glass-panel border border-[#10B981]/40 text-[#10B981]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Zone 05 — Case Studies & Vignettes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#10B981]/40 flex flex-col justify-between hover:scale-[1.02] transition-all group"
            >
              <div className="space-y-4">
                {/* Image / Banner Frame */}
                <div className="w-full h-44 rounded-2xl overflow-hidden relative bg-slate-900 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-slate-950 px-2.5 py-1 rounded-full bg-[#10B981] shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400">{project.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 mt-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 hover:shadow-md hover:shadow-[#10B981]/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl glass-panel text-slate-300 hover:text-[#10B981] transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
