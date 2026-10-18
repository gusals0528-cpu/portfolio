/**
 * ==========================================================================
 * 프로젝트 상세 케이스 스터디 모달 컴포넌트 (Case Study Modal)
 * 문제 정의, 기술적 난제 및 선택 이유, 아키텍처, 트러블슈팅, 결과 상세 렌더링
 * ==========================================================================
 */
import { $, on } from "../utils/dom.js";

export class CaseStudyModal {
  constructor(overlaySelector = "#case-study-modal") {
    this.overlay = $(overlaySelector);
    if (!this.overlay) {
      this.overlay = this.createModalElement();
    }
    this.closeBtn = $(".modal-close-btn", this.overlay);
    this.bodyEl = $(".modal-body", this.overlay);
    this.titleEl = $(".modal-title", this.overlay);

    this.bindEvents();
  }

  /**
   * 모달 마크업이 없을 경우 동적으로 생성하여 body에 부착합니다.
   * @returns {HTMLElement}
   */
  createModalElement() {
    const overlay = document.createElement("div");
    overlay.id = "case-study-modal";
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <h3 class="modal-title">Project Case Study</h3>
          <button class="modal-close-btn" aria-label="닫기">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <!-- 프로젝트 상세 내용 동적 삽입 -->
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  bindEvents() {
    // 닫기 버튼 클릭
    if (this.closeBtn) {
      on(this.closeBtn, "click", () => this.close());
    }

    // 백드롭(오버레이) 클릭 시 닫기
    on(this.overlay, "click", (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // ESC 키 입력 시 닫기
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.overlay.classList.contains("open")) {
        this.close();
      }
    });
  }

  /**
   * 특정 프로젝트의 상세 정보를 채우고 모달을 엽니다.
   * @param {object} project - 프로젝트 데이터 객체
   */
  open(project) {
    if (!project) return;

    this.titleEl.textContent = `📋 ${project.title}`;

    const metricsHtml = (project.metrics || [])
      .map((m) => `<span class="metric-badge"><span class="icon">⚡</span> ${m}</span>`)
      .join(" ");

    this.bodyEl.innerHTML = `
      <div class="case-study-section">
        <div class="case-study-label">📌 핵심 성과 지표 (Metrics)</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:6px;">
          ${metricsHtml}
        </div>
      </div>

      <div class="case-study-section">
        <div class="case-study-label">🎯 1. 문제 정의 (Problem Statement)</div>
        <p class="case-study-text">${project.problem || project.summary}</p>
      </div>

      <div class="case-study-section">
        <div class="case-study-label">🛠️ 2. 기술적 난제 & 해결 전략 (Why Tech Stack?)</div>
        <p class="case-study-text">${project.solution || "시스템 병목을 해소하기 위해 비동기 큐와 분산 캐싱을 도입하여 안정성을 극대화했습니다."}</p>
      </div>

      <div class="case-study-section">
        <div class="case-study-label">💡 3. 트러블슈팅 및 배운 점 (Troubleshooting & Learnings)</div>
        <p class="case-study-text">${project.troubleshooting || "데이터 일관성 유지와 데드락 문제를 해결하기 위해 멱등성 키와 분산 락을 설계했습니다."}</p>
      </div>
    `;

    this.overlay.classList.add("open");
    document.body.style.overflow = "hidden"; // 배경 스크롤 방지
  }

  close() {
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}
