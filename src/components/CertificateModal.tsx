import React, { useState, useEffect } from 'react';
import { CertificationItem } from '../types';
import { CERTIFICATIONS } from '../data';
import { PdfViewer } from './PdfViewer';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectCertificate: (cert: CertificationItem) => void;
  onNotify: (msg: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
  onSelectCertificate,
  onNotify,
}) => {
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  // Reset zoom and image state when certificate changes
  useEffect(() => {
    setImageZoom(1);
    setIsImageLoading(true);
  }, [certificate?.id]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const currentIndex = CERTIFICATIONS.findIndex((c) => c.id === certificate.id);
  const prevCert = currentIndex > 0 ? CERTIFICATIONS[currentIndex - 1] : null;
  const nextCert = currentIndex < CERTIFICATIONS.length - 1 ? CERTIFICATIONS[currentIndex + 1] : null;

  const handleCopyId = () => {
    const idToCopy = certificate.certificateId || certificate.id;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(idToCopy);
      onNotify(`Copied Certificate ID: ${idToCopy}`);
    }
  };

  const handleDownload = () => {
    const fileName =
      certificate.downloadName ||
      certificate.fileUrl.split('/').pop() ||
      `${certificate.recipientName || 'Padmaroopa'}_Certificate.${certificate.fileType === 'pdf' ? 'pdf' : 'jpg'}`;

    // Standard safe download without file://
    const link = document.createElement('a');
    link.href = certificate.fileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onNotify(`Downloading ${certificate.fileType.toUpperCase()}: ${fileName}`);
  };

  const handleOpenInNewTab = () => {
    window.open(certificate.fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl my-auto bg-[#17072a] border border-pink-500/40 rounded-3xl shadow-[0_20px_60px_rgba(217,70,239,0.35)] text-white overflow-hidden flex flex-col max-h-[96vh]">
        {/* Modal Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-pink-900/50 bg-[#120422] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-pink-600 flex items-center justify-center shadow-md shrink-0">
              <span className="material-symbols-outlined text-[20px] text-white">
                {certificate.fileType === 'pdf' ? 'picture_as_pdf' : 'verified'}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="cert-modal-title" className="font-bold text-sm sm:text-base text-white">
                  {certificate.title}
                </h3>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 font-mono font-bold uppercase">
                  {certificate.fileType.toUpperCase()}
                </span>
                <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 font-mono">
                  {currentIndex + 1} of {CERTIFICATIONS.length}
                </span>
              </div>
              <p className="text-xs text-pink-300/80">{certificate.issuer} · Accredited Credential</p>
            </div>
          </div>

          {/* Quick Certificate Switcher Thumbnails/Tabs */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
            {CERTIFICATIONS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => onSelectCertificate(c)}
                title={`${c.issuer}: ${c.title}`}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  c.id === certificate.id
                    ? 'bg-pink-600 text-white font-bold shadow-[0_0_12px_rgba(217,70,239,0.6)]'
                    : 'bg-[#250d3d] text-purple-300 hover:text-white hover:bg-pink-900/40'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>

          {/* Actions: Open in Full Browser Viewer & Close / Back */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenInNewTab}
              title="Open original file in new browser window"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#240a3c] hover:bg-pink-900/50 border border-pink-500/30 text-xs font-semibold text-pink-200 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              <span>Open in New Tab</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#260c3e] hover:bg-pink-900/70 border border-pink-500/40 text-xs sm:text-sm font-semibold text-pink-200 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Close / Back</span>
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative p-3 sm:p-5 md:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#0c0217]/80 min-h-[420px]">
          {certificate.fileType === 'pdf' ? (
            /* BROWSER-COMPATIBLE PDF VIEWER (Direct HTML5 Canvas via PDF.js - Immune to Chrome iframe blocks) */
            <PdfViewer
              url={certificate.fileUrl}
              fallbackImageUrl={certificate.previewImageUrl}
              title={certificate.title}
              onNotify={onNotify}
            />
          ) : (
            /* IMAGE LIGHTBOX VIEWER FOR JPG/PNG */
            <div className="w-full flex-1 flex flex-col items-center justify-center">
              {/* Lightbox Controls */}
              <div className="w-full max-w-5xl mb-3 flex items-center justify-between px-2 text-xs">
                <span className="text-pink-300/80 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-pink-400">image</span>
                  Original High-Resolution Image Certificate
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setImageZoom((z) => Math.max(0.6, +(z - 0.2).toFixed(1)))}
                    title="Zoom Out"
                    className="p-1 rounded-lg bg-[#250d3d] hover:bg-pink-900/50 text-pink-300 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                  </button>
                  <span className="font-mono text-pink-200 px-1">{Math.round(imageZoom * 100)}%</span>
                  <button
                    type="button"
                    onClick={() => setImageZoom((z) => Math.min(2.5, +(z + 0.2).toFixed(1)))}
                    title="Zoom In"
                    className="p-1 rounded-lg bg-[#250d3d] hover:bg-pink-900/50 text-pink-300 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageZoom(1)}
                    title="Reset Zoom"
                    className="px-2 py-0.5 rounded-lg bg-[#250d3d] hover:bg-pink-900/50 text-pink-300 text-[11px] cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Lightbox Image Container */}
              <div className="relative max-w-5xl w-full h-[62vh] min-h-[420px] overflow-auto rounded-2xl border border-pink-500/40 p-2 sm:p-4 bg-[#110420] shadow-[0_0_40px_rgba(217,70,239,0.25)] flex items-center justify-center">
                <img
                  src={certificate.fileUrl}
                  alt={certificate.courseOrAchievement || certificate.title}
                  referrerPolicy="no-referrer"
                  style={{ transform: `scale(${imageZoom})`, transformOrigin: 'center center' }}
                  onLoad={() => setIsImageLoading(false)}
                  className={`max-w-full max-h-[58vh] object-contain rounded-xl transition-transform duration-200 shadow-2xl ${
                    isImageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {isImageLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="material-symbols-outlined animate-spin text-pink-500 text-[32px]">progress_activity</span>
                    <span className="text-xs text-pink-300">Loading original certificate...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Certificate Metadata strip */}
          <div className="w-full max-w-5xl mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#18082c]/90 p-3 sm:p-4 rounded-2xl border border-pink-500/20 text-xs">
            <div>
              <span className="text-pink-400 font-mono font-bold uppercase text-[10px] block">Recipient</span>
              <span className="text-white font-semibold">{certificate.recipientName || 'Padmaroopa D.'}</span>
            </div>
            <div>
              <span className="text-pink-400 font-mono font-bold uppercase text-[10px] block">Course / Program</span>
              <span className="text-pink-200 font-medium truncate block" title={certificate.courseOrAchievement || certificate.title}>
                {certificate.courseOrAchievement || certificate.title}
              </span>
            </div>
            <div>
              <span className="text-pink-400 font-mono font-bold uppercase text-[10px] block">Issue Date</span>
              <span className="text-purple-200">{certificate.issueDate || certificate.durationOrYear}</span>
            </div>
            <div>
              <span className="text-pink-400 font-mono font-bold uppercase text-[10px] block">Certificate ID</span>
              <div className="flex items-center gap-1 mt-0.5">
                <code className="text-pink-300 font-mono text-[11px] truncate">{certificate.certificateId || certificate.id}</code>
                <button
                  type="button"
                  onClick={handleCopyId}
                  title="Copy Certificate ID"
                  className="text-pink-400 hover:text-white p-0.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px]">content_copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-pink-900/50 bg-[#120422] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {/* Previous / Next Switcher Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={() => {
                if (prevCert) onSelectCertificate(prevCert);
              }}
              disabled={!prevCert}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                prevCert
                  ? 'bg-[#220938] border-pink-500/30 text-pink-200 hover:bg-pink-900/50 hover:text-white'
                  : 'bg-transparent border-purple-900/40 text-purple-700 cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              <span>Previous</span>
            </button>

            <span className="text-xs font-mono text-pink-300/70 sm:hidden">
              {currentIndex + 1} / {CERTIFICATIONS.length}
            </span>

            <button
              type="button"
              onClick={() => {
                if (nextCert) onSelectCertificate(nextCert);
              }}
              disabled={!nextCert}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                nextCert
                  ? 'bg-[#220938] border-pink-500/30 text-pink-200 hover:bg-pink-900/50 hover:text-white'
                  : 'bg-transparent border-purple-900/40 text-purple-700 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          {/* Action Buttons: Copy ID, Download Certificate, Close / Back */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyId}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#260b40] hover:bg-[#340f55] border border-pink-500/30 text-xs sm:text-sm font-semibold text-pink-200 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              <span className="hidden sm:inline">Copy ID</span>
            </button>

            {/* DOWNLOAD CERTIFICATE BUTTON - PRESERVES ORIGINAL FILE */}
            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>
                Download Certificate ({certificate.fileType.toUpperCase()})
              </span>
            </button>

            {/* CLOSE / BACK BUTTON */}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#210938] hover:bg-pink-950/70 border border-pink-500/30 text-xs sm:text-sm font-semibold text-pink-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
              <span>Close / Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
