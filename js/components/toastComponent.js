/**
 * ==========================================================================
 * 토스트 알림 컴포넌트 (Toast Notification Component)
 * 작업 완료, 복사 완료, 에러 발생 시 사용자에게 피드백 제공
 * ==========================================================================
 */
import { $ } from "../utils/dom.js";

export class ToastComponent {
  constructor() {
    this.container = this.getOrCreateContainer();
  }

  /**
   * 토스트를 담을 고정 컨테이너를 생성하거나 기존 요소를 가져옵니다.
   * @returns {HTMLElement}
   */
  getOrCreateContainer() {
    let container = $(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    return container;
  }

  /**
   * 화면에 토스트 알림을 띄웁니다.
   * @param {string} message - 표시할 안내 문구
   * @param {"success"|"error"|"info"} [type="success"] - 알림 종류
   * @param {number} [duration=3000] - 노출 시간 (ms)
   */
  show(message, type = "success", duration = 3000) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    // 아이콘 결정 (에메랄드 체크 또는 레드 느낌표)
    const iconSvg = type === "success" 
      ? `<svg class="toast-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg class="toast-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-text">${message}</span>
    `;

    this.container.appendChild(toast);

    // 부드러운 등장 애니메이션 트리거
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // 지정 시간 경과 후 자동 소멸
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }
}

// 싱글톤 인스턴스 기본 내보내기
export const toast = new ToastComponent();
