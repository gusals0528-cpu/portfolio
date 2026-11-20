import { el, uid } from '../lib/dom.js';
export function Field({ label, name, value = '', type = 'text', multiline = false, required = false, hint = '', error = '', onInput }) {
  const id = uid('field');
  const control = el(multiline ? 'textarea' : 'input', {
    id, name, type: multiline ? undefined : type, value, required,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error || hint ? `${id}-help` : undefined,
    onInput: (event) => onInput?.(event.target.value),
  });
  return el('div', { className: `field ${error ? 'field--error' : ''}` },
    el('label', { for: id }, label, required ? el('span', { className: 'required' }, '필수') : null), control,
    error || hint ? el('small', { id: `${id}-help` }, error || hint) : null);
}
