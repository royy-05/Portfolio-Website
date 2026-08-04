import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative flex items-center justify-center py-12 sm:py-16 px-6">
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Zone 06 — Communication Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel-glow p-8 rounded-3xl space-y-6"
          >
            <div className="space-y-2 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-xs text-slate-300">
                Open for full-stack developer roles, freelance client solutions, and open-source collaborations.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-200">
              <a
                href="mailto:royyronit05@gmail.com"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-[#10B981]/40 transition-colors"
              >
                <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="font-semibold text-white">royyronit05@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919874556869"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-[#10B981]/40 transition-colors"
              >
                <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                  <p className="font-semibold text-white">+91 9874556869</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-white">Kolkata, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://github.com/royy-05/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-[#10B981] flex items-center justify-center gap-2 text-xs font-semibold hover:border-[#10B981]/40 transition-all"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ronit-roy05/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-[#10B981] flex items-center justify-center gap-2 text-xs font-semibold hover:border-[#10B981]/40 transition-all"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Ronit, I'd like to discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#10B981]/30 transition-all disabled:opacity-75 cursor-pointer"
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    <span>Message Transmitted!</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
