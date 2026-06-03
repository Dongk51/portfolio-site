import SectionWrapper from '../components/SectionWrapper';
import { INFO, EDUCATION, TRAINING, CAREERS } from '../data';

function CodeLine({ indent = 0, children, className = '' }) {
  return (
    <div className={`font-mono text-sm leading-7 ${className}`} style={{ paddingLeft: `${indent * 16}px` }}>
      {children}
    </div>
  );
}

function Badge({ type }) {
  const dev = type === '개발';
  return (
    <span className={`text-xs px-2 py-0.5 rounded font-mono ml-2 ${
      dev
        ? 'bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/30'
        : 'bg-[#2a3050] text-[#6b7fa3] border border-[#3a4060]'
    }`}>
      {type}
    </span>
  );
}

export default function Career() {
  return (
    <SectionWrapper id="career" lineStart={46} lineCount={50}>
      <div className="pt-4">
        {/* 섹션 헤더 */}
        <p className="text-[#5c6370] text-sm font-mono mb-6">// 01. 이력사항</p>

        {/* 개인정보 블록 */}
        <div className="mb-8">
          <CodeLine><span className="text-[#c8ff00]">const</span> <span className="text-[#61afef]">info</span> <span className="text-[#abb2bf]">= &#123;</span></CodeLine>
          <CodeLine indent={1}><span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{INFO.name} ({INFO.nameEn})&quot;</span><span className="text-[#abb2bf]">,</span></CodeLine>
          <CodeLine indent={1}><span className="text-[#e06c75]">birth</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{INFO.birth}&quot;</span><span className="text-[#abb2bf]">,</span></CodeLine>
          <CodeLine indent={1}><span className="text-[#e06c75]">phone</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{INFO.phone}&quot;</span><span className="text-[#abb2bf]">,</span></CodeLine>
          <CodeLine indent={1}><span className="text-[#e06c75]">email</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{INFO.email}&quot;</span></CodeLine>
          <CodeLine><span className="text-[#abb2bf]">&#125;</span></CodeLine>
        </div>

        {/* 학력 */}
        <div className="mb-8">
          <CodeLine><span className="text-[#5c6370]">/* 학력 */</span></CodeLine>
          <CodeLine><span className="text-[#c8ff00]">const</span> <span className="text-[#61afef]">education</span> <span className="text-[#abb2bf]">= [</span></CodeLine>
          {EDUCATION.map((ed, i) => (
            <CodeLine key={i} indent={1}>
              <span className="text-[#abb2bf]">&#123; </span>
              <span className="text-[#e06c75]">date</span><span className="text-[#abb2bf]">: </span>
              <span className="text-[#98c379]">&quot;{ed.date}&quot;</span>
              <span className="text-[#abb2bf]">, </span>
              <span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">: </span>
              <span className="text-[#98c379]">&quot;{ed.name}&quot;</span>
              <span className="text-[#abb2bf]"> &#125;</span>
            </CodeLine>
          ))}
          <CodeLine><span className="text-[#abb2bf]">]</span></CodeLine>
        </div>

        {/* 교육 */}
        <div className="mb-8">
          <CodeLine><span className="text-[#5c6370]">/* 교육 */</span></CodeLine>
          <CodeLine><span className="text-[#c8ff00]">const</span> <span className="text-[#61afef]">training</span> <span className="text-[#abb2bf]">= [</span></CodeLine>
          {TRAINING.map((tr, i) => (
            <div key={i}>
              <CodeLine indent={1}><span className="text-[#abb2bf]">&#123;</span></CodeLine>
              <CodeLine indent={2}><span className="text-[#e06c75]">period</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{tr.period}&quot;</span><span className="text-[#abb2bf]">,</span></CodeLine>
              <CodeLine indent={2}><span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{tr.name}&quot;</span><span className="text-[#abb2bf]">,</span></CodeLine>
              <CodeLine indent={2}><span className="text-[#e06c75]">course</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;{tr.desc}&quot;</span></CodeLine>
              <CodeLine indent={1}><span className="text-[#abb2bf]">&#125;</span></CodeLine>
            </div>
          ))}
          <CodeLine><span className="text-[#abb2bf]">]</span></CodeLine>
        </div>

        {/* 경력 */}
        <div className="mb-4">
          <CodeLine><span className="text-[#5c6370]">/* 경력 */</span></CodeLine>
          <CodeLine><span className="text-[#c8ff00]">const</span> <span className="text-[#61afef]">careers</span> <span className="text-[#abb2bf]">= [</span></CodeLine>
          {CAREERS.map((c, i) => (
            <CodeLine key={i} indent={1}>
              <span className="text-[#abb2bf]">&#123; </span>
              <span className="text-[#e06c75]">period</span><span className="text-[#abb2bf]">: </span>
              <span className="text-[#98c379]">&quot;{c.period}&quot;</span>
              <span className="text-[#abb2bf]">, </span>
              <span className="text-[#e06c75]">company</span><span className="text-[#abb2bf]">: </span>
              <span className="text-[#98c379]">&quot;{c.company}&quot;</span>
              <span className="text-[#abb2bf]"> &#125;</span>
              <Badge type={c.type} />
            </CodeLine>
          ))}
          <CodeLine><span className="text-[#abb2bf]">]</span></CodeLine>
        </div>
      </div>
    </SectionWrapper>
  );
}
