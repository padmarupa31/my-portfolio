import React from 'react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full bg-[#180a27] text-white py-20 border-t border-b border-pink-950/80"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                04 · Academic Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education
            </h2>
          </div>
          <p className="text-sm sm:text-base text-purple-200 max-w-md leading-relaxed">
            Formal computer science engineering curriculum and foundational scientific qualifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:content-[''] before:absolute before:left-2 md:before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:via-purple-500 before:to-fuchsia-500">
          {/* Card 1: B.Tech */}
          <div className="relative group">
            <div className="absolute -left-[30px] md:-left-[38px] top-4 w-6 h-6 rounded-full bg-[#180a27] border border-pink-500 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-400 ring-4 ring-pink-500/30 animate-pulse" />
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-[#24113a]/90 border border-pink-500/20 shadow-md hover:border-pink-400/60 transition-all duration-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                    Current · Final Year
                  </span>
                  <span className="font-mono text-xs text-purple-300 font-medium">
                    2021 – 2025 / 2026
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-300 font-mono text-xs font-bold shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">grade</span>
                  <span>CGPA: 7.25 / 10.0</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                <p className="text-sm sm:text-base text-pink-300 font-semibold">
                  Information Science and Engineering (ISE)
                </p>
              </div>

              <div className="pt-2 border-t border-pink-900/40">
                <span className="font-mono text-xs text-purple-300 font-bold uppercase tracking-wider block mb-2">
                  Key Academic Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms',
                    'Database Management Systems',
                    'Machine Learning',
                    'Web Technologies',
                    'Software Engineering',
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-[#190b28] border border-pink-500/20 text-purple-200 font-mono text-xs font-medium hover:border-pink-400 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Higher Secondary */}
          <div className="relative group">
            <div className="absolute -left-[30px] md:-left-[38px] top-4 w-6 h-6 rounded-full bg-[#180a27] border border-purple-500 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 ring-4 ring-purple-500/30" />
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-[#24113a]/90 border border-pink-500/20 shadow-md hover:border-pink-400/60 transition-all duration-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#351854] text-purple-200 font-mono text-xs font-bold uppercase">
                    Pre-University / 12th
                  </span>
                  <span className="font-mono text-xs text-purple-300 font-medium">Completed 2023</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#351854] border border-pink-500/30 text-pink-300 font-mono text-xs font-bold shrink-0">
                  <span className="material-symbols-outlined text-[16px]">analytics</span>
                  <span>Score: 76.0%</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Higher Secondary (12th Grade)</h3>
                <p className="text-sm text-purple-200">
                  Science Stream: Physics, Chemistry, Mathematics &amp; Computer Science (PCMC)
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Secondary School */}
          <div className="relative group">
            <div className="absolute -left-[30px] md:-left-[38px] top-4 w-6 h-6 rounded-full bg-[#180a27] border border-fuchsia-500 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 ring-4 ring-fuchsia-500/30" />
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-[#24113a]/90 border border-pink-500/20 shadow-md hover:border-pink-400/60 transition-all duration-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#351854] text-purple-200 font-mono text-xs font-bold uppercase">
                    Secondary / 10th
                  </span>
                  <span className="font-mono text-xs text-purple-300 font-medium">Completed 2021</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#351854] border border-pink-500/30 text-pink-300 font-mono text-xs font-bold shrink-0">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Distinction Foundation</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Secondary School Leaving Certificate (10th)
                </h3>
                <p className="text-sm text-purple-200">
                  Secondary Education with strong quantitative grasp across Mathematics and Natural Sciences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
