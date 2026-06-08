import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../data';

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
          {SKILLS.map((group) => (
            <div key={group.category}>
              <div className="font-mono text-sm mb-2">
                <span className="text-[#abb2bf] font-semibold">{group.category}</span>
                <span className="text-[#abb2bf]">: [</span>
              </div>

              <div className="flex flex-wrap gap-2 pl-4 mb-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-[#abb2bf40] text-[#abb2bf] bg-[#abb2bf10] transition-colors duration-150 hover:border-[#c8ff00] hover:text-[#c8ff00] cursor-default"
                  >
                    &quot;{item}&quot;
                  </span>
                ))}
              </div>

              <div className="font-mono text-sm text-[#abb2bf]">],</div>
            </div>
          ))}
        </div>

        <div className="font-mono text-sm text-[#abb2bf] mt-4">&#125;</div>
      </div>
    </SectionWrapper>
  );
}
