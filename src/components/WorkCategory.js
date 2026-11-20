import { el } from '../lib/dom.js';
export const workCategories = { modeling: '3D 모델링', teaching: '강의', curriculum: '교안 제작', workbook: '워크북 제작', exhibition: '전시' };
export function WorkCategory(category = 'teaching') {
  if (Array.isArray(category)) return el('span', { className: 'work-category-group' }, category.map(value => WorkCategory(value)));
  return el('span', { className: `work-category work-category--${category}` }, workCategories[category] || '프로젝트');
}
