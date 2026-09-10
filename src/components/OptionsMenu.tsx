import React from 'react';
import { PERSONAL_INFO } from '../data';

interface OptionsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCertificate?: () => void;
  onNotify: (msg: string) => void;
  onJumpToSection: (sectionId: string) => void;
  projectFilter: string;
  onSelectProjectFilter: (filter: string) => void;
  currentTheme: string;
  onChangeTheme: (theme: string) => void;
}

export const OptionsMenu: React.FC<OptionsMenuProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCertificate,
  onNotify,
  onJumpToSection,
  projectFilter,
  onSelectProjectFilter,
  currentTheme,
  onChangeTheme,
}) => {
  if (!isOpen) return null;

  const sections = [
    { id: 'home', label: 'Home / Hero', icon: 'home' },
    { id: 'about', label: 'About Me', icon: 'person' },
    { id: 'skills', label: 'Technical Skills', icon: 'terminal' },
    { id: 'projects', label: 'Featured Projects', icon: 'folder_special' },
    { id: 'education', label: 'Academic Journey', icon: 'school' },
    { id: 'certifications', label: 'Certifications', icon: 'verified' },
    { id: 'achievements', label: 'Achievements', icon: 'military_tech' },
    { id: 'contact', label: 'Contact', icon: 'forum' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onNotify(`Copied to clipboard: ${PERSONAL_INFO.email}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#1f0d35] border border-pink-500/40 rounded-3xl shadow-[0_10px_40px_rgba(217,70,239,0.3)] text-white overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-pink-900/50 bg-[#160826] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-pink-600 flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[20px] text-white">tune</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Portfolio Options</h3>
              <p className="text-xs text-pink-300">Quick Navigation, Preferences &amp; Tools</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close options"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Section 1: Quick Jump Navigation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">explore</span>
                Quick Jump Navigation
              </h4>
              <span className="text-[11px] text-purple-300">8 Sections Available</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    onJumpToSection(sec.id);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#2a1343] hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 border border-pink-500/20 text-purple-100 hover:text-white flex flex-col items-center text-center gap-1.5 transition-all group cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-[20px] text-pink-400 group-hover:text-white transition-colors">
                    {sec.icon}
                  </span>
                  <span className="text-xs font-semibold">{sec.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Project Filter Preferences */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">filter_alt</span>
              Project Category Focus
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'all', label: 'All Projects (3)', icon: 'apps' },
                { id: 'ml', label: 'Machine Learning', icon: 'psychology' },
                { id: 'design', label: 'UI/UX Design', icon: 'palette' },
                { id: 'web', label: 'Full-Stack Web', icon: 'database' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    onSelectProjectFilter(filter.id);
                    onNotify(`Filtered project view to: ${filter.label}`);
                    onClose();
                    onJumpToSection('projects');
                  }}
                  className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all cursor-pointer ${
                    projectFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-700 to-pink-600 border-pink-400 text-white shadow-xs'
                      : 'bg-[#2a1343] border-pink-500/20 text-purple-200 hover:bg-[#381a59]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Visual Theme Tone */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">palette</span>
              Visual Palette Tone
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'stitch', label: 'Stitch Velvet Plum', desc: 'Original rich purple palette' },
                { id: 'cyber', label: 'Midnight Violet', desc: 'High-contrast deep tone' },
                { id: 'neon', label: 'Obsidian Neon', desc: 'Vibrant neon glow highlights' },
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    onChangeTheme(theme.id);
                    onNotify(`Palette updated to: ${theme.label}`);
                  }}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all cursor-pointer ${
                    currentTheme === theme.id
                      ? 'bg-gradient-to-br from-purple-900/90 to-pink-900/90 border-pink-400 text-white shadow-sm'
                      : 'bg-[#2a1343] border-pink-500/20 text-purple-200 hover:bg-[#361956]'
                  }`}
                >
                  <span className="text-xs font-bold text-white flex items-center justify-between">
                    {theme.label}
                    {currentTheme === theme.id && (
                      <span className="material-symbols-outlined text-[16px] text-pink-400">check</span>
                    )}
                  </span>
                  <span className="text-[11px] text-pink-300/80">{theme.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Quick Action Launchers */}
          <div className="space-y-3 pt-2 border-t border-pink-900/40">
            <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              Quick Actions
            </h4>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">description</span>
                <span>Open Resume Modal</span>
              </button>

              {onOpenCertificate && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCertificate();
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                  <span>View Digital Certificates</span>
                </button>
              )}

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-[#2a1343] hover:bg-[#3a1a5d] border border-pink-500/30 text-purple-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>Copy Email Address</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2a1343] hover:bg-[#3a1a5d] border border-pink-500/30 text-purple-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2a1343] hover:bg-[#3a1a5d] border border-pink-500/30 text-purple-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">work</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#160826] border-t border-pink-900/40 flex items-center justify-between text-xs text-purple-300">
          <span>Stitch Theme Active · Padmaroopa D. Portfolio</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
