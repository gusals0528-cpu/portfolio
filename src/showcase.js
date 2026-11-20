import { ProjectDetails, projectDisplayTitle } from './components/ProjectDetails.js';
import { WorkCategory, workCategories } from './components/WorkCategory.js';
import { ProjectGallery } from './components/ProjectGallery.js';
import { WorkShowcase } from './components/WorkShowcase.js';
import { ServiceCards, ServicesView } from './components/Services.js';
import { el } from './lib/dom.js';
import { Button, Badge, Field, Tabs, BookmarkNav, PageHeader, SkillCard, ProjectCard, Pagination, SelectFilter, EmptyState, Notice, DetailPanel, ExperienceTable, ContactCard } from './components/index.js';
import { IntroHero } from './components/IntroHero.js';
import { Disclosure } from './components/Disclosure.js';
import { history as historyData } from './data/history.js';
import { skills, projects, experience, publicContactEmail } from './data/preview.js';

const app = document.querySelector('#app');
const labels = { home: '홈', services: '의뢰 가능한 작업', projects: '작업 사례', experience: '경력·이력' };
const validViews = ['home', 'services', 'projects', 'experience', 'controls', 'contact'];
let domain = 'teaching';
let section = new URLSearchParams(location.search).get('view') || 'home';

if (!validViews.includes(section)) section = 'home';

function showSkill(skill) {
  const related = projects.filter(project => project.skillIds.includes(skill.id));
  const items = [
    { id: 'lessons', label: '교육 내용', content: el('ul', {}, skill.lessons.map(text => el('li', {}, text))) },
    { id: 'tools', label: '도구·대상', content: el('p', {}, skill.tools) },
  ];
  if (related.length) items.push({ id: 'related', label: '관련 사례', content: el('ul', {}, related.map(project => el('li', {}, project.title))) });
  DetailPanel({ title: skill.title, description: skill.summary, content: Tabs({ label: '스킬 상세', items }) }).open();
}
function showProject(project) {
  if (project.children) {
    DetailPanel({ title: project.title, mode: 'modal', content: el('div', { className: 'project-collection' },
      project.children.map(item => el('section', { className: 'modeling-case' },
        el('header', { className: 'case-heading' }, el('h3', {}, projectDisplayTitle(item))), ProjectDetails(item)))) }).open();
    return;
  }
  DetailPanel({ title: projectDisplayTitle(project), mode: 'modal', content: ProjectDetails(project) }).open();
}

function navigate(view) { section = view; history.pushState(null, '', `?view=${view}`); render(); window.scrollTo(0, 0); }
function navigateToModeling() {
  section = 'projects';
  history.pushState(null, '', '?view=projects&category=modeling');
  render();
  requestAnimationFrame(() => {
    const heading = document.querySelector('#main .page-heading');
    if (heading) window.scrollTo({ top: window.scrollY + heading.getBoundingClientRect().top - 16, behavior: 'instant' });
  });
}
function homeView() {
  return el('div', { className: 'home-page' },
    IntroHero({ onExperience: () => navigate('experience'), onContact: () => navigate('contact') }),
    WorkShowcase({ projects, onProject: showProject, onAll: () => navigate('projects'), onModeling: navigateToModeling }),
    el('section', {}, el('div', { className: 'section-heading' }, el('h2', {}, '어떤 도움이 필요하신가요?')), ServiceCards({ onSelect: service => DetailPanel({ title: service.title, description: service.summary, content: el('div', {}, el('ul', {}, service.outputs.map(text => el('li', {}, text))), el('p', { className: 'muted' }, '작업 범위와 일정은 보유 자료를 확인한 뒤 협의합니다.')) }).open() })),
    skillsSection(),
    el('div', { className: 'career-projects' },
      Button({ label: '전체 프로젝트 보기', variant: 'secondary', icon: 'arrow', onClick: () => navigate('projects') })));
}
function skillsSection() {
  return el('section', { className: 'home-skills' }, PageHeader({ level: 2, title: '배움을 만드는 일곱 가지 도구', description: '교육 목적에 맞춰 기술을 연결하고, 직접 만드는 경험으로 확장합니다.' }),
    el('div', { className: 'skill-grid' }, skills.map((skill, index) => SkillCard({ ...skill, number: `0${index + 1}`, onClick: () => showSkill(skill) }))));
}
function projectsView() {
  const list = el('div', { className: 'project-grid' });
  const count = el('span', { className: 'meta', role: 'status' });
  const filters = el('div', { className: 'category-filters', role: 'group', 'aria-label': '작업 분야 필터' });
  const options = { all: '전체', ...workCategories };
  const update = value => {
    const filtered = projects.filter(project => value === 'all' || (project.categories || [project.category]).includes(value));
    count.textContent = `${filtered.length}개의 작업 사례`;
    list.replaceChildren(...filtered.map(project => ProjectCard({ ...project, onClick: () => showProject(project) })));
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === value)));
  };
  Object.entries(options).forEach(([value, label]) => {
    const total = value === 'all' ? projects.length : projects.filter(project => (project.categories || [project.category]).includes(value)).length;
    filters.append(el('button', { type: 'button', 'data-category': value, 'aria-pressed': 'false', onClick: () => update(value) }, `${label} ${total}`));
  });
  const requestedCategory = new URLSearchParams(location.search).get('category');
  update(requestedCategory && options[requestedCategory] ? requestedCategory : 'all');
  return el('div', {}, PageHeader({ eyebrow: '02 / PROJECTS', title: '모델링·강의·교안 제작과 전시', description: '작업 유형을 선택해 수행한 내용과 역할을 확인하세요.' }),
    el('div', { className: 'toolbar category-toolbar' }, filters, count), list);
}

function experienceView() {
  const list = values => el('ul', { className: 'history-list' }, values.map(text => el('li', {}, text)));
  return el('div', {}, PageHeader({ eyebrow: '03 / EXPERIENCE', title: '현장에서 쌓아 온 교육 경험', description: '전체 강의 경력을 한 페이지에서 확인하고, 실제 교육 사례를 함께 살펴보세요.', action: Badge(`${experience.length}개 경력`, 'brand') }),
    ExperienceTable({ rows: experience }),
    el('section', { className: 'career-projects' }, el('div', { className: 'section-heading' }, el('h2', {}, '교육·제작 프로젝트'), el('p', { className: 'muted' }, '강의 현장과 교구 제작·납품 사례를 함께 확인하세요.')),
      el('div', { className: 'project-grid' }, projects.map(project => ProjectCard({ ...project, onClick: () => showProject(project) })))),
    el('section', { className: 'more-history' }, el('div', { className: 'section-heading' }, el('h2', {}, '더 알아보기'), el('p', { className: 'muted' }, '학력과 자격, 수상 및 활동 이력을 펼쳐 확인할 수 있습니다.')),
      Disclosure({ title: '학력', meta: '2개', content: list(['2025 | 대학 기계공학전공 졸업', '2018 | 고등학교 과학중점반 졸업']) }),
      Disclosure({ title: '자격·전문교육', meta: '3개', content: list(['2021 | 3D프린터운용기능사 | 한국산업인력공단', '2020 | ITQ OA MASTER', '2019 | 3D모델링 전문가 과정 | JAC']) }),
      Disclosure({ title: '수상', meta: `${historyData.awards.length}개`, content: list(historyData.awards) }),
      Disclosure({ title: '교육·제작·전시 활동', meta: `${historyData.activities.length}개`, content: list(historyData.activities) })));
}
function controlsView() {
  const state = el('div', { 'aria-live': 'polite' });
  return el('div', {}, PageHeader({ eyebrow: 'FOUNDATIONS', title: '같은 언어로 만드는 화면', description: '색상, 버튼과 입력 요소의 기본·로딩·오류 상태를 확인하세요.' }),
    el('div', { className: 'swatches' }, ['#FF7F00', '#FFFFFF', '#FFF3E6', '#202020', '#595959'].map(color => { const swatch = el('span', { className: 'swatch-color' }); swatch.style.background = color; return el('span', { className: 'swatch' }, swatch, color); })),
    el('div', { className: 'specimen-grid' },
      el('section', { className: 'specimen' }, el('h2', {}, '버튼과 상태'), el('div', { className: 'button-row' },
        Button({ label: '주요 행동', icon: 'arrow', onClick: () => state.replaceChildren(Notice({ message: '버튼 클릭을 확인했습니다.', tone: 'success' })) }),
        Button({ label: '보조 행동', variant: 'secondary', onClick: () => state.replaceChildren(Notice({ message: '보조 행동을 선택했습니다.' })) }),
        Button({ label: '저장 중…', loading: true }), Button({ label: '사용 불가', disabled: true })),
        el('div', { className: 'badges', style: 'margin-top:24px' }, Badge('초안'), Badge('대표', 'brand'), Badge('공개', 'success'), Badge('확인 필요', 'error')), state),
      el('section', { className: 'specimen' }, el('h2', {}, '입력과 안내'),
        Field({ label: '자기소개', name: 'intro', value: 'AI와 코딩을 만드는 경험으로 연결합니다.', required: true, hint: '입력 동작을 확인하는 미리보기이며 서버에 저장되지 않습니다.' }),
        Field({ label: '문의 이메일', name: 'email', type: 'email', error: '공개할 이메일 주소를 입력해 주세요.' }))));
}
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scrollTopButton = el('button', {
  type: 'button', className: 'scroll-top', hidden: true, 'aria-label': '맨 위로', title: '맨 위로',
  onClick: () => {
    app.querySelector('.showcase-nav button')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  },
}, el('span', { 'aria-hidden': 'true' }, '↑'));
const updateScrollTop = () => { scrollTopButton.hidden = window.scrollY < 320; };
window.addEventListener('scroll', updateScrollTop, { passive: true });

let revealObserver;
function render() {
  revealObserver?.disconnect();
  const header = el('header', { className: 'site-header' }, el('div', { className: 'container header-row' },
    el('div', { className: 'wordmark' }, el('span', { className: 'monogram', 'aria-hidden': 'true' }, 'R'), el('span', {}, 'REEGLE | 김현민', el('small', {}, 'EDUCATION & MAKER'))),
    Button({ label: '문의하기', icon: 'mail', variant: 'secondary', onClick: () => navigate('contact') })));
  const nav = el('nav', { className: 'container showcase-nav', 'aria-label': '포트폴리오 메뉴' }, Object.entries(labels).map(([key, label]) => el('button', { type: 'button', 'aria-current': key === section ? 'page' : undefined, onClick: () => navigate(key) }, label)));
  const views = { home: homeView, services: () => ServicesView({ onContact: () => navigate('contact') }), projects: projectsView, experience: experienceView, controls: controlsView, contact: () => el('div', {}, PageHeader({ eyebrow: '04 / CONTACT', title: '강의·제작 문의', description: '코딩 강의와 3D 모델링 프로젝트를 함께 이야기합니다.' }), ContactCard({ email: publicContactEmail })) };
  const content = views[section]();
  app.replaceChildren(header, nav, el('main', { className: 'container', id: 'main' }, content), el('footer', { className: 'site-footer' }, el('div', { className: 'container' }, el('span', {}, 'REEGLE | 김현민 · 교육 콘텐츠 · 키트 설계 · 강의'), el('span', {}, '이력서는 이메일로 요청해 주세요.'))));
  app.append(scrollTopButton);
  updateScrollTop();
  if (section === 'home' && 'IntersectionObserver' in window && !reducedMotion.matches) {
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.1 });
    content.querySelectorAll('.work-heading, .work-tile, .section-heading, .service-card, .career-projects, .page-heading, .skill-card').forEach(node => {
      node.classList.add('will-reveal');
      revealObserver.observe(node);
    });
  }
}
window.addEventListener('popstate', () => { section = new URLSearchParams(location.search).get('view') || 'home';
if (!validViews.includes(section)) section = 'home'; render(); });
render();
