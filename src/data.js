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
  { category: '협업툴', items: ['GitHub', 'Notion', 'Figma', 'Colab', 'Jupyter'] },
  { category: '개발도구', items: ['VS Code', 'Eclipse', 'IntelliJ IDEA', 'DBeaver', 'SQL Developer', 'Postman'] },
];

export const ABOUT_SECTIONS = [
  {
    id: 'ceo',
    title: '자영업을 통한 CEO 이해',
    content: '',
  },
  {
    id: 'project',
    title: '개발원 실전프로젝트 (AI Modeling)',
    content: '',
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
];

export const NAV_SECTIONS = [
  { id: 'hero', label: 'portfolio.jsx', icon: '📄' },
  { id: 'career', label: 'career.json', icon: '📋' },
  { id: 'skills', label: 'skills.js', icon: '⚡' },
  { id: 'about', label: 'about.md', icon: '📝' },
  { id: 'projects', label: 'projects.jsx', icon: '🚀' },
];
