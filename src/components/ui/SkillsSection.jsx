import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiShopify,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

const TECH_STACKS = [
  {
    name: 'React.js',
    category: 'frontend',
    Icon: SiReact,
    colorClass: 'text-[#61DAFB]',
    tag: 'Frontend Library',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    Icon: SiNextdotjs,
    colorClass: 'text-white',
    tag: 'React Framework',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    Icon: SiJavascript,
    colorClass: 'text-[#F7DF1E]',
    tag: 'Core Language',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    Icon: SiTailwindcss,
    colorClass: 'text-[#06B6D4]',
    tag: 'Styling Framework',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    Icon: SiHtml5,
    colorClass: 'text-[#E34F26]',
    tag: 'Markup Standard',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    Icon: SiCss,
    colorClass: 'text-[#1572B6]',
    tag: 'Style Standard',
  },
  {
    name: 'Node.js',
    category: 'backend',
    Icon: SiNodedotjs,
    colorClass: 'text-[#339933]',
    tag: 'JS Runtime',
  },
  {
    name: 'Express.js',
    category: 'backend',
    Icon: SiExpress,
    colorClass: 'text-white',
    tag: 'Backend Framework',
  },
  {
    name: 'PHP',
    category: 'backend',
    Icon: SiPhp,
    colorClass: 'text-[#777BB4]',
    tag: 'Server Language',
  },
  {
    name: 'MongoDB',
    category: 'database',
    Icon: SiMongodb,
    colorClass: 'text-[#47A248]',
    tag: 'NoSQL Database',
  },
  {
    name: 'MySQL',
    category: 'database',
    Icon: SiMysql,
    colorClass: 'text-[#4479A1]',
    tag: 'Relational Database',
  },
  {
    name: 'WordPress',
    category: 'cms',
    Icon: SiWordpress,
    colorClass: 'text-[#21759B]',
    tag: 'CMS & E-Commerce',
  },
  {
    name: 'Shopify',
    category: 'cms',
    Icon: SiShopify,
    colorClass: 'text-[#95BF47]',
    tag: 'E-Commerce Platform',
  },
  {
    name: 'Git',
    category: 'tools',
    Icon: SiGit,
    colorClass: 'text-[#F05032]',
    tag: 'Version Control',
  },
  {
    name: 'GitHub',
    category: 'tools',
    Icon: SiGithub,
    colorClass: 'text-white',
    tag: 'Code Hosting',
  },
  {
    name: 'Vercel',
    category: 'tools',
    Icon: SiVercel,
    colorClass: 'text-white',
    tag: 'Deployment Cloud',
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTechs = TECH_STACKS.filter(
    (tech) => activeTab === 'all' || tech.category === activeTab
  );

  return (
    <section id="skills" className="relative flex items-center justify-center py-12 sm:py-16 px-6">
      <div className="w-[90%] mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-60px' }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-panel border border-[#10B981]/40 text-[#10B981]">
            <Layers className="w-3.5 h-3.5" />
            <span>Zone 05 — Technical Stack & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Skills & <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Official technology stack used across 20+ production web applications and enterprise platforms.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center p-1 sm:p-1.5 rounded-2xl glass-panel border border-white/10 gap-1 text-[11px] sm:text-xs font-semibold max-w-full">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'database', label: 'Database' },
              { id: 'cms', label: 'CMS & E-Commerce' },
              { id: 'tools', label: 'Tools & Cloud' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 font-extrabold shadow-lg shadow-[#10B981]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Official Bundled Simple Icons Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredTechs.map((tech, idx) => {
              const IconComp = tech.Icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -20 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#10B981]/50 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 group shadow-xl cursor-default"
                >
                  {/* Brand Icon Frame */}
                  <div className="w-16 h-16 p-3 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-[#10B981]/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <IconComp className={`w-8 h-8 ${tech.colorClass} transition-colors`} />
                  </div>

                  {/* Tech Name & Tag */}
                  <div>
                    <h3 className="text-base font-extrabold text-white group-hover:text-[#10B981] transition-colors">
                      {tech.name}
                    </h3>
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block mt-0.5">
                      {tech.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
