import { el } from '../lib/dom.js';
export function Notice({ message, tone = 'info' }) {
  return el('div', { className: `notice notice--${tone}`, role: tone === 'error' ? 'alert' : 'status' }, message);
}
