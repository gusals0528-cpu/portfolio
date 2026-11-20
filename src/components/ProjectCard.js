import { WorkCategory, workCategories } from './WorkCategory.js';
import { projectDescriptions } from '../data/project-descriptions.js';
import { el } from '../lib/dom.js';
import { Badge } from './Badge.js';
import { Icon } from './Icon.js';
export function ProjectCard({ id, title, institution, period, tags = [], category, categories, onClick }) {
  const root = el('article', { className: 'project-card' });
  // 연도가 별도로 제공되면 제목 앞의 같은 연도 표기는 생략한다.
  const prefix = title.match(/^(\d{4}(?:\s*[~～–-]\s*\d{4})?)\s+/);
  const normalized = value => (value || '').replace(/\s/g, '');
  const displayTitle = prefix && normalized(prefix[1]) === normalized(period) ? title.slice(prefix[0].length) : title;
  const types = [...new Set(categories || [category || 'teaching'])];
  const typeLabels = types.map(type => workCategories[type]);
  const uniqueTags = [...new Set(tags)].filter(tag => !typeLabels.includes(tag));
  const description = projectDescriptions[id]?.trim();
  root.append(el('div', { className: 'project-body' },
    el('div', { className: 'project-meta-row' },
      institution ? el('p', { className: 'institution' }, institution) : null,
      period ? el('p', { className: 'meta' }, period) : null),
    el('h3', {}, displayTitle),
    el('div', { className: 'badges project-tags' }, types.map(type => WorkCategory(type)), uniqueTags.map(tag => Badge(tag))),
    description ? el('p', { className: 'muted' }, description) : null,
    el('button', { className: 'text-button', type: 'button', onClick, 'aria-label': `${title} 자세히 보기` }, '프로젝트 보기', Icon('arrow', 16))));
  return root;
}
