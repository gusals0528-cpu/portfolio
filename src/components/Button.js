import { el, safeURL } from '../lib/dom.js';
import { Icon } from './Icon.js';
export function Button({ label, variant = 'primary', icon, onClick, disabled = false, loading = false, href, size = 'normal' }) {
  const url = safeURL(href);
  const node = el(url ? 'a' : 'button', {
    className: `button button--${variant} button--${size}`, href: url,
    type: url ? undefined : 'button', disabled: !url && (disabled || loading),
    'aria-disabled': disabled || loading ? 'true' : undefined, 'aria-busy': loading ? 'true' : undefined,
    onClick: (event) => { if (disabled || loading) { event.preventDefault(); return; } onClick?.(event); },
  }, loading ? el('span', { className: 'spinner', 'aria-hidden': 'true' }) : icon ? Icon(icon) : null, label);
  if (url && (disabled || loading)) node.tabIndex = -1;
  return node;
}
export function IconButton({ label, icon, onClick, disabled = false }) {
  return el('button', { className: 'icon-button', type: 'button', 'aria-label': label, title: label, onClick, disabled }, Icon(icon));
}
