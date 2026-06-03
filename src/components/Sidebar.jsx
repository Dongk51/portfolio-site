import { useState } from 'react';
import { NAV_SECTIONS } from '../data';

export default function Sidebar({ activeSection, onNavigate, mobileOpen, onClose }) {
  const [filesOpen, setFilesOpen] = useState(true);

  function handleNav(id) {
    onNavigate(id);
    onClose();
  }

  return (
    <>
      {/* 모바일 오버레이 */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-56 z-30
          bg-[#161b29] border-r border-[#2a3050]
          flex flex-col
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* 로고 */}
        <div className="px-4 py-4 border-b border-[#2a3050]">
          <span className="text-[#c8ff00] font-bold text-sm tracking-widest uppercase">
            &gt;_ Portfolio
          </span>
        </div>

        {/* 파일 탐색기 */}
        <div className="flex-1 overflow-y-auto py-2">
          <button
            onClick={() => setFilesOpen((v) => !v)}
            className="w-full flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#6b7fa3] hover:text-[#abb2bf] uppercase tracking-wider"
          >
            <span className="text-[10px]">{filesOpen ? '▾' : '▸'}</span>
            Explorer
          </button>

          {filesOpen && (
            <div className="mt-1">
              {NAV_SECTIONS.map((sec, i) => (
                <button
                  key={sec.id}
                  onClick={() => handleNav(sec.id)}
                  className={`
                    w-full flex items-center gap-2 px-4 py-2 text-sm
                    transition-colors duration-150
                    ${activeSection === sec.id
                      ? 'bg-[#1e2436] text-[#c8ff00] border-l-2 border-[#c8ff00]'
                      : 'text-[#6b7fa3] hover:bg-[#1e2436] hover:text-[#abb2bf] border-l-2 border-transparent'
                    }
                  `}
                >
                  <span className="text-base leading-none">{sec.icon}</span>
                  <span className="truncate">{sec.label}</span>
                  <span className="ml-auto text-[10px] text-[#3a4060]">
                    {String(i).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 하단 정보 */}
        <div className="px-4 py-3 border-t border-[#2a3050] text-[10px] text-[#3a4060]">
          <div>KIM DONG MIN</div>
          <div>Full Stack Developer</div>
        </div>
      </aside>
    </>
  );
}
