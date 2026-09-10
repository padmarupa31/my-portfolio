import React, { useState } from 'react';

interface NavbarProps {
  activeTab: 'home' | 'about' | 'options';
  onSelectTab: (tab: 'home' | 'about' | 'options') => void;
  onOpenResume: () => void;
  onOpenOptions: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenResume,
  onOpenOptions,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'about' | 'options') => {
    setMobileMenuOpen(false);
    onSelectTab(tab);

    if (tab === 'home') {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'about') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'options') {
      onOpenOptions();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#190b28]/95 backdrop-blur-xl border-b border-pink-900/40 shadow-lg text-white transition-all">
      <div className="h-16 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Monogram Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-sm shadow-[0_2px_10px_rgba(217,70,239,0.4)] group-hover:scale-105 transition-transform">
            PD
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight leading-none group-hover:text-pink-300 transition-colors">
              Padmaroopa D.
            </span>
            <span className="text-xs text-pink-300 font-medium leading-tight mt-0.5">
              Info Science · Dev · UI/UX
            </span>
          </div>
        </a>

        {/* Primary Required Navigation: Home | About | Options */}
        <nav className="flex items-center gap-1.5 sm:gap-2 bg-[#260e3b]/80 border border-pink-500/20 px-2 py-1 rounded-xl shadow-inner">
          {/* Home Nav Item */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'home'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white shadow-[0_2px_12px_rgba(217,70,239,0.35)]'
                : 'text-purple-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Home</span>
          </button>

          <span className="text-pink-500/40 select-none text-xs">|</span>

          {/* About Nav Item */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'about'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white shadow-[0_2px_12px_rgba(217,70,239,0.35)]'
                : 'text-purple-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
            <span>About</span>
          </button>

          <span className="text-pink-500/40 select-none text-xs">|</span>

          {/* Options Nav Item */}
          <button
            onClick={() => handleNavClick('options')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'options'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white shadow-[0_2px_12px_rgba(217,70,239,0.35)]'
                : 'text-purple-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Options</span>
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white font-semibold text-sm shadow-[0_2px_10px_rgba(217,70,239,0.3)] hover:from-purple-800 hover:to-pink-700 transition-all cursor-pointer"
          >
            Get in Touch
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
          >
            Resume
          </button>

          <button
            onClick={() => handleNavClick('home')}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer"
            title="Padmaroopa D. Profile"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Quick Options Menu Trigger on Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full border-t border-pink-950/80 bg-[#160826]/98 backdrop-blur-2xl px-4 py-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between text-left transition-colors ${
              activeTab === 'home'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white'
                : 'text-purple-200 hover:bg-white/10'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">home</span>
              Home
            </span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between text-left transition-colors ${
              activeTab === 'about'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white'
                : 'text-purple-200 hover:bg-white/10'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person</span>
              About
            </span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavClick('options')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between text-left transition-colors ${
              activeTab === 'options'
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white'
                : 'text-purple-200 hover:bg-white/10'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              Options
            </span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <div className="pt-2 border-t border-pink-900/40 flex gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white font-semibold text-sm shadow-sm"
            >
              Get in Touch
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
