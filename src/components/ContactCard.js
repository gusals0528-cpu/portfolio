import { el } from '../lib/dom.js';
import { Button } from './Button.js';
import { Notice } from './Notice.js';
export function ContactCard({ email, subject = '[강의·제작 문의] 김현민 포트폴리오' } = {}) {
  const status = el('div', { 'aria-live': 'polite' });
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
  const body = '교육 대상 및 인원(강의 문의 시):\r\n희망 일정 또는 납기:\r\n필요한 작업과 결과물:\r\n보유 자료나 장비(있는 경우):';
  return el('section', { className: 'contact-card' }, el('p', { className: 'eyebrow' }, 'LET’S CONNECT'), el('h2', {}, '함께할 프로젝트를 알려주세요.'),
    el('p', { className: 'muted' }, '희망 일정이나 납기, 필요한 작업과 결과물을 알려주세요. 강의 문의에는 교육 대상과 예상 인원을, 제작 문의에는 보유 자료나 장비가 있다면 함께 적어주세요.'),
    valid ? el('div', {}, el('p', { className: 'email-address' }, email), el('div', { className: 'button-row' },
      Button({ label: '이메일 보내기', icon: 'mail', href: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` }),
      Button({ label: '주소 복사', icon: 'copy', variant: 'secondary', onClick: async () => {
        try { await navigator.clipboard.writeText(email); status.replaceChildren(Notice({ message: '이메일 주소를 복사했습니다.', tone: 'success' })); }
        catch { status.replaceChildren(Notice({ message: '복사하지 못했습니다. 위 주소를 직접 선택해 복사해 주세요.', tone: 'error' })); }
      } }))) : Notice({ message: '문의 정보를 준비하고 있습니다.' }), status,
    el('p', { className: 'meta' }, '이력서는 이메일로 요청해 주세요.'));
}
