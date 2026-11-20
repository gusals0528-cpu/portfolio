import { el } from '../lib/dom.js';
import { Icon } from './Icon.js';
export function LandingVisual() {
  return el('div', { className: 'landing-visual', 'aria-label': '키트 설계, 교안 제작, 강의 운영으로 이어지는 작업 분야' },
    el('div', { className: 'visual-orbit', 'aria-hidden': 'true' }),
    el('div', { className: 'visual-center', 'aria-hidden': 'true' }, Icon('cube', 100)),
    ...[['cube', '3D 키트 설계', '아이디어를 형태로'], ['book', '교안 제작', '경험을 배움으로'], ['chip', '강의 운영', '배움을 현장으로']].map(([icon, title, text], i) =>
      el('div', { className: `visual-card visual-card--${i}` }, Icon(icon, 28), el('strong', {}, title), el('span', {}, text))),
    el('span', { className: 'visual-caption' }, 'DESIGN · MAKE · TEACH'));
}
