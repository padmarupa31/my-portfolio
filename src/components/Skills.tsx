import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';

export const Skills: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="w-full bg-[#1b0d2c] text-white py-20 border-t border-b border-pink-950/80"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                02 · Technical Skills
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Expertise &amp; Tools
            </h2>
          </div>
          <p className="text-sm sm:text-base text-purple-200 max-w-md leading-relaxed">
            A structured breakdown of core competencies, frameworks, data stores, and design utilities
            leveraged across production projects.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#2a1542] border border-pink-500/20 shadow-md hover:border-pink-400/60 hover:shadow-[0_4px_25px_rgba(217,70,239,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-300 group-hover:scale-105 transition-transform shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono text-pink-400/80">
                      {cat.skills.length} Core Capabilities
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => {
                    const isKey =
                      skill === 'Python' ||
                      skill === 'HTML5' ||
                      skill === 'Machine Learning' ||
                      skill === 'MySQL' ||
                      skill === 'Figma' ||
                      skill === 'Git & GitHub';
                    const isSelected = selectedTag === skill;

                    return (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedTag(isSelected ? null : skill)}
                        className={`px-3 py-1 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-xs font-bold scale-105'
                            : isKey
                            ? 'bg-pink-950/60 border border-pink-500/40 text-pink-300 font-bold hover:bg-pink-900/60'
                            : 'bg-[#1a0c2a] border border-pink-500/20 text-purple-100 hover:bg-[#25103d] hover:text-white'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-4 border-t border-pink-500/20 mt-6 flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Production Ready
                </span>
                <span className="text-pink-400 font-semibold">{cat.footerText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
