import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../data';

const CATEGORY_COLORS = {
  DB: '#e06c75',
  Language: '#c8ff00',
  Framework: '#61afef',
  Server: '#e5c07b',
  Collaboration: '#c678dd',
  'AI / ML': '#56b6c2',
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" lineStart={96} lineCount={40}>
      <div className="pt-4">
        <p className="text-[#5c6370] text-sm font-mono mb-6">// 02. 스킬 및 역량</p>

        <div className="font-mono text-sm leading-7 mb-6">
          <span className="text-[#c8ff00]">const</span>
          {' '}
          <span className="text-[#61afef]">skills</span>
          {' '}
          <span className="text-[#abb2bf]">= &#123;</span>
        </div>

        <div className="space-y-6 pl-4 md:pl-8">
          {SKILLS.map((group) => {
            const color = CATEGORY_COLORS[group.category] || '#abb2bf';
            return (
              <div key={group.category}>
                {/* 카테고리 키 */}
                <div className="font-mono text-sm mb-2">
                  <span style={{ color }} className="font-semibold">{group.category}</span>
                  <span className="text-[#abb2bf]">: [</span>
                </div>

                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 pl-4 mb-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-150 hover:border-[#c8ff00] hover:text-[#c8ff00] cursor-default"
                      style={{
                        borderColor: `${color}40`,
                        color: color,
                        backgroundColor: `${color}10`,
                      }}
                    >
                      &quot;{item}&quot;
                    </span>
                  ))}
                </div>

                <div className="font-mono text-sm text-[#abb2bf]">],</div>
              </div>
            );
          })}
        </div>

        <div className="font-mono text-sm text-[#abb2bf] mt-4">&#125;</div>
      </div>
    </SectionWrapper>
  );
}
