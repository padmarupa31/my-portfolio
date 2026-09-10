import React from 'react';
import { PERSONAL_INFO } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    onNotify('Downloading Padmaroopa_D_Resume.pdf...');
    const resumeText = `PADMAROOPA D.
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

CAREER OBJECTIVE:
${PERSONAL_INFO.careerObjective}

EDUCATION:
- B.Tech in Information Science and Engineering (Final Year) - CGPA: 7.25 / 10.0
- Higher Secondary (12th Grade) - 76.0% (PCMC)
- SSLC (10th Grade) - Distinction

CORE PROJECTS:
1. Plagiarism Key Detection (Python, Flask, Scikit-learn, TF-IDF, Cosine Similarity)
2. Bloomora - Flower Shop Mobile E-Commerce App (Figma, UI/UX, Design Systems)
3. Blog Management System (HTML, CSS, JS, Node.js, Express.js, MySQL)

INTERNSHIPS:
- Python Programming Intern @ Aquila Innovations
- Full Stack Web Intern @ Alfrin Technologies

CERTIFICATIONS:
- NPTEL Swayam: Developing Soft Skills & Personality (Elite)
- Udemy: Python Project, CS MetaBootcamp, Hands-On Machine Learning
- Udemy: Designing Logo, Vector Arts, Icons, Packaging & QR with AI
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Padmaroopa_D_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#1d0c30] border border-pink-500/40 rounded-3xl shadow-[0_10px_40px_rgba(217,70,239,0.35)] text-white overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-pink-900/50 bg-[#150726] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-pink-600 flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[20px] text-white">description</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Curriculum Vitae Preview</h3>
              <p className="text-xs text-pink-300">Padmaroopa D. · Final-Year B.Tech ISE</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Header Summary */}
          <div className="p-4 rounded-2xl bg-[#26103e] border border-pink-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="font-bold text-base text-white">{PERSONAL_INFO.name}</h4>
              <p className="text-xs text-pink-300 font-mono mt-0.5">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-purple-200 mt-1">{PERSONAL_INFO.email}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:flex-col sm:items-end font-mono text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-300 font-bold">
                CGPA: 7.25 / 10.0
              </span>
              <span className="text-purple-300 text-[11px]">B.Tech ISE (2021-2025/2026)</span>
            </div>
          </div>

          {/* Experience / Internships */}
          <div className="space-y-2">
            <h5 className="font-mono text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">work</span>
              Industry Internships
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#26103e] border border-pink-500/20 flex justify-between items-start">
                <div>
                  <span className="font-bold text-white block">Python Programming Intern</span>
                  <span className="text-purple-300">Aquila Innovations · Bangalore</span>
                </div>
                <span className="font-mono text-pink-400 font-semibold shrink-0">2 Months</span>
              </div>
              <div className="p-3 rounded-xl bg-[#26103e] border border-pink-500/20 flex justify-between items-start">
                <div>
                  <span className="font-bold text-white block">Full Stack Web Intern</span>
                  <span className="text-purple-300">Alfrin Technologies</span>
                </div>
                <span className="font-mono text-pink-400 font-semibold shrink-0">3 Months</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h5 className="font-mono text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              Highlighted Projects
            </h5>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#26103e] border border-pink-500/20">
                <div className="flex justify-between font-bold text-white">
                  <span>Plagiarism Key Detection</span>
                  <span className="text-pink-300 font-mono">Python / Scikit-learn</span>
                </div>
                <p className="text-purple-200 mt-1 leading-relaxed">
                  Vectorized text comparison utilizing TF-IDF and Cosine Similarity metrics with multi-tier
                  classification.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#26103e] border border-pink-500/20">
                <div className="flex justify-between font-bold text-white">
                  <span>Bloomora Flower E-Commerce</span>
                  <span className="text-purple-300 font-mono">Figma / UI Systems</span>
                </div>
                <p className="text-purple-200 mt-1 leading-relaxed">
                  End-to-end mobile design system with cart flows, 8pt spacing grid, and human-centered design.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#26103e] border border-pink-500/20">
                <div className="flex justify-between font-bold text-white">
                  <span>Blog Management System</span>
                  <span className="text-pink-300 font-mono">Node.js / Express / MySQL</span>
                </div>
                <p className="text-purple-200 mt-1 leading-relaxed">
                  Full CRUD platform with session security, role-based author dashboard, and database management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-pink-900/50 bg-[#150726] flex items-center justify-between gap-3">
          <span className="text-xs text-purple-300 hidden sm:inline">
            Verified Academic Profile · Padmaroopa D.
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-xs shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
