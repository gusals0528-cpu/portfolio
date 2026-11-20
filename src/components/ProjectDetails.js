import { Icon } from './Icon.js';
import { ProjectTeachingHistory } from './ProjectTeachingHistory.js';
import { el } from '../lib/dom.js';
import { Badge } from './Badge.js';
import { WorkCategory, workCategories } from './WorkCategory.js';
import { ProjectGallery } from './ProjectGallery.js';
import { projectDescriptions } from '../data/project-descriptions.js';
export function projectDisplayTitle(project) {
  const prefix = project.title.match(/^(\d{4}(?:\s*[~～–-]\s*\d{4})?)\s+/);
  return prefix && prefix[1].replace(/\s/g, '') === (project.period || '').replace(/\s/g, '')
    ? project.title.slice(prefix[0].length) : project.title;
}
export function ProjectDetails(project) {
  const categories = [...new Set(project.categories || [project.category || 'teaching'])];
  const labels = categories.map(value => workCategories[value]);
  const tags = [...new Set(project.tags || [])].filter(tag => !labels.includes(tag));
  const description = projectDescriptions[project.id]?.trim();
  const institutions = project.careerRows?.length
    ? [...new Set(project.careerRows.map(row => row.institution))]
    : project.institution ? [project.institution.replace(/^주관기관\s*/, '')] : [];
  const isTeaching = categories.includes('teaching');
  const institutionLabel = isTeaching ? '주관기관' : categories.includes('exhibition') ? '참여 행사' : '주관기관';
  return el('div', { className: 'project-detail-content detail-layout-b' },
    el('div', { className: 'project-detail-overview' },
      description ? el('p', { className: 'project-detail-description' }, description) : null,
      el('div', { className: 'badges project-tags' }, categories.map(WorkCategory), tags.map(tag => Badge(tag)))),
    institutions.length ? el('section', { className: 'detail-institution-box' },
      el('h3', {}, Icon(categories.includes('exhibition') ? 'fireworks' : 'institution', 26), el('span', {}, institutionLabel)), el('ul', {}, institutions.map(name => el('li', {}, name)))) : null,
    project.workRows?.length ? el('section', { className: 'detail-record-section' },
      el('h3', {}, '작업 이력'),
      project.workRows.map(row => el('div', { className: 'detail-record' },
        el('span', { className: 'detail-date' }, row.period),
        el('div', { className: 'detail-record-copy' },
          el('strong', {}, row.institution),
          el('p', {}, `${row.title} · ${row.role}`)))))
      : project.careerRows?.length ? ProjectTeachingHistory({ rows: project.careerRows })
      : project.period ? el('section', { className: 'detail-record-section' },
        el('h3', {}, isTeaching ? '강의 이력' : '작업 이력'),
        el('div', { className: 'detail-record' }, el('span', { className: 'detail-date' }, project.period),
          el('div', { className: 'detail-record-copy' }, el('strong', {}, projectDisplayTitle(project)),
            project.role ? el('p', {}, project.role) : null))) : null,
    ProjectGallery({ projectId: project.id, title: project.title }));
}
