import { el, uid } from '../lib/dom.js';
export function Tabs({ label, items, initial = items[0]?.id, onChange }) {
  const id = uid('tabs');
  const list = el('div', { className: 'tabs', role: 'tablist', 'aria-label': label });
  const panels = el('div', { className: 'tab-panels' });
  const root = el('div', {}, list, panels);
  const records = items.map((item, index) => {
    const button = el('button', { type: 'button', role: 'tab', id: `${id}-tab-${index}`, 'aria-controls': `${id}-panel-${index}`, onClick: () => select(item.id) }, item.label);
    const panel = el('section', { role: 'tabpanel', id: `${id}-panel-${index}`, 'aria-labelledby': button.id, tabindex: '0' }, typeof item.content === 'function' ? item.content() : item.content);
    list.append(button); panels.append(panel);
    return { item, button, panel };
  });
  function select(value, focus = false) {
    for (const record of records) {
      const active = record.item.id === value;
      record.button.setAttribute('aria-selected', String(active));
      record.button.tabIndex = active ? 0 : -1;
      record.panel.hidden = !active;
      if (active && focus) record.button.focus();
    }
    onChange?.(value);
  }
  list.addEventListener('keydown', (event) => {
    const index = records.findIndex(({ button }) => button === document.activeElement);
    if (index < 0) return;
    const next = { ArrowRight: (index + 1) % items.length, ArrowLeft: (index - 1 + items.length) % items.length, Home: 0, End: items.length - 1 }[event.key];
    if (next !== undefined) { event.preventDefault(); select(items[next].id, true); }
  });
  select(items.some(item => item.id === initial) ? initial : items[0]?.id);
  return root;
}
