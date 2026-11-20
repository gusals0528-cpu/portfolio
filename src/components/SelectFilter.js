import { el, uid } from '../lib/dom.js';
export function SelectFilter({ label, options, value, onChange }) {
  const id = uid('filter');
  const select = el('select', { id, onChange: (event) => onChange?.(event.target.value) }, options.map(item => el('option', { value: item.value }, item.label)));
  if (value !== undefined) select.value = value;
  return el('div', { className: 'select-filter' }, el('label', { for: id }, label), select);
}
