import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function NavbarHUD() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'My Work', href: '#my-work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1117]/90 backdrop-blur-xl border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-extrabold tracking-tight group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#10B981] to-[#059669] flex items-center justify-center text-slate-950 font-black shadow-lg shadow-[#10B981]/20">
            R
          </div>
          <span className="text-white group-hover:text-[#10B981] transition-colors">
            Ronit<span className="text-[#10B981]">.Roy</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-[#10B981] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 hover:shadow-lg hover:shadow-[#10B981]/25 transition-all cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white glass-panel"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full h-[2px] bg-slate-800/40 absolute bottom-0 left-0">
        <div
          className="h-full bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-[#10B981]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

