import { el } from '../lib/dom.js';
export function ProjectTeachingHistory({ rows }) {
  if (!rows?.length) return null;
  // 기관은 상단 정보 상자에 모으고 강의별 기간은 이력에서 한 번씩 표시한다.
  return el('section', { className: 'project-teaching-history detail-record-section' }, el('h3', {}, '강의 이력'),
    rows.map(row => el('section', { className: 'teaching-institution' },
      el('header', { className: 'teaching-group-heading' }, el('h4', {}, row.institution), el('span', {}, row.role)),
      el('ul', { className: 'teaching-lessons' }, (row.classes || []).map(([period, school, lesson]) =>
        el('li', { className: 'detail-record' }, el('span', { className: 'detail-date' }, period),
          el('div', { className: 'detail-record-copy' }, el('strong', {}, school), el('p', {}, lesson))))))));
}
