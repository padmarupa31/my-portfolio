import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import defaultProfilePhoto from '../assets/images/profile_portrait_1789041245466.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNotify }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_avatar');
      if (saved) return saved;
    }
    return defaultProfilePhoto;
  });

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        onNotify('Image file size exceeds 10MB limit.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setAvatarUrl(resultStr);
          try {
            localStorage.setItem('portfolio_avatar', resultStr);
          } catch (err) {
            console.warn('Unable to store avatar in localStorage', err);
          }
          onNotify('Profile photo updated successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setAvatarUrl(resultStr);
          try {
            localStorage.setItem('portfolio_avatar', resultStr);
          } catch (err) {
            console.warn('Unable to store avatar in localStorage', err);
          }
          onNotify('Profile photo updated successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-[#160826] via-[#260e3b] to-[#3b124d] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-pink-950/80 overflow-hidden"
    >
      {/* Ambient background glows matching Stitch aesthetic */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-fuchsia-600/25 via-pink-600/20 to-purple-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Two-Column Layout: Left = Introduction, Right = Large Profile Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: Personal Introduction, Title, Description, CTAs, and Stats */}
          <div className="lg:col-span-7 order-1 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 text-xs font-mono font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
              <span>{PERSONAL_INFO.badgeText}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-pink-300/80 font-bold block">
                Portfolio &amp; Engineering Profile
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Padmaroopa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-300">
                  D.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-pink-300 tracking-normal">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-purple-100 max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_4px_15px_rgba(217,70,239,0.4)] transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#24113a]/90 hover:bg-[#341852] border border-pink-500/30 text-pink-100 font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#190b28] hover:bg-[#2b1245] border border-pink-500/30 text-purple-200 hover:text-pink-300 hover:border-pink-400 font-mono text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download CV</span>
              </button>
            </div>

            {/* Metric / Stat Highlight Cards */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-pink-900/40">
              <div className="p-3.5 rounded-2xl bg-[#24113a]/80 border border-pink-500/20 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-pink-300 font-mono">
                  {PERSONAL_INFO.cgpa}
                </span>
                <span className="text-xs text-purple-200 font-medium">B.Tech ISE CGPA</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#24113a]/80 border border-pink-500/20 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-fuchsia-300 font-mono">
                  {PERSONAL_INFO.internshipsCount}
                </span>
                <span className="text-xs text-purple-200 font-medium">Industry Internships</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#24113a]/80 border border-pink-500/20 shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-pink-300 font-mono">
                  {PERSONAL_INFO.credentialsCount}
                </span>
                <span className="text-xs text-purple-200 font-medium">Credentials &amp; Certs</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Professional Profile Photo with Decorative Frame */}
          <div className="lg:col-span-5 order-2 flex justify-center lg:justify-end lg:items-start pt-4 lg:pt-0">
            <div className="relative w-72 sm:w-84 md:w-96 lg:w-[370px] xl:w-[410px]">
              {/* Subtle glowing ambient backdrop */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-purple-600/35 via-fuchsia-600/30 to-pink-500/30 rounded-[2.5rem] sm:rounded-[3rem] blur-2xl opacity-80 pointer-events-none" />

              {/* Decorative Frame with Stitch Gradient Border */}
              <div className="relative p-2 sm:p-2.5 rounded-[2.25rem] sm:rounded-[2.75rem] bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 shadow-[0_15px_45px_rgba(217,70,239,0.35)]">
                {/* Inner Photo Container */}
                <div
                  id="hero-profile-container"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="relative w-full aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#18092a] border border-pink-400/30 shadow-inner group cursor-pointer"
                  onClick={() => document.getElementById('avatar-upload-hero')?.click()}
                  title="Click or drag & drop to update profile photo"
                >
                  {/* The Profile Photo */}
                  <img
                    id="hero-profile-photo"
                    src={avatarUrl}
                    alt="Padmaroopa D. - Professional Profile Photo"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <input
                    id="avatar-upload-hero"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Top-Right Decorative Status Badge: Available for Opportunities */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 px-3.5 py-1.5 rounded-full bg-[#180829]/95 backdrop-blur-md border border-pink-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2 text-xs font-semibold text-pink-200 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="tracking-wide">Open to Roles</span>
              </div>

              {/* Bottom-Left Decorative Tech Chip: Information Science & Engineering */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 px-4 py-2 rounded-2xl bg-[#1c0a32]/95 backdrop-blur-md border border-purple-500/40 shadow-[0_6px_25px_rgba(0,0,0,0.5)] flex items-center gap-2.5 text-xs text-purple-100 z-20">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-[11px] leading-tight">ISE Engineer</span>
                  <span className="text-[10px] text-pink-300 font-mono leading-tight">B.Tech 2025/2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
