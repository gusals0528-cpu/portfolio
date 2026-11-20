import { el } from '../lib/dom.js';
import { Icon } from './Icon.js';
export function SkillCard({ title, summary, icon, number, onClick }) {
  return el('button', { type: 'button', className: 'skill-card', onClick, 'aria-haspopup': 'dialog' },
    el('span', { className: 'skill-top' }, el('span', { className: 'skill-icon' }, Icon(icon, 28)), el('span', { className: 'card-number', 'aria-hidden': 'true' }, number)),
    el('strong', {}, title), el('span', { className: 'muted' }, summary),
    el('span', { className: 'card-link' }, '자세히 보기', Icon('arrow', 16)));
}
