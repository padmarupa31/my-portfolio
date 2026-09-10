import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onNotify(`Copied to clipboard: ${PERSONAL_INFO.email}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      onNotify('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onNotify(`Thank you, ${name}! Your message has been sent successfully.`);
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 600);
  };

  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-[#190b29] via-[#2c1042] to-[#3d124f] text-white py-20 border-t border-pink-950/80 relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 shadow-xs">
            <span className="material-symbols-outlined text-[16px]">forum</span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              07 · Contact &amp; Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-purple-200 leading-relaxed">
            Whether you have an opportunity, a software project in mind, or just want to talk tech and UI/UX
            design, I would love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fast Connect Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Opportunity Status Card */}
            <div className="p-5 rounded-3xl bg-[#25113c]/90 border border-pink-500/30 shadow-md flex items-center gap-4">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-xs text-pink-300 font-bold uppercase tracking-wider block">
                  Open for Opportunities
                </span>
                <p className="text-xs sm:text-sm text-white font-semibold">
                  Full-Time Software Roles &amp; Engineering Internships
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-[#25113c]/90 shadow-md border border-pink-500/30 space-y-3 hover:border-pink-400/60 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-pink-950/80 border border-pink-500/40 flex items-center justify-center text-pink-300 shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-purple-300 uppercase font-bold tracking-wider font-mono">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-pink-300 transition-colors break-all block truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white font-semibold text-xs shadow-xs transition-all hover:opacity-95"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>Send Mail</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#190b28] text-purple-200 hover:text-pink-300 hover:bg-[#28113f] text-xs font-semibold transition-colors cursor-pointer border border-pink-500/30"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-[#25113c]/90 border border-pink-500/30 shadow-md hover:border-pink-400/60 flex items-center justify-between group transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#190b28] border border-pink-500/20 flex items-center justify-center text-purple-200 group-hover:text-pink-300 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">code</span>
                  </div>
                  <div>
                    <p className="text-xs text-purple-300 uppercase font-bold tracking-wider font-mono">
                      GitHub
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      github.com/padmarupa31
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#190b28] border border-pink-500/20 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-600 group-hover:text-white text-purple-200 text-xs font-semibold transition-colors">
                  <span className="hidden sm:inline">View Profile</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-[#25113c]/90 border border-pink-500/30 shadow-md hover:border-pink-400/60 flex items-center justify-between group transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#190b28] border border-pink-500/20 flex items-center justify-center text-purple-200 group-hover:text-pink-300 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">work</span>
                  </div>
                  <div>
                    <p className="text-xs text-purple-300 uppercase font-bold tracking-wider font-mono">
                      LinkedIn
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      padmaroopa-d-097011433
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#190b28] border border-pink-500/20 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-600 group-hover:text-white text-purple-200 text-xs font-semibold transition-colors">
                  <span className="hidden sm:inline">Connect</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Stitch Dark Inquiry Form */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-[#25113c]/90 border border-pink-500/30 shadow-2xl text-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-semibold text-purple-200">
                    Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full h-11 px-4 rounded-xl bg-[#130722] border border-pink-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs sm:text-sm font-semibold text-purple-200">
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-11 px-4 rounded-xl bg-[#130722] border border-pink-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs sm:text-sm font-semibold text-purple-200">
                  Message <span className="text-pink-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message or project collaboration idea here..."
                  className="w-full p-4 rounded-xl bg-[#130722] border border-pink-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-purple-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-400 text-[16px]">schedule</span>
                  Fast response within 24 hours
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_4px_15px_rgba(217,70,239,0.35)] cursor-pointer transition-all duration-200 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Metadata Bar & Back to Top */}
        <div className="pt-8 border-t border-pink-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-purple-300 font-mono text-xs">
            <span className="material-symbols-outlined text-[16px] text-pink-400">bolt</span>
            <span>Engineered with HTML5, Tailwind CSS &amp; Modern JS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#190b28] border border-pink-500/30 text-purple-200 font-mono text-xs hover:text-pink-300 hover:border-pink-400 transition-colors cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
};
