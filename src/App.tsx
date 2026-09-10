import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { OptionsMenu } from './components/OptionsMenu';
import { Toast } from './components/Toast';
import { CERTIFICATIONS } from './data';
import { CertificationItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'options'>('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [currentTheme, setCurrentTheme] = useState('stitch');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleOpenCertificate = (cert: CertificationItem) => {
    setSelectedCertificate(cert);
    setCertificateModalOpen(true);
  };

  const jumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (sectionId === 'home') {
      setActiveTab('home');
    } else if (sectionId === 'about' || sectionId === 'education' || sectionId === 'certifications') {
      setActiveTab('about');
    }
  };

  // Scroll spy to update active state between Home and About as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutEl = document.getElementById('about');

      if (aboutEl) {
        const aboutTop = aboutEl.offsetTop - 200;
        if (scrollPosition >= aboutTop) {
          setActiveTab('about');
        } else {
          setActiveTab('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen text-slate-100 flex flex-col antialiased selection:bg-fuchsia-900 selection:text-pink-200 ${
        currentTheme === 'cyber'
          ? 'bg-[#0e071c]'
          : currentTheme === 'neon'
          ? 'bg-[#150622]'
          : 'bg-[#12061e]'
      }`}
    >
      {/* Fixed Sticky Header Navigation: Home | About | Options */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'options') {
            setOptionsOpen(true);
          }
        }}
        onOpenResume={() => setResumeOpen(true)}
        onOpenOptions={() => setOptionsOpen(true)}
      />

      {/* Main Content Sections with Stitch Alternating Visual Structure */}
      <main className="flex-1 pt-16">
        {/* Home / Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onNotify={showToast}
        />

        {/* Section 01: About Me */}
        <About />

        {/* Section 02: Technical Skills */}
        <Skills />

        {/* Section 03: Featured Projects */}
        <Projects
          onNotify={showToast}
          activeFilter={projectFilter}
        />

        {/* Section 04: Education */}
        <Education />

        {/* Section 05: Certifications & Internships */}
        <Certifications
          onNotify={showToast}
          onViewCertificate={handleOpenCertificate}
        />

        {/* Section 06: Achievements & Milestones */}
        <Achievements />

        {/* Section 07: Contact & Inquiries */}
        <Contact onNotify={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Options Navigation & Preferences Modal */}
      <OptionsMenu
        isOpen={optionsOpen}
        onClose={() => {
          setOptionsOpen(false);
          // Restore active tab based on current scroll
          const aboutEl = document.getElementById('about');
          if (aboutEl && window.scrollY >= aboutEl.offsetTop - 200) {
            setActiveTab('about');
          } else {
            setActiveTab('home');
          }
        }}
        onOpenResume={() => setResumeOpen(true)}
        onOpenCertificate={() => handleOpenCertificate(CERTIFICATIONS[0])}
        onNotify={showToast}
        onJumpToSection={jumpToSection}
        projectFilter={projectFilter}
        onSelectProjectFilter={setProjectFilter}
        currentTheme={currentTheme}
        onChangeTheme={setCurrentTheme}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onNotify={showToast}
      />

      {/* Dedicated Digital Certificate Viewer & Download Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
        onSelectCertificate={(cert) => setSelectedCertificate(cert)}
        onNotify={showToast}
      />

      {/* Interactive Toast Notification */}
      <Toast show={toastVisible} message={toastMessage} />
    </div>
  );
}
