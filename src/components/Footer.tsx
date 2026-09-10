import React from 'react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#130620] text-purple-200 py-12 border-t border-pink-950/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">
        {/* Top Info & Social Pills Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_10px_rgba(217,70,239,0.3)]">
                PD
              </div>
              <span className="text-xl font-bold text-white">Padmaroopa D.</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-300 max-w-md leading-relaxed">
              Final-year B.Tech Information Science student · Web Developer, Python Enthusiast &amp; UI/UX
              Designer crafting performant and intuitive digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 items-center">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#24113a] border border-pink-500/20 text-purple-100 font-mono text-xs hover:text-pink-300 hover:border-pink-400 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>padmarupa31</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#24113a] border border-pink-500/20 text-purple-100 font-mono text-xs hover:text-pink-300 hover:border-pink-400 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">link</span>
              <span>padmaroopa-d-097011433</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#24113a] border border-pink-500/20 text-purple-100 font-mono text-xs hover:text-pink-300 hover:border-pink-400 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright and Opportunities Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-pink-950/80 text-xs text-purple-400">
          <p>© 2025 Padmaroopa D. All rights reserved. Designed with modern web standards.</p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-pink-400 font-bold uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
