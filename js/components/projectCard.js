/**
 * ==========================================================================
 * 프로젝트 카드 렌더링 컴포넌트 (Project Card Component)
 * 메이커 포트폴리오용: 이모지 프리뷰, 정량 지표 배지, 기술 태그, 블로그 링크 버튼
 * ==========================================================================
 */

export class ProjectCardComponent {
  /**
   * 프로젝트 객체 데이터를 바탕으로 HTML 카드 요소를 생성합니다.
   * @param {object} project - 프로젝트 데이터
   * @param {Function} [onCaseStudyClick] - 케이스 스터디 상세 보기 콜백
   * @returns {HTMLElement}
   */
  static render(project, onCaseStudyClick = null) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.id = project.id;
    card.dataset.category = project.category;

    // 1. 카테고리별 색상 매핑
    const categoryColors = {
      tech: "var(--accent-cyan)",
      goods: "var(--accent-amber)",
      edu: "var(--accent-violet)",
      data: "var(--primary)",
      backend: "var(--accent-cyan)",
      ai: "var(--accent-violet)",
    };
    const categoryLabels = {
      tech: "⚡ 테크 장치",
      goods: "🎨 굿즈 제작",
      edu: "🎓 교육 교구",
      data: "📊 데이터",
      backend: "⚡ 백엔드",
      ai: "🧠 AI / ML",
    };
    const accentColor = categoryColors[project.category] || "var(--primary)";
    const categoryLabel = categoryLabels[project.category] || project.category;

    // 2. 프로젝트 이모지 프리뷰 영역 SVG 생성 (이모지 중심의 비주얼 카드)
    const previewHtml = this.generateProjectPreview(project, accentColor);

    // 3. 정량 지표 뱃지 렌더링
    const metricsHtml = (project.metrics || [])
      .map((m) => `<span class="metric-badge"><span class="icon">✅</span> ${m}</span>`)
      .join("");

    // 4. 기술 스택 태그 렌더링
    const tagsHtml = (project.tags || [])
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="arch-preview" title="${project.title}" style="background: linear-gradient(135deg, #0d1117 0%, #111723 100%); position:relative; overflow:hidden;">
        ${previewHtml}
        <span style="
          position:absolute; top:12px; right:12px;
          font-family:var(--font-mono); font-size:0.65rem;
          background: rgba(0,0,0,0.5); color:${accentColor};
          padding:3px 8px; border-radius:20px; border:1px solid ${accentColor}33;
        ">${categoryLabel}</span>
      </div>

      <div class="project-content">
        <div class="project-metrics">
          ${metricsHtml}
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.summary}</p>

        <div class="project-tags">
          ${tagsHtml}
        </div>

        <div class="project-actions">
          <button class="btn btn-secondary btn-sm btn-case-study">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            제작 과정 보기
          </button>
          ${project.blogUrl ? `
            <a href="${project.blogUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              블로그 원문
            </a>
          ` : ""}
        </div>
      </div>
    `;

    // 케이스 스터디 클릭 핸들러 바인딩
    const caseStudyBtn = card.querySelector(".btn-case-study");
    if (caseStudyBtn && onCaseStudyClick) {
      caseStudyBtn.addEventListener("click", () => onCaseStudyClick(project));
    }

    return card;
  }

  /**
   * 프로젝트 이모지 & 카테고리 기반의 비주얼 프리뷰 영역을 생성합니다.
   * @param {object} project
   * @param {string} accentColor
   * @returns {string} HTML 문자열
   */
  static generateProjectPreview(project, accentColor) {
    const emoji = project.emoji || "🔧";
    return `
      <div style="
        display:flex; flex-direction:column; align-items:center; justify-content:center;
        height:100%; gap:12px; padding:20px;
      ">
        <div style="
          font-size:3.5rem; line-height:1;
          filter: drop-shadow(0 0 20px ${accentColor}88);
          animation: float 3s ease-in-out infinite;
        ">${emoji}</div>
        <div style="
          font-family:var(--font-mono); font-size:0.72rem;
          color: ${accentColor}; text-align:center; opacity:0.85;
          background: ${accentColor}11;
          padding:4px 12px; border-radius:4px;
          border:1px solid ${accentColor}33;
        ">${(project.tags || []).slice(0, 3).join(" · ")}</div>
      </div>
      <style>
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      </style>
    `;
  }
}
