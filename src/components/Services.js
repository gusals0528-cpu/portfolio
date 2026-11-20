import { el } from '../lib/dom.js';
import { Button } from './Button.js';
import { PageHeader } from './PageHeader.js';
import { Disclosure } from './Disclosure.js';

export const services = [
  { title: '교육 콘텐츠 개발', need: '키트는 있는데 교안이 없어요', summary: '보유한 제품과 교육 목표를 바탕으로 수업의 흐름과 실습 자료를 만듭니다.', outputs: ['차시별 커리큘럼', 'PPT 교안', '실습 안내서·강사용 자료'] },
  { title: '교육용 키트 설계·제작', need: '교안은 있는데 실습 키트가 없어요', summary: '3D프린팅을 고려한 모델링으로 교육용 부품과 시제품을 설계합니다.', outputs: ['3D 모델링', '출력·조립 검토', '시제품 및 구조 개선'] },
  { title: '강의·실습 운영', need: '프로그램은 있는데 강사가 필요해요', summary: '대상과 수업 목적에 맞춰 기술의 원리를 설명하고 제작과 발표를 지도합니다.', outputs: ['초·중·고 실습형 강의', '시민 교육', '강사 연수·프로젝트 지도'] },
  { title: '교육 프로그램 통합 개발', need: '기획부터 함께 만들고 싶어요', summary: '교육 주제를 중심으로 키트, 교안, 실습과 강의를 연결합니다.', outputs: ['요구사항과 교육 목표 정리', '교구·콘텐츠 연계', '실습 과정 구성'] },
];
export function ServiceCards({ onSelect }) {
  return el('div', { className: 'service-grid' }, services.map((service, index) => el('article', { className: 'service-card' },
    el('p', { className: 'eyebrow' }, `0${index + 1} / ${service.title}`), el('h3', {}, service.need), el('p', { className: 'muted' }, service.summary),
    Button({ label: '작업 범위 보기', variant: 'ghost', icon: 'arrow', onClick: () => onSelect(service) }))));
}
export function ServicesView({ onContact }) {
  return el('div', {}, PageHeader({ eyebrow: '01 / SERVICES', title: '교육에 필요한 일을, 필요한 만큼', description: '현재 갖고 있는 자료와 목표를 바탕으로 작업 범위를 함께 정합니다.' }),
    el('div', { className: 'service-grid' }, services.map(service => el('section', { className: 'service-card' }, el('h2', {}, service.title), el('p', { className: 'muted' }, service.summary), el('ul', {}, service.outputs.map(text => el('li', {}, text))), Button({ label: '이 작업 문의하기', variant: 'secondary', onClick: onContact })))),
    el('section', { className: 'more-history service-support' }, el('h2', {}, '기존 자료가 있어도 함께할 수 있습니다'),
      Disclosure({ title: '기존 교안이나 키트를 개선하고 싶어요', content: el('p', {}, '교육 대상에 맞는 난이도 조정, 신규 차시 구성, 실습 안내 개선, 출력 부품의 구조 수정을 협의합니다.') }),
      Disclosure({ title: '여러 기술을 연결한 수업이 필요해요', content: el('div', {},
        el('p', {}, '수업에서 다루고 싶은 내용과 전체 운영 시간을 바탕으로 차시 수와 순서, 이론과 실습에 배정할 시간을 함께 정합니다. 짧은 수업은 핵심 개념과 한 가지 실습에 집중하고, 여러 차시로 운영할 때는 기초 실습부터 결과물 제작과 개선까지 단계적으로 구성할 수 있습니다.'),
        el('p', {}, 'AI·센서·데이터 분석·3D프린팅 중 어떤 기술을 사용할지는 교육 목표, 학습자의 수준, 보유 장비에 맞춰 조정합니다. 예를 들어 센서로 모은 데이터를 시각화하는 실습을 먼저 진행하고, 시간이 더 확보되면 센서를 담는 케이스를 3D프린팅으로 제작하는 활동을 이어갈 수 있습니다. 각 기술을 쓰는 이유를 학생이 이해하고 결과물에 적용할 수 있도록 실습 난이도와 분량을 세심하게 조정합니다.')) })),
    el('section', { className: 'more-history service-workflow' }, el('h2', {}, '협업 진행 과정'), el('p', { className: 'workflow' }, '상담 → 요구사항 협의 → 견적·일정 → 제작·진행 → 검수·전달'), el('p', { className: 'muted' }, '자료와 일정, 구현 난이도를 확인한 뒤 수행 범위와 결과물을 확정합니다.')));
}
