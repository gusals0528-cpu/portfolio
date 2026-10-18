/**
 * ==========================================================================
 * DOM 조작 및 이벤트 유틸리티 모듈 (DOM Helpers)
 * 안전하고 편리한 쿼리 셀렉터 및 이벤트 바인딩 함수 제공
 * ==========================================================================
 */

/**
 * 단일 DOM 요소를 선택합니다.
 * @param {string} selector - CSS 선택자
 * @param {HTMLElement} [parent=document] - 부모 컨텍스트
 * @returns {HTMLElement|null}
 */
export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * 복수 DOM 요소를 선택하여 배열로 반환합니다.
 * @param {string} selector - CSS 선택자
 * @param {HTMLElement} [parent=document] - 부모 컨텍스트
 * @returns {HTMLElement[]}
 */
export function $$(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * 요소에 여러 이벤트를 한 번에 바인딩합니다.
 * @param {HTMLElement} element - 대상 요소
 * @param {string} eventNames - 공백으로 구분된 이벤트명
 * @param {Function} handler - 이벤트 핸들러
 */
export function on(element, eventNames, handler) {
  if (!element) return;
  eventNames.split(" ").forEach((event) => {
    element.addEventListener(event, handler);
  });
}

/**
 * 텍스트를 클립보드에 안전하게 복사합니다.
 * @param {string} text - 복사할 문자열
 * @returns {Promise<boolean>} 성공 여부
 */
export async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const result = document.execCommand("copy");
    document.body.removeChild(textarea);
    return result;
  } catch (err) {
    console.error("클립보드 복사 중 오류 발생:", err);
    return false;
  }
}
