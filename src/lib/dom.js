// 전달받은 문자열은 HTML로 해석하지 않고 텍스트로 삽입한다.
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined || value === null || value === false) continue;
    if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2).toLowerCase(), value);
    else if (key === 'className') node.className = value;
    else if (key === 'value') node.value = value;
    else node.setAttribute(key, value === true ? '' : String(value));
  }
  for (const child of children.flat(Infinity)) {
    if (child !== null && child !== undefined && child !== false) node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}
let sequence = 0;
export const uid = (prefix = 'ui') => `${prefix}-${++sequence}`;

// 이미지·링크에 실행 가능한 주소가 들어오는 것을 막는다.
export function safeURL(value) {
  if (!value) return undefined;
  try {
    const url = new URL(value, location.href);
    if (['http:', 'https:', 'mailto:'].includes(url.protocol)) return value;
  } catch { return undefined; }
}
