const paths = {
  institution: 'M3 9h18L12 3 3 9zM5 11v7m5-7v7m4-7v7m5-7v7M3 21h18M4 18h16',
  fireworks: 'M12 2v4m0 12v4M2 12h4m12 0h4M4.9 4.9l2.8 2.8m8.6 8.6 2.8 2.8m0-14.2-2.8 2.8m-8.6 8.6-2.8 2.8M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z',
  arrow: 'M5 12h14m-6-6 6 6-6 6', close: 'm6 6 12 12M6 18 18 6',
  chip: 'M7 7h10v10H7zM9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4',
  chart: 'M4 4v16h16M8 15v-4m4 4V7m4 8v-6',
  ai: 'M12 3v3m0 12v3M3 12h3m12 0h3M7 7h10v10H7zM10 10h4v4h-4z',
  drone: 'M9 9h6v6H9zM9 9 6 6m9 3 3-3M9 15l-3 3m9-3 3 3M2 2h6v6H2zM16 2h6v6h-6zM2 16h6v6H2zM16 16h6v6h-6z',
  cube: 'm12 3 9 5v9l-9 5-9-5V8zm0 10v9M3 8l9 5 9-5M12 3v10',
  pen: 'm4 16 12-12 4 4L8 20H4zm10-10 4 4',
  web: 'M3 4h18v16H3zM3 9h18M7 6h.01M10 6h.01m0 6-3 3 3 3m4-6 3 3-3 3',
  mail: 'M3 5h18v14H3zm0 0 9 8 9-8', copy: 'M8 8h12v13H8zM16 8V3H3v13h5',
  check: 'm5 12 4 4L19 6', menu: 'M4 6h16M4 12h16M4 18h16',
  folder: 'M3 6h7l2 3h9v11H3z', book: 'M4 3h7v18H4zm9 0h7v18h-7',
};
export function Icon(name, size = 20) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  for (const [key, value] of Object.entries({ viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true' })) svg.setAttribute(key, value);
  const path = document.createElementNS(svg.namespaceURI, 'path');
  path.setAttribute('d', paths[name] || paths.folder);
  svg.append(path);
  return svg;
}
