import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award, CheckCircle2, Code2, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative flex items-center justify-center py-12 sm:py-16 px-6">
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
            <User className="w-3.5 h-3.5" />
            <span>Zone 02 — Personal & Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            About <span className="gradient-text-cyan">Ronit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: '-50px' }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#10B981]" />
                Full-Stack Developer & Solutions Engineer
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Previously worked as Full-Stack Developer at <strong className="text-white font-semibold">VTS Infotech</strong> (Dec 2025 – July 2026), delivering production-grade web solutions for over 20+ clients across sports (Bengal Super League), e-commerce, hospitality, and custom enterprise admin platforms.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Comfortable across the entire software stack: <span className="text-[#10B981] font-medium">React & Next.js</span> on the frontend, <span className="text-emerald-400 font-medium">PHP, Node.js & Express</span> on the backend, <span className="text-teal-300 font-medium">MongoDB & MySQL</span> for data, alongside <span className="text-emerald-500 font-medium">WordPress & Shopify</span> for client campaigns.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Full-Stack MERN & Next.js Architecture',
                'Custom PHP & Enterprise Billing Admin Systems',
                'GSSoC 2026 Active Open Source Contributor',
                'Smart India Hackathon (SIH TechSprint) Selected',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Education Card */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-[#10B981]/20 text-[#10B981]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Education</h4>
                  <p className="text-xs text-slate-400">Academic Foundation</p>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-bold text-[#10B981]">JIS University</h5>
                <p className="text-sm font-semibold text-slate-200">Bachelor of Computer Applications (BCA)</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] font-bold">CGPA / Score: 8.5</span>
                  <span>2024 – 2028</span>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-[#10B981]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Recognitions</h4>
                  <p className="text-xs text-slate-400">Certifications & Honors</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span><strong>Top Performer (97%)</strong> — Internshala Front-End Developer Program</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span><strong>NSDC Certified</strong> — Web Development Certification</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span><strong>Google Study Jams</strong> — Hands-on Google Cloud Workspaces</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
