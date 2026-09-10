import React from 'react';
import { CERTIFICATIONS } from '../data';
import { CertificationItem } from '../types';

interface CertificationsProps {
  onNotify: (msg: string) => void;
  onViewCertificate: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onNotify, onViewCertificate }) => {
  const featuredCert = CERTIFICATIONS.find((c) => c.id === 'cert-nptel') || CERTIFICATIONS[0];

  return (
    <section
      id="certifications"
      className="w-full bg-[#f6eff8] text-[#2e1047] py-20 border-b border-pink-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-700 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                05 · Verified Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2e1047] tracking-tight">
              Certifications &amp; Internships
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm sm:text-base text-purple-900/80 max-w-md leading-relaxed">
              Industry experience and verified technical certifications spanning machine learning, web systems,
              and design.
            </p>
            <button
              onClick={() => onViewCertificate(featuredCert)}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#2a0e44] hover:bg-pink-900 text-pink-200 hover:text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
              <span>Open Certificate Viewer</span>
            </button>
          </div>
        </div>

        {/* Featured Certificate Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#240c3c] via-[#1c0830] to-[#2c0e46] text-white border border-pink-500/40 shadow-xl relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30 text-xs font-mono font-bold uppercase tracking-wider">
                    Featured Credential Spotlight
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-200 text-xs font-mono">
                    {featuredCert.issuer}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold">
                    ★ {featuredCert.gradeOrDistinction || 'Elite Grade'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {featuredCert.courseOrAchievement || featuredCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl leading-relaxed">
                  Issued to <span className="text-pink-300 font-semibold">{featuredCert.recipientName}</span> by{' '}
                  <span className="text-white font-medium">{featuredCert.signatoryRole}</span>. Verification ID:{' '}
                  <code className="font-mono text-pink-300 bg-black/40 px-1.5 py-0.5 rounded text-xs">
                    {featuredCert.certificateId}
                  </code>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 lg:self-center">
              <button
                onClick={() => onViewCertificate(featuredCert)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_25px_rgba(217,70,239,0.7)] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">visibility</span>
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((item, idx) => {
            const isPrimary = item.variant === 'primary';
            const isSecondary = item.variant === 'secondary';

            return (
              <div
                key={item.id || idx}
                id={`cert-card-${item.id}`}
                className="p-6 rounded-3xl bg-white border border-purple-200/60 shadow-sm hover:shadow-md hover:border-pink-400 transition-all duration-200 flex flex-col justify-between group h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs ${
                          isPrimary
                            ? 'bg-pink-100 text-pink-700'
                            : isSecondary
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-fuchsia-100 text-fuchsia-700'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wide ${
                          isPrimary
                            ? 'text-pink-700'
                            : isSecondary
                            ? 'text-purple-700'
                            : 'text-fuchsia-700'
                        }`}
                      >
                        {item.issuer}
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold shrink-0 ${
                        item.badge === 'Completed'
                          ? 'bg-pink-100 text-pink-700'
                          : item.badge === 'Elite Grade · 86%' || item.badge === 'Elite Grade'
                          ? 'bg-purple-100 text-purple-900'
                          : 'bg-purple-50 text-purple-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#2e1047] leading-snug group-hover:text-pink-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-purple-950/80 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-100 mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between font-mono text-xs min-h-[24px]">
                    <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 text-purple-900 font-medium">
                      {item.durationOrYear}
                    </span>
                    {item.verifiedLabel && item.verifiedLabel !== 'Official Image' && (
                      <span
                        className={`font-bold inline-flex items-center gap-1 ${
                          isPrimary
                            ? 'text-pink-700'
                            : isSecondary
                            ? 'text-purple-700'
                            : 'text-fuchsia-700'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {item.fileType === 'pdf' ? 'picture_as_pdf' : 'image'}
                        </span>
                        {item.verifiedLabel}
                      </span>
                    )}
                  </div>

                  {/* Explicit "View Certificate" Button */}
                  <button
                    onClick={() => onViewCertificate(item)}
                    id={`view-cert-btn-${item.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-[#2a0e44] text-[#2a0e44] hover:text-white border border-purple-200 hover:border-transparent font-bold text-xs transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

