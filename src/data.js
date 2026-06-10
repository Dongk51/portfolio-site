export const INFO = {
  name: '김동민',
  nameEn: 'KIM DONG MIN',
  tagline: '달리는 개발자',
  birth: '1992.03.21',
  phone: '010-6563-6987',
  email: 'dongk6987@gmail.com',
  github: 'https://github.com/Dongk51',
};

export const EDUCATION = [
  { date: '2011.03', name: '전북 기계공업고등학교', type: '학력' },
];

export const TRAINING = [
  {
    period: '2025.04 - 2025.11',
    name: '스마트인재개발원',
    desc: 'AI 기반 서비스모델 개발과정',
    type: '교육',
  },
];

export const CAREERS = [
  { period: '2026.03 - 2026.07', company: '84컴퍼니', type: '개발' },
  { period: '2019.11 - 2025.02', company: '자영업 음식점', type: '비개발' },
  { period: '2018.06 - 2019.07', company: '대명전선(주)', type: '비개발' },
  { period: '2016.09 - 2018.04', company: '우산산업(주)', type: '비개발' },
  { period: '2014.06 - 2015.04', company: '(주)에스텍시스템', type: '비개발' },
];

export const SKILLS = [
  { category: 'DB', items: ['Oracle', 'MySQL', 'PostgreSQL'] },
  { category: '언어', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL'] },
  { category: '프레임워크', items: ['React + Vite', 'Next.js', 'Express.js', 'FastAPI', 'Spring Boot', 'Tailwind CSS'] },
  { category: '서버', items: ['Nginx', 'Node.js', 'Supabase', 'Docker', 'Docker Compose', 'Apache Tomcat'] },
  { category: 'AI / ML', items: ['LLM', 'VLM', 'LoRA 파인튜닝', 'Gemini API'] },
  { category: '협업툴', items: ['GitHub', 'Notion', 'Figma', 'Colab', 'Jupyter', 'Claude Code'] },
  { category: '개발도구', items: ['VS Code', 'Eclipse', 'IntelliJ IDEA', 'DBeaver', 'SQL Developer', 'Postman', 'Chrome Extension'] },
];

export const ABOUT_SECTIONS = [
  {
    id: 'ceo',
    title: '자영업을 통한 CEO 이해',
    content: '프로그래밍을 배우기전에 어머니와 함께 음식점을 운영 하였었습니다. 자영업을 하기 전에는 항상 직원의 입장에서 회사를 다녀봤었는데 자영업 해봄으로써 사장님의 입장에서 가게 운영을 위해서 바라 볼 수 있는 시각이 생겼던 경험이여서 좋았던 시간이었던거 같습니다.',
  },
  {
    id: 'project',
    title: '개발원 실전프로젝트 (AI Modeling)',
    content: '개발원 핵심 프로젝트를 진행시 AI Modelingd을 담당했었습니다. Gemini API키를 활용하여 사용자가 원하는 페르소라 구축을 위한 모델과 메타프롬프팅을 추가로 활용하여 페르소나의 얼굴을 유지한채 다른 이미지 생성모델을 구현하였습니다. 추가로 답글 자동 생성 모델을 구현을 위해 허깅페이스에 등록되어 있는 beomi/Llama-3-Open-Ko-8B의 모델을 활용하여 타겟 모듈을 조절하며 학습을 진행 해봤습니다. 이후 답글 자동 생성 모델은 Gemini API로 구현을 활용하여 프로젝트를 진행 하였습니다.',
  },
    {
    id: 'project',
    title: '광주청년일자리드림 경험',
    content: '광주광역시 광주청년일자리드림 지원사업을 통해 현지 스타트업에서 5개월간 인턴십을 수행했습니다. 비개발 1인 기업 대표와 함께 바이브 코딩 방식으로 네이버 블로그 자동화 글쓰기 프로그램을 처음부터 개발했습니다. 부트캠프에서 다루지 않았던 기술 스택과 배포 방식을 직접 선택하고 적용하며 실무 1인 개발 경험을 쌓았고, 실사용자 대상 판매 및 배포 단계까지 함께 진행했습니다.',
  },
];


export const PROJECTS = [
  {
    id: 'selfstar',
    name: 'SELFSTAR',
    desc: 'LLM 기반 나만의 인플루언서 생성',
    period: '2025.09.30 - 2025.11.06',
    members: '3인',
    role: 'Modeling / Backend',
    tags: ['LLM', 'Python', 'FastAPI'],
    github: 'https://github.com/chani337/selfstar.git',
    deploy: null,
  },
  {
    id: 'gropur',
    name: 'GroPur',
    desc: 'SNS 인플루언서 공동구매 감성분석 추천',
    period: '부트캠프 프로젝트',
    members: '팀 프로젝트',
    role: 'Backend',
    tags: ['감성분석', 'Python', 'Backend'],
    github: 'https://github.com/2025-SMHRD-IS-LangIntelligence-1/GroPur.git',
    deploy: null,
  },
  {
    id: 'sojang',
    name: '소장AI',
    desc: '소상공인 AI 업무 도우미',
    period: '2026.06',
    members: '1인 (개인 프로젝트)',
    role: 'Full Stack',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Dongk51/sojang-ai.git',
    deploy: 'https://sojang-ai.vercel.app',
  },
    {
    id: 'blog-maset',
    name: '블로그마스터',
    desc: '네이버 블로그 게시글 자동화 프로그램',
    period: '2026.03',
    members: '1인 (개인 프로젝트)',
    role: 'Full Stack',
    tags: ['Next.js', 'Express.js', 'Supabase', 'Gemini API', 'Chrome Extension', 'Puppeteer', 'Node.js'],
    github: 'https://github.com/Dongk51/blog-master.git',
    deploy: 'https://frontend-84company.vercel.app',
  },
];

export const NAV_SECTIONS = [
  { id: 'hero', label: 'portfolio.jsx', icon: '📄' },
  { id: 'career', label: 'career.json', icon: '📋' },
  { id: 'skills', label: 'skills.js', icon: '⚡' },
  { id: 'about', label: 'about.md', icon: '📝' },
  { id: 'projects', label: 'projects.jsx', icon: '🚀' },
];
