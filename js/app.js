/**
 * ==========================================================================
 * 테크 포트폴리오 메인 애플리케이션 진입점 (Main App Orchestrator)
 * 모든 UI 컴포넌트 초기화 및 프로젝트 데이터 로드, 사용자 인터랙션 총괄
 * ==========================================================================
 */
import { $, $$, on, copyTextToClipboard } from "./utils/dom.js";
import { HeaderComponent } from "./components/headerComponent.js";
import { TerminalComponent } from "./components/terminalComponent.js";
import { ProjectCardComponent } from "./components/projectCard.js";
import { FilterComponent } from "./components/filterComponent.js";
import { CaseStudyModal } from "./components/caseStudyModal.js";
import { AdminEditComponent } from "./components/adminEditComponent.js";
import { toast } from "./components/toastComponent.js";

class MakerPortfolioApp {
  constructor() {
    this.projectsContainer = $("#projects-container");
    this.projects = [];

    this.init();
  }

  async init() {
    // 1. 헤더 및 네비게이션 컴포넌트 초기화
    this.header = new HeaderComponent();

    // 2. 터미널 윈도우 인터랙션 컴포넌트 초기화
    this.terminal = new TerminalComponent();

    // 3. 프로젝트 상세 모달 초기화
    this.caseStudyModal = new CaseStudyModal();

    // 4. 어드민 관리자 인라인 편집 컴포넌트 초기화
    this.adminEdit = new AdminEditComponent();

    // 5. 프로젝트 데이터 로드 및 렌더링
    await this.loadProjects();

    // 6. 카테고리 필터 탭 컴포넌트 초기화
    this.filter = new FilterComponent(".filter-pill", ".project-card");

    // 7. 기타 공통 액션 바인딩 (이메일 복사 등)
    this.bindCommonActions();
  }

  /**
   * data/projects.json 파일로부터 프로젝트 목록을 비동기 로드합니다.
   */
  async loadProjects() {
    try {
      const response = await fetch("./data/projects.json");
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      this.projects = await response.json();
      this.renderProjects(this.projects);
    } catch (err) {
      console.warn("프로젝트 JSON 로드 실패 (기본 프로젝트 사용):", err);
      // 로컬 파일 직접 열기(file://) 대비 안전한 기본 프로젝트 카드 렌더링
      this.renderFallbackProjects();
    }
  }

  /**
   * 프로젝트 카드 그리드를 화면에 렌더링합니다.
   * @param {Array} projects - 프로젝트 데이터 목록
   */
  renderProjects(projects) {
    if (!this.projectsContainer) return;
    this.projectsContainer.innerHTML = "";

    projects.forEach((proj) => {
      const cardEl = ProjectCardComponent.render(proj, (selectedProj) => {
        this.caseStudyModal.open(selectedProj);
      });
      this.projectsContainer.appendChild(cardEl);
    });
  }

  /**
   * 오프라인 또는 파일 직접 실행 시를 위한 Fallback 프로젝트
   */
  renderFallbackProjects() {
    const fallbackData = [
      {
        id: "fb-1",
        title: "인터넷 방송 알림 장치",
        category: "tech",
        emoji: "📡",
        summary: "ESP32 기반으로 트위치·아프리카TV 4개 채널을 동시 모니터링하여 방송 시작 시 TFT 디스플레이와 LED로 알림을 제공하는 IoT 장치입니다.",
        metrics: ["4개 채널 동시 수신", "PCB 직접 설계"],
        tags: ["ESP32", "C++", "Arduino", "TFT SPI"],
        problem: "매번 직접 확인해야 하는 방송 시작 알림의 불편함.",
        solution: "Twitch·아프리카TV API를 폴링하여 방송 상태 감지 후 TFT에 실시간 출력.",
        troubleshooting: "다중 API 요청 시 메모리 부족 문제를 태스크 분리와 이미지 최적화로 해결.",
        blogUrl: "https://bker001.tistory.com/545"
      },
      {
        id: "fb-2",
        title: "탬탬버린님 팬 무드등",
        category: "goods",
        emoji: "💡",
        summary: "창작자 허가를 받아 제작한 커스텀 LED 무드등. 3D 모델링부터 회로 설계, 채색까지 전 과정 직접 제작.",
        metrics: ["창작자 허가 취득", "유튜브 영상화 완료"],
        tags: ["Fusion360", "3D프린팅", "Arduino", "LED"],
        problem: "저작권 문제 없는 합법적 팬 굿즈 제작 방법 필요.",
        solution: "창작자에게 직접 허가 요청 후 모델링·회로 통합.",
        troubleshooting: "필라멘트 재질별 도료 접착 차이를 프라이머 적용으로 해결.",
        blogUrl: "https://bker001.tistory.com/303"
      },
      {
        id: "fb-3",
        title: "에듀테크 코딩 교구 키트",
        category: "edu",
        emoji: "🎓",
        summary: "파이썬·아두이노 입문자를 위한 체험형 교구 키트. 교안 제작부터 실제 교구 설계·3D 프린팅까지 전 과정 직접 진행.",
        metrics: ["교안 직접 제작", "초·중학생 대상"],
        tags: ["Python", "Arduino", "3D프린팅", "교육"],
        problem: "코딩 수업에서 학생 흥미 유지 어려움.",
        solution: "코딩 결과가 즉각 물리 피드백으로 나타나는 교구 설계.",
        troubleshooting: "연령별 난이도 차이를 단계별 모듈 조립 방식으로 해결.",
        blogUrl: "https://blog.naver.com/makestrange/224428371847"
      }
    ];
    this.renderProjects(fallbackData);
  }

  /**
   * 이메일 복사 등 공통 버튼 액션 바인딩
   */
  bindCommonActions() {
    const copyEmailBtn = $("#btn-copy-email");
    if (copyEmailBtn) {
      on(copyEmailBtn, "click", async (e) => {
        e.preventDefault();
        const email = copyEmailBtn.dataset.email || "developer@example.com";
        const success = await copyTextToClipboard(email);
        if (success) {
          toast.show(`이메일 주소(${email})가 복사되었습니다! 📬`, "success");
        } else {
          toast.show("이메일 복사에 실패했습니다.", "error");
        }
      });
    }
  }
}

// DOM 준비 완료 시 메인 앱 기동
document.addEventListener("DOMContentLoaded", () => {
  window.app = new MakerPortfolioApp();
});
