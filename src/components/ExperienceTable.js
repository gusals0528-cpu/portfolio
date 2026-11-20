import { el } from '../lib/dom.js';
export function ExperienceTable({ rows }) {
  const labels = ['기간', '근무처', '직위', '담당업무'];
  const ongoing = row => row.status === '진행 중';
  const orderedRows = [...rows.filter(ongoing), ...rows.filter(row => !ongoing(row))];
  return el('div', { className: 'experience' }, el('table', {}, el('caption', { className: 'sr-only' }, '강의 경력'),
    el('thead', {}, el('tr', {}, labels.map(text => el('th', { scope: 'col' }, text)))),
    el('tbody', {}, orderedRows.map(row => el('tr', {}, ['period', 'institution', 'role', 'description'].map((key, index) =>
      el('td', { 'data-label': labels[index] }, row[key],
        key === 'period' && row.status ? el('span', { className: 'career-status' }, row.status) : null,
        key === 'period' && row.schedule ? el('small', { className: 'career-schedule' }, row.schedule) : null,
        key === 'description' && row.classes ? el('details', { className: 'career-classes' },
          el('summary', {}, `학교별 강의 보기 (${row.classes.length})`),
          el('ul', {}, row.classes.map(([period, school, lesson]) => el('li', {},
            el('small', {}, period), el('strong', {}, school), el('span', {}, lesson))))) : null)))))));
}
