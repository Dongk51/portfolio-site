import SectionWrapper from '../components/SectionWrapper';
import { PROJECTS } from '../data';

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" lineStart={181} lineCount={55}>
      <div className="pt-4">
        <p className="text-[#5c6370] text-sm font-mono mb-2">// 04. 참여 프로젝트</p>
        <p className="text-[#5c6370] text-xs font-mono mb-8">
          // 새 프로젝트 추가: src/data.js의 PROJECTS 배열에 객체를 추가하세요
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="group relative bg-[#161b29] border border-[#2a3050] rounded-lg p-5
                         hover:border-[#c8ff00]/50 transition-all duration-300
                         hover:shadow-lg hover:shadow-[#c8ff00]/5"
            >
              {/* 프로젝트 번호 */}
              <div className="absolute top-3 right-4 font-mono text-[10px] text-[#3a4060]">
                project_{String(idx + 1).padStart(2, '0')}
              </div>

              {/* 프로젝트명 */}
              <h3 className="font-mono font-bold text-white text-lg mb-1 group-hover:text-[#c8ff00] transition-colors">
                {proj.name}
              </h3>

              {/* 설명 */}
              <p className="text-[#6b7fa3] text-sm mb-4 leading-relaxed">
                {proj.desc}
              </p>

              {/* 메타 정보 */}
              <div className="space-y-1.5 mb-4 font-mono text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-[#e06c75] shrink-0">period</span>
                  <span className="text-[#5c6370]">:</span>
                  <span className="text-[#98c379]">&quot;{proj.period}&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#e06c75] shrink-0">members</span>
                  <span className="text-[#5c6370]">:</span>
                  <span className="text-[#98c379]">&quot;{proj.members}&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#e06c75] shrink-0">role</span>
                  <span className="text-[#5c6370] shrink-0]">:</span>
                  <span className="text-[#98c379]">&quot;{proj.role}&quot;</span>
                </div>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#c8ff00]/10 text-[#c8ff00]/70 border border-[#c8ff00]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 링크 버튼 */}
              <div className="flex items-center gap-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono
                             border border-[#2a3050] text-[#6b7fa3]
                             hover:border-[#abb2bf] hover:text-[#abb2bf] transition-colors"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                {proj.deploy && (
                  <a
                    href={proj.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono
                               border border-[#c8ff00]/40 text-[#c8ff00]
                               hover:bg-[#c8ff00]/10 transition-colors"
                  >
                    <LinkIcon />
                    배포 링크
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
