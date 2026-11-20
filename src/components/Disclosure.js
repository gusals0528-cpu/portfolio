import { el } from '../lib/dom.js';
// 기본 상태는 접힘이며 브라우저 기본 키보드 조작을 지원한다.
export function Disclosure({ title, meta, content }) {
  return el('details', { className: 'disclosure' },
    el('summary', {}, el('span', {}, title), meta ? el('span', { className: 'meta' }, meta) : null),
    el('div', { className: 'disclosure-body' }, content));
}
