import React from 'react';
import NavbarHUD from './components/ui/NavbarHUD';
import HeroSection from './components/ui/HeroSection';
import AboutSection from './components/ui/AboutSection';
import ExperienceSection from './components/ui/ExperienceSection';
import MyWorkSection from './components/ui/MyWorkSection';
import ProjectsSection from './components/ui/ProjectsSection';
import SkillsSection from './components/ui/SkillsSection';
import ContactSection from './components/ui/ContactSection';
import FooterUI from './components/ui/FooterUI';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D1117] text-slate-100 selection:bg-[#10B981] selection:text-black overflow-x-hidden">
      {/* 0-WebGL Ultra-Performant Pure CSS Background System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-tech-grid">
        {/* Animated Radial Gradient Blob 1 - Top Left Emerald */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[130px] animate-blob-1" />

        {/* Animated Radial Gradient Blob 2 - Top Right Teal */}
        <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-teal-400/15 blur-[140px] animate-blob-2" />

        {/* Animated Radial Gradient Blob 3 - Mid/Bottom Emerald */}
        <div className="absolute bottom-1/4 left-1/3 w-[650px] h-[650px] rounded-full bg-emerald-600/15 blur-[150px] animate-blob-3" />
      </div>

      {/* Floating Header HUD */}
      <NavbarHUD />

      {/* Main Content Overlays */}
      <main className="relative z-10 space-y-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <MyWorkSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterUI />
    </div>
  );
}
