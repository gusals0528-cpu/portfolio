import { el } from '../lib/dom.js';
import { Button } from './Button.js';
export function IntroHero({ onExperience, onContact }) {
  return el('section', { className: 'intro-story' },
    el('div', { className: 'intro-story-header' },
      el('div', {}, el('p', { className: 'eyebrow' }, 'EDUCATION & MAKER'),
        el('h1', {}, '교육에 필요한 것을,', el('br'), '필요한 만큼 만듭니다.'),
        el('p', { className: 'intro-name' }, '제작과 교육을 연결하는 김현민입니다.')),
      el('div', { className: 'intro-portrait' },
        el('img', { src: new URL('../assets/hyunmin-kim.jpg', import.meta.url).href, alt: '김현민', decoding: 'async' }))),
    el('div', { className: 'intro-roles' },
      el('div', {}, el('h2', {}, '코딩·메이커 교육 강사'),
        el('p', { className: 'muted' }, '초·중·고 학생, 시민, 강사를 대상으로 코딩·생성형 AI·아두이노·드론 실습을 진행합니다. 학습자 수준과 수업 시간에 맞춰 차시와 교안을 설계하고, 학생들이 직접 만든 결과물을 발표할 수 있도록 지도합니다.')),
      el('div', {}, el('h2', {}, '3D 모델링·개발'),
        el('p', { className: 'muted' }, '3D프린팅과 조립을 고려해 교육용 교구와 부품을 설계하고 시제품을 제작합니다. 센서 데이터를 보여주는 대시보드나 실습용 웹페이지도 사용 목적에 맞춰 구현합니다.'))),
    el('div', { className: 'button-row' },
      Button({ label: '전체 경력 확인', variant: 'secondary', onClick: onExperience }),
      Button({ label: '이메일 문의', variant: 'secondary', onClick: onContact })));
}
