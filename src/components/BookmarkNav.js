import { el } from '../lib/dom.js';
import { Icon } from './Icon.js';
export function BookmarkNav({ active = 'teaching', onChange }) {
  return el('nav', { className: 'bookmarks', 'aria-label': '포트폴리오 분야' },
    [['teaching', '코딩 강사', 'book'], ['modeling', '3D 모델링', 'cube']].map(([id, label, icon]) =>
      el('button', { className: 'bookmark', type: 'button', 'aria-pressed': String(active === id), onClick: () => onChange?.(id) }, Icon(icon, 18), label)));
}
