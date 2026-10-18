/**
 * ==========================================================================
 * 헤더 및 네비게이션 제어 컴포넌트 (Header Component)
 * 스크롤 상태 감지, 모바일 햄버거 드로어 토글 및 활성 섹션 하이라이트
 * ==========================================================================
 */
import { $, $$, on } from "../utils/dom.js";

export class HeaderComponent {
  constructor(headerSelector = ".app-header") {
    this.header = $(headerSelector);
    this.mobileBtn = $(".mobile-menu-btn");
    this.mobileDrawer = $(".mobile-nav-drawer");
    this.navLinks = $$(".nav-link");

    this.init();
  }

  init() {
    if (!this.header) return;

    // 1. 스크롤 위치 감지하여 헤더 스타일 변경
    this.bindScrollEffect();

    // 2. 모바일 드로어 토글 바인딩
    this.bindMobileMenu();

    // 3. 링크 클릭 시 스무스 스크롤 및 모바일 메뉴 자동 닫기
    this.bindNavLinks();
  }

  bindScrollEffect() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        this.header.classList.add("scrolled");
      } else {
        this.header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  bindMobileMenu() {
    if (!this.mobileBtn || !this.mobileDrawer) return;

    on(this.mobileBtn, "click", () => {
      const isOpen = this.mobileDrawer.classList.toggle("open");
      this.mobileBtn.setAttribute("aria-expanded", isOpen.toString());
    });
  }

  bindNavLinks() {
    this.navLinks.forEach((link) => {
      on(link, "click", (e) => {
        // 모바일 드로어가 열려있다면 닫기
        if (this.mobileDrawer) {
          this.mobileDrawer.classList.remove("open");
        }

        // 대상 앵커 스크롤
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetEl = $(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }
}
