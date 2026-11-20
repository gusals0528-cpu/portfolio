import { el } from '../lib/dom.js';
import { Icon } from './Icon.js';
export function EmptyState({ title, description, action, icon = 'folder' }) {
  return el('section', { className: 'empty-state' }, Icon(icon, 32), el('h2', {}, title), el('p', { className: 'muted' }, description), action);
}
