import React from 'react';
import { PERSONAL_INFO } from '../data';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f7f1f9] text-[#2e1047] py-20 border-b border-pink-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-700 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                01 · Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2e1047] tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-sm sm:text-base text-purple-900/80 max-w-md leading-relaxed">
            Bridging analytical computation with modern full-stack development and intuitive design
            systems.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography & Career Objective */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white shadow-md border border-purple-200/60 space-y-5">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2e1047] tracking-tight">
                Student &amp; Developer · Padmaroopa D.
              </h3>
              <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed">
                {PERSONAL_INFO.aboutLong1}
              </p>
              <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed">
                {PERSONAL_INFO.aboutLong2}
              </p>
            </div>

            {/* Career Objective Box */}
            <div className="p-4 rounded-2xl bg-purple-50/80 border border-pink-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-pink-700 font-bold font-mono text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">flag</span>
                <span>Career Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-purple-900 border-t border-purple-100">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-pink-600 text-[16px]">school</span>
                B.Tech ISE (Final Year)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 font-bold">
                CGPA: 7.25 / 10.0
              </span>
            </div>
          </div>

          {/* Right Column: Three Core Competency Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {/* Pillar 1: Web Development */}
            <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-lg hover:border-pink-400 border border-purple-200/60 transition-all duration-200 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-700 group-hover:scale-105 transition-transform shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">code</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 font-mono text-xs text-purple-900 font-semibold">
                  Web Engineering
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#2e1047] group-hover:text-pink-700 transition-colors">
                  Web Development
                </h4>
                <p className="text-xs sm:text-sm text-purple-950/80 leading-relaxed">
                  Crafting structured, responsive client-server architectures using modern HTML5,
                  CSS3, JavaScript, Node.js, Express, and relational MySQL schemas.
                </p>
              </div>
            </div>

            {/* Pillar 2: Python & Machine Learning */}
            <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-lg hover:border-pink-400 border border-purple-200/60 transition-all duration-200 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 group-hover:scale-105 transition-transform shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 font-mono text-xs text-purple-900 font-semibold">
                  Applied Intelligence
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#2e1047] group-hover:text-purple-700 transition-colors">
                  Python &amp; Machine Learning
                </h4>
                <p className="text-xs sm:text-sm text-purple-950/80 leading-relaxed">
                  Building vectorized NLP document comparison, data extraction pipelines, and
                  classification models utilizing Scikit-learn, Pandas, TF-IDF, and Flask.
                </p>
              </div>
            </div>

            {/* Pillar 3: UI/UX Design */}
            <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-lg hover:border-pink-400 border border-purple-200/60 transition-all duration-200 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-700 group-hover:scale-105 transition-transform shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">design_services</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 font-mono text-xs text-purple-900 font-semibold">
                  Product &amp; Systems
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#2e1047] group-hover:text-fuchsia-700 transition-colors">
                  UI/UX Design
                </h4>
                <p className="text-xs sm:text-sm text-purple-950/80 leading-relaxed">
                  Translating complex workflows into intuitive user flows, accessible wireframes, and
                  comprehensive design systems in Figma adhering to modern spatial token rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
