import React from 'react';
import { ACHIEVEMENTS } from '../data';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="w-full bg-[#fbf3f8] text-[#2e1047] py-20 border-b border-pink-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-pink-700 uppercase tracking-wider font-bold block">
              06 · Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2e1047] tracking-tight">
              Achievements &amp; Milestones
            </h2>
          </div>
          <p className="text-sm sm:text-base text-purple-900/80 max-w-md leading-relaxed">
            Proven dedication to continuous learning, academic excellence, and software product delivery.
          </p>
        </div>

        {/* 4 Bento Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const isPrimary = item.colorVariant === 'primary';
            const isSecondary = item.colorVariant === 'secondary';
            const isTertiary = item.colorVariant === 'tertiary';

            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-purple-200/60 shadow-md hover:shadow-lg hover:border-pink-400 transition-all duration-200 flex items-start gap-5 group"
              >
                <div
                  className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform ${
                    isPrimary
                      ? 'bg-pink-100 text-pink-700'
                      : isSecondary
                      ? 'bg-purple-100 text-purple-700'
                      : isTertiary
                      ? 'bg-fuchsia-100 text-fuchsia-700'
                      : 'bg-purple-50 text-purple-900'
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider block ${
                      isPrimary
                        ? 'text-pink-700'
                        : isSecondary
                        ? 'text-purple-700'
                        : isTertiary
                        ? 'text-fuchsia-700'
                        : 'text-purple-900'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2e1047] leading-snug group-hover:text-pink-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-950/80 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
