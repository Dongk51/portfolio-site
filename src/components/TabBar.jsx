import { NAV_SECTIONS } from '../data';

export default function TabBar({ activeSection, onNavigate }) {
  return (
    <div className="hidden lg:flex items-center border-b border-[#2a3050] bg-[#161b29] overflow-x-auto">
      {NAV_SECTIONS.map((sec) => (
        <button
          key={sec.id}
          onClick={() => onNavigate(sec.id)}
          className={`
            flex items-center gap-2 px-4 py-2.5 text-xs border-r border-[#2a3050]
            whitespace-nowrap transition-colors duration-150 shrink-0
            ${activeSection === sec.id
              ? 'bg-[#1a1f2e] text-[#c8ff00] border-t-2 border-t-[#c8ff00]'
              : 'text-[#6b7fa3] hover:bg-[#1e2436] hover:text-[#abb2bf] border-t-2 border-t-transparent'
            }
          `}
        >
          <span>{sec.icon}</span>
          <span>{sec.label}</span>
        </button>
      ))}
    </div>
  );
}
