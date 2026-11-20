import { el, uid } from '../lib/dom.js';
import { IconButton } from './Button.js';
export function DetailPanel({ title, description, content, mode = 'drawer', onClose }) {
  const id = uid('dialog');
  const dialog = el('dialog', { className: `detail-panel detail-panel--${mode}`, 'aria-labelledby': id });
  let opener;
  let previousOverflow;
  const close = () => dialog.close();
  dialog.append(el('div', { className: 'panel-heading' }, el('div', {}, el('p', { className: 'eyebrow' }, 'DETAIL'), el('h2', { id }, title)), IconButton({ label: '상세 닫기', icon: 'close', onClick: close })),
    el('div', { className: 'panel-body' }, description ? el('p', { className: 'muted' }, description) : null, content));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close(); } });
  dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; dialog.remove(); opener?.focus(); onClose?.(); }, { once: true });
  return {
    open() {
      opener = document.activeElement; previousOverflow = document.body.style.overflow;
      document.body.append(dialog); dialog.showModal(); document.body.style.overflow = 'hidden';
    }, close,
  };
}
