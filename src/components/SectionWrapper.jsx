import LineNumbers from './LineNumbers';

export default function SectionWrapper({ id, lineStart = 1, lineCount = 40, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex border-b border-[#2a3050]"
    >
      {/* 줄 번호 */}
      <div className="hidden sm:flex flex-col items-end w-10 shrink-0 border-r border-[#2a3050] bg-[#1a1f2e] pt-8 pb-8">
        {Array.from({ length: lineCount }, (_, i) => (
          <div
            key={i}
            className="w-full text-right pr-3 text-[#3a4060] text-xs leading-6 font-mono select-none"
          >
            {lineStart + i}
          </div>
        ))}
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1 px-6 md:px-12 py-8 overflow-hidden">
        {children}
      </div>
    </section>
  );
}
