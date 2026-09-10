import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set up the local worker from public directory to ensure 100% reliability with no CORS or external CDN dependencies
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

interface PdfViewerProps {
  url: string;
  fallbackImageUrl?: string;
  title: string;
  onNotify?: (msg: string) => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  url,
  fallbackImageUrl,
  title,
  onNotify,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'canvas' | 'image'>(fallbackImageUrl ? 'canvas' : 'canvas');

  // Load PDF Document
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setPdfDoc(null);
    setPageNum(1);

    const loadingTask = pdfjsLib.getDocument({
      url,
      cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.3.289/cmaps/',
      cMapPacked: true,
    });

    loadingTask.promise
      .then((loadedPdf) => {
        if (!isCancelled) {
          setPdfDoc(loadedPdf);
          setNumPages(loadedPdf.numPages);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.warn('PDF.js canvas renderer notice:', err);
          setError('Canvas renderer fallback active');
          setLoading(false);
          // If fallback image exists, automatically switch to it
          if (fallbackImageUrl) {
            setViewMode('image');
          }
        }
      });

    return () => {
      isCancelled = true;
      try {
        loadingTask.destroy();
      } catch {
        // ignore cleanup error
      }
    };
  }, [url, fallbackImageUrl]);

  // Render Page to Canvas
  const renderPage = useCallback(async () => {
    if (!pdfDoc || !canvasRef.current || viewMode !== 'canvas') return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      if (!canvas) return;

      const viewport = page.getViewport({ scale });
      const context = canvas.getContext('2d');
      if (!context) return;

      // Handle high-DPI displays (retina screens)
      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

      const renderContext = {
        canvasContext: context,
        viewport,
        transform,
      };

      await page.render(renderContext).promise;
    } catch (renderErr) {
      console.warn('Page render notice:', renderErr);
    }
  }, [pdfDoc, pageNum, scale, viewMode]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  const handleZoomIn = () => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(1)));
  const handleZoomOut = () => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(1)));
  const handleResetZoom = () => setScale(1.2);

  const handlePrevPage = () => {
    if (pageNum > 1) setPageNum((p) => p - 1);
  };
  const handleNextPage = () => {
    if (pageNum < numPages) setPageNum((p) => p + 1);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start text-white">
      {/* Control Bar */}
      <div className="w-full max-w-5xl mb-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-pink-300/90 font-medium flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-pink-400">picture_as_pdf</span>
            <span className="hidden sm:inline">Original PDF Certificate</span>
          </span>

          {/* Toggle between Canvas PDF and High-Res Preview if available */}
          {fallbackImageUrl && (
            <div className="flex items-center bg-[#1e0a35] p-0.5 rounded-lg border border-pink-500/30 ml-2">
              <button
                type="button"
                onClick={() => setViewMode('canvas')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  viewMode === 'canvas' ? 'bg-pink-600 text-white shadow-xs' : 'text-purple-300 hover:text-white'
                }`}
              >
                PDF Canvas
              </button>
              <button
                type="button"
                onClick={() => setViewMode('image')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  viewMode === 'image' ? 'bg-pink-600 text-white shadow-xs' : 'text-purple-300 hover:text-white'
                }`}
              >
                HD Image
              </button>
            </div>
          )}
        </div>

        {/* Zoom & Page Controls */}
        <div className="flex items-center gap-2">
          {viewMode === 'canvas' && numPages > 1 && (
            <div className="flex items-center gap-1 bg-[#1e0a35] px-2 py-1 rounded-lg border border-pink-500/30">
              <button
                type="button"
                disabled={pageNum <= 1}
                onClick={handlePrevPage}
                className="text-pink-300 hover:text-white disabled:opacity-30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <span className="font-mono text-[11px] px-1">
                {pageNum} / {numPages}
              </span>
              <button
                type="button"
                disabled={pageNum >= numPages}
                onClick={handleNextPage}
                className="text-pink-300 hover:text-white disabled:opacity-30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          )}

          <div className="flex items-center gap-1 bg-[#1e0a35] px-2 py-1 rounded-lg border border-pink-500/30">
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="text-pink-300 hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">zoom_out</span>
            </button>
            <span className="font-mono text-[11px] px-1 min-w-[40px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom In"
              className="text-pink-300 hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">zoom_in</span>
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="text-pink-300 hover:text-white text-[10px] px-1 underline cursor-pointer"
            >
              Fit
            </button>
          </div>
        </div>
      </div>

      {/* Main Display Container */}
      <div
        ref={containerRef}
        className="relative max-w-5xl w-full h-[62vh] min-h-[420px] overflow-auto rounded-2xl border border-pink-500/40 p-2 sm:p-4 bg-[#110420] shadow-[0_0_40px_rgba(217,70,239,0.25)] flex items-start justify-center"
      >
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#110420]/90 backdrop-blur-xs gap-2">
            <span className="material-symbols-outlined animate-spin text-pink-500 text-[32px]">progress_activity</span>
            <span className="text-xs text-pink-300">Rendering high-resolution PDF document...</span>
          </div>
        )}

        {viewMode === 'canvas' && !error ? (
          <div className="flex flex-col items-center justify-center my-auto transition-transform duration-150 shadow-2xl rounded-lg bg-white p-1">
            <canvas ref={canvasRef} className="block rounded max-w-full" />
          </div>
        ) : (
          /* Fallback or Selected Image Mode */
          <div className="flex flex-col items-center justify-center my-auto">
            <img
              src={fallbackImageUrl || url}
              alt={title}
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
              className="max-w-full max-h-[58vh] object-contain rounded-xl transition-transform duration-200 shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};
