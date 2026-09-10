import React, { useState } from 'react';

interface ProjectsProps {
  onNotify: (msg: string) => void;
  activeFilter?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ onNotify, activeFilter = 'all' }) => {
  // Interactive state for Project 1: Plagiarism Key Detection
  const [similarityScore, setSimilarityScore] = useState(94.4);
  const [analyzingDoc, setAnalyzingDoc] = useState(false);

  // Interactive state for Project 2: Bloomora
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(3);

  const runPlagiarismScan = () => {
    setAnalyzingDoc(true);
    onNotify('Running vectorized TF-IDF & Cosine Similarity test...');
    setTimeout(() => {
      const newScore = Math.floor(Math.random() * 12 + 86) + 0.4;
      setSimilarityScore(Number(newScore.toFixed(1)));
      setAnalyzingDoc(false);
      onNotify(`Plagiarism scan finished: ${newScore.toFixed(1)}% match identified.`);
    }, 850);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    onNotify('Added Pastel Lavender Bouquet to Bloomora bag!');
  };

  const showProject1 = activeFilter === 'all' || activeFilter === 'ml';
  const showProject2 = activeFilter === 'all' || activeFilter === 'design';
  const showProject3 = activeFilter === 'all' || activeFilter === 'web';

  return (
    <section
      id="projects"
      className="w-full bg-[#f5edf7] text-[#2e1047] py-20 border-b border-pink-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-700 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">folder_special</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                03 · Engineering Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2e1047] tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-purple-900/80 max-w-lg leading-relaxed">
            Hand-picked production and academic systems highlighting machine learning architectures,
            mobile product design prototypes, and full-stack database integrations.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          {/* ===================== PROJECT 01 ===================== */}
          {showProject1 && (
            <article className="group relative rounded-3xl bg-white border border-purple-200/60 shadow-md hover:shadow-xl hover:border-pink-400/60 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-stretch">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Badges Header */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                        PROJECT 01
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-mono text-xs font-semibold">
                        Machine Learning / NLP
                      </span>
                      <span className="font-mono text-xs text-pink-600 font-semibold flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        Production Ready
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-[#2e1047] group-hover:text-purple-700 transition-colors">
                        Plagiarism Key Detection
                      </h3>
                      <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed">
                        A plagiarism detection system that analyzes and compares documents using TF-IDF
                        and Cosine Similarity. It calculates similarity percentages and classifies
                        documents into plagiarism levels.
                      </p>
                    </div>

                    {/* Key Architectural Features */}
                    <div className="space-y-2 pt-2">
                      <p className="font-mono text-xs text-purple-900 font-bold uppercase tracking-wider">
                        Key Architectural Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-purple-900 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-pink-600 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Vectorized text comparison using TF-IDF</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-pink-600 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Cosine similarity metric score calculation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-pink-600 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Real-time document similarity percentage</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-pink-600 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Multi-level severity classification (Low / Moderate / High)</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <span className="material-symbols-outlined text-pink-600 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Clean web interface for batch text &amp; file analysis</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & CTAs */}
                  <div className="space-y-4 pt-4 border-t border-purple-100">
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Flask', 'Scikit-learn', 'Pandas', 'TF-IDF', 'Cosine Similarity', 'HTML', 'CSS'].map(
                        (tech, tIdx) => {
                          const isKey = tech === 'Flask' || tech === 'Scikit-learn' || tech === 'TF-IDF';
                          return (
                            <span
                              key={tIdx}
                              className={`px-2.5 py-1 rounded-lg font-mono text-xs ${
                                isKey
                                  ? 'bg-pink-100 border border-pink-300 text-pink-700 font-bold'
                                  : 'bg-purple-50/70 border border-purple-200/50 text-purple-900'
                              }`}
                            >
                              {tech}
                            </span>
                          );
                        }
                      )}
                    </div>

                    {/* Action Buttons: View Project (GitHub) & Live Demo (Render) */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href="https://github.com/padmarupa31/plagiarism_key_detection"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="plagiarism-view-project-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_4px_12px_rgba(217,70,239,0.35)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        <span>View Project</span>
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>

                      <a
                        href="https://plagiarism-key-detection-7.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="plagiarism-live-demo-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2e1047] hover:bg-[#431866] text-white font-semibold text-sm shadow-[0_4px_12px_rgba(46,16,71,0.25)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px] text-pink-400">rocket_launch</span>
                        <span>Live Demo</span>
                        <span className="material-symbols-outlined text-[16px] text-pink-300">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Stitch Dark NLP Inspector Terminal */}
                <div className="lg:col-span-5 bg-[#1b0d2c] rounded-2xl p-5 text-purple-100 flex flex-col justify-between shadow-xl border border-pink-500/20 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Window Top */}
                  <div className="flex items-center justify-between pb-3 border-b border-pink-900/50 z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-mono text-xs text-pink-300">nlp_comparator.py</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-pink-950/60 font-mono text-xs text-pink-300">
                      TF-IDF Matrix
                    </span>
                  </div>

                  {/* Python Snippet */}
                  <pre className="font-mono text-xs leading-relaxed text-purple-200 py-3 overflow-x-auto z-10">
                    <code>
                      <span className="text-pink-400">from</span> sklearn.metrics.pairwise{' '}
                      <span className="text-pink-400">import</span> cosine_similarity{'\n'}
                      <span className="text-fuchsia-300">def</span>{' '}
                      <span className="text-pink-300">classify_plagiarism</span>(score):{'\n'}
                      {'    '}<span className="text-pink-400">if</span> score &gt;{' '}
                      <span className="text-amber-300">0.80</span>:{' '}
                      <span className="text-pink-400">return</span>{' '}
                      <span className="text-pink-300">'High Severity'</span>{'\n'}
                      {'    '}<span className="text-pink-400">elif</span> score &gt;{' '}
                      <span className="text-amber-300">0.40</span>:{' '}
                      <span className="text-pink-400">return</span>{' '}
                      <span className="text-pink-400">'Moderate'</span>{'\n'}
                      {'    '}<span className="text-pink-400">return</span>{' '}
                      <span className="text-purple-300">'Low'</span>
                    </code>
                  </pre>

                  {/* Live Metric Progress */}
                  <div className="space-y-2.5 z-10">
                    <div className="p-3.5 rounded-xl bg-[#281340]/90 border border-pink-500/30 space-y-2">
                      <div className="flex justify-between items-center font-mono text-xs">
                        <span className="flex items-center gap-1.5 text-pink-200">
                          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                          Similarity Metric Score
                        </span>
                        <span className="text-pink-300 font-bold text-base leading-none">
                          {similarityScore}%
                        </span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-[#160826] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-500"
                          style={{ width: `${similarityScore}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-[11px] font-mono pt-0.5">
                        <span className="text-purple-300">
                          Cosine Similarity: {(similarityScore / 100).toFixed(4)}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-300 font-bold uppercase tracking-wider">
                          High Plagiarism
                        </span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#281340]/50 border border-pink-500/20 flex items-center justify-between text-xs font-mono text-purple-200">
                      <span>Batch Vectors: 1,420 Tokens</span>
                      <button
                        type="button"
                        onClick={runPlagiarismScan}
                        disabled={analyzingDoc}
                        title="Simulate NLP scan calculation"
                        className="text-pink-300 hover:text-pink-200 font-semibold flex items-center gap-1 cursor-pointer transition-colors disabled:opacity-50"
                      >
                        <span className={`material-symbols-outlined text-[14px] ${analyzingDoc ? 'animate-spin' : ''}`}>
                          {analyzingDoc ? 'progress_activity' : 'refresh'}
                        </span>
                        <span>{analyzingDoc ? 'Scanning...' : 'Test Scan'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ===================== PROJECT 02 ===================== */}
          {showProject2 && (
            <article className="group relative rounded-3xl bg-white border border-purple-200/60 shadow-md hover:shadow-xl hover:border-pink-400/60 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-stretch">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Badges Header */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                        PROJECT 02
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-mono text-xs font-semibold">
                        Mobile Product Design / UI/UX
                      </span>
                      <span className="font-mono text-xs text-purple-700 font-semibold flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                        Interactive Prototype
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-[#2e1047] group-hover:text-purple-700 transition-colors">
                        Bloomora – Flower Shop E-Commerce Application
                      </h3>
                      <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed">
                        A mobile e-commerce application for a flower shop where users can browse bouquets,
                        indoor plants and gift products. Includes product categories, search, cart and
                        checkout flows.
                      </p>
                    </div>

                    {/* Key Architectural Features */}
                    <div className="space-y-2 pt-2">
                      <p className="font-mono text-xs text-purple-900 font-bold uppercase tracking-wider">
                        Key Architectural Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-purple-900 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Human-centered mobile user journey &amp; wireframes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Interactive product catalog (bouquets, plants, gifts)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Instant search, category filters &amp; order summary</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Complete end-to-end checkout &amp; payment flow</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Design system with typography, soft floral accents &amp; 8pt grid</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & CTAs */}
                  <div className="space-y-4 pt-4 border-t border-purple-100">
                    <div className="flex flex-wrap gap-1.5">
                      {['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'User Flows', 'Wireframing'].map(
                        (tech, tIdx) => {
                          const isKey = tech === 'Figma' || tech === 'Design Systems';
                          return (
                            <span
                              key={tIdx}
                              className={`px-2.5 py-1 rounded-lg font-mono text-xs ${
                                isKey
                                  ? 'bg-purple-100 border border-purple-300 text-purple-800 font-bold'
                                  : 'bg-purple-50/70 border border-purple-200/50 text-purple-900'
                              }`}
                            >
                              {tech}
                            </span>
                          );
                        }
                      )}
                    </div>

                    {/* Action Buttons: View Project (Figma Design) & Live Prototype (Figma Proto) */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href="https://www.figma.com/design/s7JtxmFFRGXmcDKbyx9kol/2303121026_Padmaroopa_UIUX_Assignment1?node-id=3-6&t=EyEyNLf8Sug7Fgok-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="bloomora-view-project-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_4px_12px_rgba(217,70,239,0.35)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">draw</span>
                        <span>View Project</span>
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>

                      <a
                        href="https://www.figma.com/proto/s7JtxmFFRGXmcDKbyx9kol/2303121026_Padmaroopa_UIUX_Assignment1?node-id=341-247&p=f&t=ze3Qm0kxCFKigVIw-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A7"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="bloomora-live-prototype-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2e1047] hover:bg-[#431866] text-white font-semibold text-sm shadow-[0_4px_12px_rgba(46,16,71,0.25)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px] text-pink-400">play_circle</span>
                        <span>Live Prototype</span>
                        <span className="material-symbols-outlined text-[16px] text-pink-300">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bloomora Storefront Mobile Mockup */}
                <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#f8f0fa] via-[#ede0f2] to-[#e4d0ec] p-5 flex flex-col justify-between shadow-inner border border-purple-200/80 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-700 text-[22px]">
                        local_florist
                      </span>
                      <span className="text-base font-bold text-[#2e1047]">Bloomora Storefront</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-mono text-xs font-bold shadow-xs">
                      Figma UI
                    </span>
                  </div>

                  {/* Phone preview */}
                  <div className="rounded-xl bg-white p-3.5 shadow-md border border-purple-100 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="h-8 px-2.5 rounded-lg bg-purple-50 flex items-center gap-1.5 w-full text-purple-900/60 text-xs">
                        <span className="material-symbols-outlined text-[16px]">search</span>
                        <span>Search fresh tulips, orchids...</span>
                      </div>
                      <button
                        onClick={() => onNotify(`Bloomora Bag: ${cartCount} items.`)}
                        className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-700 relative shrink-0 cursor-pointer hover:bg-pink-200 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white text-[10px] flex items-center justify-center font-bold">
                          {cartCount}
                        </span>
                      </button>
                    </div>

                    <div className="flex gap-1.5 overflow-x-auto pb-0.5">
                      {['All', 'Bouquets', 'Indoor Plants', 'Gifts'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-colors ${
                            selectedCategory === cat
                              ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white'
                              : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl bg-purple-50/60 p-2.5 border border-purple-100 flex items-center gap-3">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-purple-100 flex items-center justify-center relative shadow-inner">
                        <img
                          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&auto=format&fit=crop&q=80"
                          alt="Pastel Lavender Bouquet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 w-full">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm text-[#2e1047]">
                            Pastel Lavender Bouquet
                          </span>
                          <span className="text-purple-700 font-mono font-bold text-xs">$38.00</span>
                        </div>
                        <p className="text-[11px] text-purple-900/70 leading-tight">
                          Hand-tied fresh seasonal blooms with velvet wrap
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] text-pink-700 font-semibold flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px] text-amber-500">
                              star
                            </span>
                            4.9 (128)
                          </span>
                          <button
                            onClick={handleAddToCart}
                            className="px-2.5 py-1 rounded-md bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white text-[11px] font-semibold flex items-center gap-1 shadow-xs cursor-pointer transition-colors"
                          >
                            <span className="material-symbols-outlined text-[14px]">add</span> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Token specs */}
                  <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono text-xs">
                    <div className="p-2 rounded-xl bg-white shadow-xs border border-purple-100">
                      <span className="text-purple-400 block text-[11px]">Design Grid</span>
                      <span className="font-bold text-purple-700">8pt Spatial</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white shadow-xs border border-purple-100">
                      <span className="text-purple-400 block text-[11px]">Typography</span>
                      <span className="font-bold text-pink-700">Jakarta Sans</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white shadow-xs border border-purple-100">
                      <span className="text-purple-400 block text-[11px]">Checkout</span>
                      <span className="font-bold text-purple-900">One-Page Flow</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ===================== PROJECT 03 ===================== */}
          {showProject3 && (
            <article className="group relative rounded-3xl bg-white border border-purple-200/60 shadow-md hover:shadow-xl hover:border-pink-400/60 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-stretch">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Badges Header */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                        PROJECT 03
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-mono text-xs font-semibold">
                        Full-Stack Web / Database
                      </span>
                      <span className="font-mono text-xs text-purple-700 font-semibold flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                        Role Auth &amp; MySQL
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-[#2e1047] group-hover:text-purple-700 transition-colors">
                        Blog Management System
                      </h3>
                      <p className="text-sm sm:text-base text-purple-950/80 leading-relaxed">
                        A full-stack blogging platform where users can register, log in, create, edit,
                        delete, and manage their own blog posts. Includes MySQL database integration,
                        authentication, session management, and author-based post ownership.
                      </p>
                    </div>

                    {/* Key Architectural Features */}
                    <div className="space-y-2 pt-2">
                      <p className="font-mono text-xs text-purple-900 font-bold uppercase tracking-wider">
                        Key Architectural Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-purple-900 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>User authentication &amp; session management</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Author-based post ownership and access control</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Create, edit, delete, and view blog posts</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>MySQL database integration</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>Responsive web interface</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & CTAs */}
                  <div className="space-y-4 pt-4 border-t border-purple-100">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'].map(
                          (tech, tIdx) => {
                            const isKey = tech === 'MySQL' || tech === 'Express.js' || tech === 'Node.js';
                            return (
                              <span
                                key={tIdx}
                                className={`px-2.5 py-1 rounded-lg font-mono text-xs ${
                                  isKey
                                    ? 'bg-purple-100 border border-purple-300 text-purple-800 font-bold'
                                    : 'bg-purple-50/70 border border-purple-200/50 text-purple-900'
                                }`}
                              >
                                {tech}
                              </span>
                            );
                          }
                        )}
                        <span className="text-purple-300 font-mono text-xs px-1">|</span>
                        <span className="text-[11px] font-mono text-purple-600 font-semibold">
                          Dev &amp; DB Tools:
                        </span>
                        {['XAMPP', 'phpMyAdmin'].map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-purple-50/60 border border-purple-200/60 text-purple-700 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: View Project (GitHub) & Live Demo (Render) */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href="https://github.com/padmarupa31/blog_management_system"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="blog-view-project-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-[0_4px_12px_rgba(217,70,239,0.35)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        <span>View Project</span>
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>

                      <a
                        href="https://blog-management-system-16y8.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="blog-live-demo-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2e1047] hover:bg-[#431866] text-white font-semibold text-sm shadow-[0_4px_12px_rgba(46,16,71,0.25)] transition-all duration-200 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px] text-pink-400">rocket_launch</span>
                        <span>Live Demo</span>
                        <span className="material-symbols-outlined text-[16px] text-pink-300">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Author Studio & Database Portal */}
                <div className="lg:col-span-5 rounded-2xl bg-purple-50/90 p-5 flex flex-col justify-between shadow-inner border border-purple-200 relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-purple-200">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-700 to-pink-600 flex items-center justify-center text-white shadow-xs">
                          <span className="material-symbols-outlined text-[18px]">dashboard</span>
                        </div>
                        <span className="text-base font-bold text-[#2e1047]">Author Studio</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-mono text-xs font-bold">
                        Author: @padmarupa
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="p-3 rounded-xl bg-white shadow-xs space-y-1 border border-purple-100">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm text-[#2e1047]">
                            Building Robust Web APIs with Node &amp; Express
                          </span>
                          <span className="px-2 py-0.5 rounded bg-purple-700 text-white font-mono text-[10px] font-bold uppercase">
                            Published
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-purple-900/60">
                          <span>ID: #1042</span>
                          <span>·</span>
                          <span>MySQL: posts_tbl</span>
                          <span>·</span>
                          <span className="text-purple-700 font-semibold">Author Verified</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white shadow-xs space-y-1 border border-purple-100">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm text-[#2e1047]">
                            Relational Normalization &amp; Indexing Strategies
                          </span>
                          <span className="px-2 py-0.5 rounded bg-pink-100 text-pink-700 font-mono text-[10px] font-bold uppercase">
                            Draft
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-purple-900/60">
                          <span>ID: #1043</span>
                          <span>·</span>
                          <span>MySQL: posts_tbl</span>
                          <span>·</span>
                          <span className="text-purple-700 font-bold">Last Edited 2h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-white shadow-xs border border-purple-100 flex items-center justify-between text-purple-900 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-purple-700 text-[18px]">
                        database
                      </span>
                      <span className="text-[#2e1047] font-semibold">phpMyAdmin / MySQL 8.0</span>
                    </div>
                    <span className="text-pink-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-pink-500" />
                      Session Guard Active
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};
