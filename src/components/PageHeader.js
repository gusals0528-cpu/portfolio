import { el } from '../lib/dom.js';
export function PageHeader({ eyebrow, title, description, action, level = 1 }) {
  return el('header', { className: 'page-heading' }, el('div', {},
    eyebrow ? el('p', { className: 'eyebrow' }, eyebrow) : null,
    el(level === 2 ? 'h2' : 'h1', {}, title), description ? el('p', { className: 'muted' }, description) : null), action);
}
