/**
 * ==========================================================================
 * 프로젝트 카테고리 필터 컴포넌트 (Filter Component)
 * 알약 탭(Pill) 클릭 시 카테고리별 프로젝트 카드 필터링 제어
 * ==========================================================================
 */
import { $$, on } from "../utils/dom.js";

export class FilterComponent {
  /**
   * @param {string} pillSelector - 필터 탭 선택자
   * @param {string} cardSelector - 프로젝트 카드 선택자
   * @param {Function} [onFilterChange] - 필터 변경 시 콜백
   */
  constructor(pillSelector = ".filter-pill", cardSelector = ".project-card", onFilterChange = null) {
    this.pills = $$(pillSelector);
    this.cardSelector = cardSelector;
    this.onFilterChange = onFilterChange;
    this.currentCategory = "all";

    this.init();
  }

  init() {
    this.pills.forEach((pill) => {
      on(pill, "click", () => {
        const category = pill.dataset.category || "all";
        this.setCategory(category);
      });
    });
  }

  /**
   * 카테고리를 설정하고 카드 표시 상태를 업데이트합니다.
   * @param {string} category - 카테고리 키 ("all" | "backend" | "data" | "ai")
   */
  setCategory(category) {
    this.currentCategory = category;

    // 1. 알약 탭 활성 상태 토글
    this.pills.forEach((p) => {
      if ((p.dataset.category || "all") === category) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    // 2. 카드 필터링 적용 (부드러운 페이드 인/아웃)
    const cards = $$(this.cardSelector);
    cards.forEach((card) => {
      const cardCat = card.dataset.category;
      if (category === "all" || cardCat === category) {
        card.style.display = "flex";
        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
          if (this.currentCategory !== "all" && card.dataset.category !== this.currentCategory) {
            card.style.display = "none";
          }
        }, 200);
      }
    });

    if (this.onFilterChange) {
      this.onFilterChange(category);
    }
  }
}
