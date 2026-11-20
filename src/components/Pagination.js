import { el } from '../lib/dom.js';
import { Button } from './Button.js';
export function Pagination({ total, page = 1, pageSize = 5, onChange }) {
  const size = Math.max(1, pageSize);
  const count = Math.max(1, Math.ceil(total / size));
  const current = Math.max(1, Math.min(page, count));
  const numbers = [...new Set([1, current - 1, current, current + 1, count])].filter(n => n >= 1 && n <= count).sort((a, b) => a - b);
  const controls = [];
  numbers.forEach((n, i) => {
    if (i && n - numbers[i - 1] > 1) controls.push(el('span', { 'aria-hidden': 'true' }, '…'));
    controls.push(el('button', { type: 'button', className: 'page-number', 'aria-label': `${n}페이지`, 'aria-current': n === current ? 'page' : undefined, onClick: () => onChange?.(n) }, n));
  });
  return el('div', { className: 'pagination' }, el('span', { className: 'meta', role: 'status' }, total ? `총 ${total}개 중 ${(current - 1) * size + 1}–${Math.min(current * size, total)}` : '총 0개'),
    count > 1 ? el('nav', { 'aria-label': '페이지 이동' }, Button({ label: '이전', variant: 'ghost', disabled: current === 1, onClick: () => onChange?.(current - 1) }), controls,
      Button({ label: '다음', variant: 'ghost', disabled: current === count, onClick: () => onChange?.(current + 1) })) : null);
}
