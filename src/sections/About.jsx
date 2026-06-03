import SectionWrapper from '../components/SectionWrapper';
import { ABOUT_SECTIONS } from '../data';

export default function About() {
  return (
    <SectionWrapper id="about" lineStart={136} lineCount={45}>
      <div className="pt-4">
        <p className="text-[#5c6370] text-sm font-mono mb-6">// 03. 자기소개서</p>

        <div className="space-y-8">
          {ABOUT_SECTIONS.map((sec, idx) => (
            <div key={sec.id} className="relative">
              {/* 마크다운 스타일 헤딩 */}
              <div className="font-mono text-sm mb-4">
                <span className="text-[#c8ff00]">##</span>
                {' '}
                <span className="text-white font-semibold text-base">{sec.title}</span>
              </div>

              {/* 본문 - 비어있으면 플레이스홀더 */}
              <div
                className={`
                  font-mono text-sm leading-7 min-h-[100px] p-4 rounded-lg border
                  border-[#2a3050] bg-[#161b29]
                  ${!sec.content ? 'border-dashed' : ''}
                `}
              >
                {sec.content ? (
                  <p className="text-[#abb2bf] whitespace-pre-wrap">{sec.content}</p>
                ) : (
                  <p className="text-[#3a4060] italic">
                    <span className="text-[#5c6370]">{'/* '}</span>
                    내용을 입력해 주세요 — data.js의 ABOUT_SECTIONS[{idx}].content를 수정하세요
                    <span className="text-[#5c6370]">{' */'}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
