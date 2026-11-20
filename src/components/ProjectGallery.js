import { el } from '../lib/dom.js';
export function ProjectGallery({ projectId, title }) {
  const gallery = el('section', { className: 'project-gallery', 'aria-label': `${title} 사진` });
  let viewer;
  function openViewer(images, start) {
    let index = start;
    const host = gallery.closest('dialog') || document.body;
    const image = el('img', { alt: '' });
    const caption = el('p', { className: 'gallery-viewer-caption' });
    const count = el('span', { className: 'gallery-viewer-count' });
    const previous = el('button', { type: 'button', className: 'gallery-viewer-nav', 'aria-label': '이전 사진', onClick: () => show(index - 1) }, '‹');
    const next = el('button', { type: 'button', className: 'gallery-viewer-nav', 'aria-label': '다음 사진', onClick: () => show(index + 1) }, '›');
    const close = el('button', { type: 'button', className: 'gallery-viewer-close', 'aria-label': '사진 닫기', onClick: dismiss }, '×');
    const opener = document.activeElement;
    let startX;
    function show(value) {
      index = (value + images.length) % images.length;
      image.src = images[index].url;
      image.alt = `${title} · ${images[index].caption}`;
      caption.textContent = images[index].caption;
      count.textContent = `${index + 1} / ${images.length}`;
      previous.hidden = next.hidden = images.length < 2;
    }
    function onKey(event) {
      if (event.key === 'Escape') { event.stopPropagation(); dismiss(); }
      if (event.key === 'ArrowLeft') show(index - 1);
      if (event.key === 'ArrowRight') show(index + 1);
    }
    function dismiss() {
      host.removeEventListener('keydown', onKey, true);
      viewer?.remove(); viewer = null; opener?.focus();
    }
    viewer?.remove();
    viewer = el('div', { className: 'gallery-viewer', role: 'dialog', 'aria-modal': 'true', 'aria-label': `${title} 사진 갤러리`,
      onClick: event => { if (event.target === viewer) dismiss(); },
      onTouchstart: event => { startX = event.touches[0]?.clientX; },
      onTouchend: event => { const delta = event.changedTouches[0]?.clientX - startX; if (Math.abs(delta) > 50) show(index + (delta < 0 ? 1 : -1)); } },
      el('div', { className: 'gallery-viewer-frame' },
        el('div', { className: 'gallery-viewer-top' }, count, close),
        el('div', { className: 'gallery-viewer-image' }, previous, image, next), caption));
    host.append(viewer); host.addEventListener('keydown', onKey, true); show(index); close.focus();
    host.addEventListener('close', dismiss, { once: true });
  }
  const render = media => {
    gallery.replaceChildren();
    if (!media.length) return;
    const images = media.filter(item => item.kind !== 'video');
    const videos = media.filter(item => item.kind === 'video');
    const cells = images.map((item, index) => el('figure', {},
      el('button', { type: 'button', className: 'gallery-thumbnail', 'aria-label': `${title} 사진 ${index + 1} 크게 보기`, onClick: () => openViewer(images, index) },
        el('img', { src: item.url, alt: `${title} · ${item.caption}`, loading: 'lazy', decoding: 'async' })),
      el('figcaption', {}, item.caption)));
    cells.push(...videos.map(item => el('figure', {},
      el('video', { src: item.url, controls: true, playsinline: true, preload: 'metadata', 'aria-label': `${title} · ${item.caption}` }),
      el('figcaption', {}, item.caption))));
    const heading = images.length ? (videos.length ? '프로젝트 사진·영상' : '프로젝트 사진') : '프로젝트 영상';
    gallery.append(el('h4', {}, heading), el('div', { className: 'photo-grid' }, cells));
  };
  const staticGallery = document.querySelector('meta[name="portfolio-gallery"]');
  const galleryUrl = staticGallery
    ? new URL(staticGallery.content, document.baseURI)
    : `/api/project-images?id=${encodeURIComponent(projectId)}`;
  fetch(galleryUrl).then(response => {
    if (!response.ok) throw new Error('사진 목록을 불러오지 못했습니다.');
    return response.json();
  }).then(data => render(staticGallery ? data[projectId] ?? [] : data))
    .catch(() => gallery.append(el('p', { className: 'muted' }, '사진을 불러오지 못했습니다. 새로고침 후 다시 확인해 주세요.')));
  return gallery;
}
