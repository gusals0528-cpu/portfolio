/**
 * ==========================================================================
 * 로컬 스토리지 & 백업 유틸리티 모듈 (Storage & File Backup)
 * 자기소개 데이터 저장, JSON 파일 내보내기/가져오기 기능 제공
 * ==========================================================================
 */

/**
 * 로컬 스토리지에서 키에 해당하는 JSON 데이터를 파싱하여 반환합니다.
 * @param {string} key - 스토리지 키
 * @param {any} defaultValue - 기본값
 * @returns {any}
 */
export function getStorageData(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (err) {
    console.warn(`[Storage] 키 "${key}" 로드 실패:`, err);
    return defaultValue;
  }
}

/**
 * 로컬 스토리지에 데이터를 JSON 문자열로 저장합니다.
 * @param {string} key - 스토리지 키
 * @param {any} value - 저장할 데이터
 */
export function setStorageData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`[Storage] 키 "${key}" 저장 실패:`, err);
  }
}

/**
 * 객체 데이터를 JSON 파일로 변환하여 브라우저 다운로드를 실행합니다.
 * @param {object} data - 내보낼 데이터 객체
 * @param {string} filename - 저장될 파일명
 */
export function downloadJsonFile(data, filename = "portfolio_backup.json") {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
