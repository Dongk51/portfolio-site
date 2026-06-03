import SectionWrapper from '../components/SectionWrapper';
import { INFO } from '../data';

function LaptopIllustration() {
  return (
    <div className="relative w-64 h-48 mx-auto lg:mx-0">
      {/* 화면 */}
      <div className="absolute top-0 left-4 right-4 h-36 bg-[#161b29] rounded-t-lg border-2 border-[#2a3050] overflow-hidden">
        {/* 화면 내 코드 */}
        <div className="p-3 font-mono text-[10px] leading-5 space-y-0.5">
          <div><span className="text-[#c8ff00]">const</span> <span className="text-[#61afef]">developer</span> <span className="text-[#abb2bf]">= &#123;</span></div>
          <div className="pl-4"><span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;김동민&quot;</span><span className="text-[#abb2bf]">,</span></div>
          <div className="pl-4"><span className="text-[#e06c75]">role</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;FullStack&quot;</span><span className="text-[#abb2bf]">,</span></div>
          <div className="pl-4"><span className="text-[#e06c75]">passion</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;달리는 개발자&quot;</span></div>
          <div><span className="text-[#abb2bf]">&#125;</span></div>
          <div className="mt-1">
            <span className="inline-block w-1.5 h-4 bg-[#c8ff00] animate-pulse align-middle" />
          </div>
        </div>
      </div>
      {/* 힌지 */}
      <div className="absolute bottom-6 left-0 right-0 h-2 bg-[#2a3050] rounded-sm" />
      {/* 베이스 */}
      <div className="absolute bottom-0 left-2 right-2 h-6 bg-[#1e2436] rounded-b-lg border border-[#2a3050]">
        {/* 트랙패드 */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2.5 border border-[#2a3050] rounded-sm" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <SectionWrapper id="hero" lineStart={1} lineCount={45}>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 pt-8">
        {/* 텍스트 */}
        <div className="flex-1">
          {/* 코드 코멘트 */}
          <p className="text-[#5c6370] text-sm mb-6">// 개발자 포트폴리오</p>

          {/* 메인 타이틀 */}
          <h1 className="font-mono font-bold leading-tight mb-4">
            <span className="text-[#c8ff00] text-4xl sm:text-5xl lg:text-6xl block">
              &#123;
            </span>
            <span className="text-white text-4xl sm:text-5xl lg:text-6xl block pl-6">
              달리는 개발자;
            </span>
            <span className="text-[#c8ff00] text-4xl sm:text-5xl lg:text-6xl block">
              &#125;
            </span>
          </h1>

          {/* 서브텍스트 */}
          <p className="text-[#6b7fa3] text-lg mb-8">
            <span className="text-[#e06c75]">김동민</span>의 포트폴리오
          </p>

          {/* 연락처 */}
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-3">
              <span className="text-[#5c6370]">// contact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#e06c75]">email</span>
              <span className="text-[#abb2bf]">:</span>
              <a
                href={`mailto:${INFO.email}`}
                className="text-[#98c379] hover:text-[#c8ff00] transition-colors"
              >
                {INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#e06c75]">github</span>
              <span className="text-[#abb2bf]">:</span>
              <a
                href={INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98c379] hover:text-[#c8ff00] transition-colors"
              >
                {INFO.github.replace('https://', '')}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#e06c75]">phone</span>
              <span className="text-[#abb2bf]">:</span>
              <span className="text-[#98c379]">{INFO.phone}</span>
            </div>
          </div>

          {/* 스크롤 힌트 */}
          <div className="mt-12 flex items-center gap-2 text-[#5c6370] text-xs animate-bounce">
            <span>↓</span>
            <span>scroll to explore</span>
          </div>
        </div>

        {/* 노트북 일러스트 */}
        <div className="shrink-0">
          <LaptopIllustration />
        </div>
      </div>
    </SectionWrapper>
  );
}
