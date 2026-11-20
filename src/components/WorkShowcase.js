import { WorkCategory } from './WorkCategory.js';
import { el } from '../lib/dom.js';
import { Icon } from './Icon.js';
import { Button } from './Button.js';

// 홈은 분야 요약 그래픽을 유지하고 실제 사진은 상세 화면에서만 보여준다.
export function WorkShowcase({ projects, onProject, onAll, onModeling }) {
  const selections = [
    ['sprout-c-gyeonggi', 'cube', '3D 모델링 · 교구 납품', '수업에 필요한 교구를 설계합니다'],
    ['digital-sprout', 'drone', '로봇 · 드론 · 아두이노 · 마이크로비트', '기술을 다루는 수업을 진행합니다'],
    ['climate-academy', 'chart', '생성형 AI · 웹 제작', '바이브 코딩과 AI 기술도 수업할 수 있습니다'],
    ['diy-gif', 'chip', '제작 · 전시', '직접 만든 장치를 전시하여 검증합니다'],
  ];
  const cards = selections.map(([id, icon, label, subtitle], index) => {
    const project = projects.find(item => item.id === id);
    const visual = el('div', { className: `work-cover work-cover--${({ 'sprout-c-gyeonggi': 0, 'diy-gif': 1, 'digital-sprout': 2, 'climate-academy': 3 })[id]}` },
      el('div', { className: 'work-symbol', 'aria-hidden': 'true' }, Icon(icon, 88)));
    return el('button', { type: 'button', className: 'work-tile', onClick: () => index === 0 ? onModeling() : onProject(project), 'aria-label': `${project.title} 프로젝트 보기` },
      visual, el('div', { className: 'work-tile-copy' }, WorkCategory(project.categories || project.category), el('span', { className: 'eyebrow' }, label),
        el('h3', {}, subtitle), el('p', {}, index === 0 ? '디지털새싹 교구·부품 모델링 3건' : project.title), el('span', { className: 'work-link' }, '프로젝트 보기', Icon('arrow', 16))));
  });
  return el('section', { className: 'work-first' },
    el('div', { className: 'work-heading' }, el('div', {}, el('p', { className: 'eyebrow' }, 'REEGLE | 김현민 · SELECTED WORK'),
      el('h2', {}, '만들고, 가르치고, 그 사이를 연결합니다.'), el('p', { className: 'muted' }, '3D 모델링과 제작부터 코딩 교육까지, 프로젝트로 소개합니다.')),
      Button({ label: '전체 프로젝트 보기', variant: 'secondary', onClick: onAll })),
    el('div', { className: 'work-mosaic' }, cards));
}
