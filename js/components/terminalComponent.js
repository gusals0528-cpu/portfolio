/**
 * ==========================================================================
 * 터미널 윈도우 인터랙션 컴포넌트 (Terminal Component)
 * 콘솔 명령어 타이핑 애니메이션 및 윈도우 닷(🔴🟡🟢) 클릭 반응
 * ==========================================================================
 */
import { $, on } from "../utils/dom.js";

export class TerminalComponent {
  constructor(terminalSelector = ".terminal-window") {
    this.terminal = $(terminalSelector);
    if (!this.terminal) return;

    this.body = $(".terminal-body", this.terminal);
    this.redDot = $(".dot-red", this.terminal);
    this.yellowDot = $(".dot-yellow", this.terminal);
    this.greenDot = $(".dot-green", this.terminal);

    this.init();
  }

  init() {
    this.bindWindowDots();
  }

  /**
   * macOS 스타일 신호등 닷 클릭 이벤트
   */
  bindWindowDots() {
    // 닫기 닷(레드): 터미널 창 닫힘/숨김 효과
    if (this.redDot) {
      on(this.redDot, "click", () => {
        this.terminal.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        this.terminal.style.transform = "scale(0.85)";
        this.terminal.style.opacity = "0.2";
        setTimeout(() => {
          this.terminal.style.transform = "";
          this.terminal.style.opacity = "";
        }, 1200);
      });
    }

    // 최소화 닷(옐로우): 본문 접기 토글
    if (this.yellowDot && this.body) {
      on(this.yellowDot, "click", () => {
        if (this.body.style.display === "none") {
          this.body.style.display = "block";
        } else {
          this.body.style.display = "none";
        }
      });
    }

    // 확대 닷(그린): 네온 발광 오라 토글
    if (this.greenDot) {
      on(this.greenDot, "click", () => {
        this.terminal.classList.toggle("glow");
      });
    }
  }

  /**
   * 텍스트 타이핑 애니메이션 유틸리티
   * @param {HTMLElement} targetEl - 글자가 쓰여질 요소
   * @param {string} text - 타이핑할 문자열
   * @param {number} [speed=40] - 타이핑 속도 (ms)
   * @returns {Promise<void>}
   */
  async typeText(targetEl, text, speed = 40) {
    if (!targetEl) return;
    targetEl.textContent = "";
    for (let i = 0; i < text.length; i++) {
      targetEl.textContent += text.charAt(i);
      await new Promise((res) => setTimeout(res, speed));
    }
  }
}
