import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import Hero from './sections/Hero';
import Career from './sections/Career';
import Skills from './sections/Skills';
import About from './sections/About';
import Projects from './sections/Projects';
import { NAV_SECTIONS } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef(null);

  // IntersectionObserver로 현재 섹션 추적
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    NAV_SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  function navigateTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#1a1f2e] font-mono">
      {/* 사이드바 */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={navigateTo}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* 메인 영역 */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* 상단 메뉴바 */}
        <div className="flex items-center justify-between bg-[#161b29] border-b border-[#2a3050] px-4 py-2 shrink-0">
          <div className="flex items-center gap-4">
            {/* 모바일 햄버거 */}
            <button
              className="lg:hidden text-[#6b7fa3] hover:text-[#abb2bf] transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="메뉴 열기"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* 메뉴바 */}
            <nav className="hidden md:flex items-center gap-1 text-xs text-[#6b7fa3]">
              {['File', 'Edit', 'View', 'Option'].map((item) => (
                <button
                  key={item}
                  className="px-3 py-1 rounded hover:bg-[#2a3050] hover:text-[#abb2bf] transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* 타이틀 */}
          <span className="text-xs text-[#5c6370] hidden sm:block">
            KIM DONG MIN — Portfolio
          </span>

          {/* 윈도우 컨트롤 */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
        </div>

        {/* 탭 바 */}
        <TabBar activeSection={activeSection} onNavigate={navigateTo} />

        {/* 스크롤 가능한 콘텐츠 */}
        <main className="flex-1 overflow-y-auto">
          <Hero />
          <Career />
          <Skills />
          <About />
          <Projects />

          {/* 푸터 */}
          <footer className="border-t border-[#2a3050] bg-[#161b29] px-12 py-6 text-center">
            <p className="font-mono text-xs text-[#3a4060]">
              <span className="text-[#c8ff00]">KIM DONG MIN</span>
              {' '}· dongk6987@gmail.com ·{' '}
              <span className="text-[#5c6370]">Built with React + Vite + Tailwind CSS</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
