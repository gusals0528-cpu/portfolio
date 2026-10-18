/**
 * ==========================================================================
 * 어드민 관리자 모드 & 인라인 자기소개 편집 컴포넌트 (Admin Edit Component)
 * PIN 인증 모달, 실시간 인라인 텍스트 편집, localStorage 저장 및 JSON 백업 내보내기
 * ==========================================================================
 */
import { $, on } from "../utils/dom.js";
import { getStorageData, setStorageData, downloadJsonFile } from "../utils/storage.js";
import { toast } from "./toastComponent.js";

const STORAGE_PROFILE_KEY = "tech_portfolio_profile";
const DEFAULT_PIN = "1234"; // 기본 관리자 PIN 비밀번호 (커스텀 가능)

export class AdminEditComponent {
  constructor() {
    this.bioCard = $(".bio-card");
    this.headlineEl = $(".bio-headline");
    this.roleEl = $(".bio-role");
    this.contentEl = $(".bio-content");
    this.adminTriggerBtn = $(".admin-trigger-btn");

    this.pinModal = this.createPinModalElement();
    this.isEditing = false;

    this.init();
  }

  init() {
    // 1. 저장된 프로필이 있다면 로드하여 복원
    this.loadProfileFromStorage();

    // 2. 관리자 인증 트리거 바인딩 (자물쇠 클릭 또는 단축키)
    this.bindAuthTriggers();

    // 3. 편집 툴바 이벤트 바인딩 (저장, 취소, 백업)
    this.bindToolbarEvents();
  }

  /**
   * PIN 인증 다이얼로그 모달을 동적으로 생성합니다.
   * @returns {HTMLElement}
   */
  createPinModalElement() {
    let modal = $("#pin-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "pin-modal";
      modal.className = "modal-overlay";
      modal.innerHTML = `
        <div class="modal-window pin-modal-window">
          <div class="pin-icon-wrap">🔒</div>
          <h3 class="modal-title" style="margin-bottom:8px;">관리자 인증</h3>
          <p class="pin-desc">자기소개 수정을 위해 4자리 PIN을 입력하세요.<br><span style="font-size:0.75rem; color:var(--text-muted);">(초기 비밀번호: 1234)</span></p>

          <form id="pin-form">
            <div class="pin-input-group">
              <input type="password" class="pin-input" maxlength="1" inputmode="numeric" autofocus />
              <input type="password" class="pin-input" maxlength="1" inputmode="numeric" />
              <input type="password" class="pin-input" maxlength="1" inputmode="numeric" />
              <input type="password" class="pin-input" maxlength="1" inputmode="numeric" />
            </div>
            <div class="pin-error-msg" id="pin-error">비밀번호가 일치하지 않습니다.</div>

            <div style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
              <button type="button" class="btn btn-ghost btn-md" id="btn-pin-cancel">취소</button>
              <button type="submit" class="btn btn-primary btn-md">인증하기</button>
            </div>
          </form>
        </div>
      `;
      document.body.appendChild(modal);
    }
    return modal;
  }

  bindAuthTriggers() {
    // 푸터 자물쇠 아이콘 클릭
    if (this.adminTriggerBtn) {
      on(this.adminTriggerBtn, "click", (e) => {
        e.preventDefault();
        this.openPinModal();
      });
    }

    // 단축키 (Ctrl + Shift + E)
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e")) {
        e.preventDefault();
        if (this.isEditing) {
          this.disableEditMode();
        } else {
          this.openPinModal();
        }
      }
    });

    // PIN 인풋 키패드 자동 포커스 이동 처리
    const inputs = this.pinModal.querySelectorAll(".pin-input");
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });

    // PIN 폼 제출
    const form = $("#pin-form", this.pinModal);
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const pinValue = Array.from(inputs).map((inp) => inp.value).join("");
        if (pinValue === DEFAULT_PIN) {
          this.closePinModal();
          this.enableEditMode();
          toast.show("관리자 편집 모드가 활성화되었습니다! ✨", "success");
        } else {
          const errEl = $("#pin-error", this.pinModal);
          if (errEl) errEl.classList.add("visible");
          inputs.forEach((i) => (i.value = ""));
          inputs[0].focus();
        }
      });
    }

    // PIN 모달 취소 버튼
    const cancelBtn = $("#btn-pin-cancel", this.pinModal);
    if (cancelBtn) {
      on(cancelBtn, "click", () => this.closePinModal());
    }
  }

  openPinModal() {
    const inputs = this.pinModal.querySelectorAll(".pin-input");
    inputs.forEach((i) => (i.value = ""));
    const errEl = $("#pin-error", this.pinModal);
    if (errEl) errEl.classList.remove("visible");

    this.pinModal.classList.add("open");
    setTimeout(() => {
      if (inputs[0]) inputs[0].focus();
    }, 150);
  }

  closePinModal() {
    this.pinModal.classList.remove("open");
  }

  /**
   * 인라인 편집 모드 활성화 (contenteditable 활성화 & 에메랄드 네온 보더)
   */
  enableEditMode() {
    if (!this.bioCard) return;
    this.isEditing = true;
    this.bioCard.classList.add("editing");

    if (this.headlineEl) this.headlineEl.setAttribute("contenteditable", "true");
    if (this.roleEl) this.roleEl.setAttribute("contenteditable", "true");
    if (this.contentEl) this.contentEl.setAttribute("contenteditable", "true");

    if (this.headlineEl) this.headlineEl.focus();
  }

  /**
   * 편집 모드 비활성화
   */
  disableEditMode() {
    if (!this.bioCard) return;
    this.isEditing = false;
    this.bioCard.classList.remove("editing");

    if (this.headlineEl) this.headlineEl.removeAttribute("contenteditable");
    if (this.roleEl) this.roleEl.removeAttribute("contenteditable");
    if (this.contentEl) this.contentEl.removeAttribute("contenteditable");
  }

  bindToolbarEvents() {
    // 1. [저장 완료] 버튼
    const saveBtn = $("#btn-bio-save");
    if (saveBtn) {
      on(saveBtn, "click", () => {
        this.saveProfileToStorage();
        this.disableEditMode();
        toast.show("자기소개가 안전하게 저장되었습니다! 💾", "success");
      });
    }

    // 2. [취소] 버튼
    const cancelBtn = $("#btn-bio-cancel");
    if (cancelBtn) {
      on(cancelBtn, "click", () => {
        this.loadProfileFromStorage();
        this.disableEditMode();
        toast.show("편집이 취소되었습니다.", "info");
      });
    }

    // 3. [JSON 백업 다운로드] 버튼
    const backupBtn = $("#btn-bio-backup");
    if (backupBtn) {
      on(backupBtn, "click", () => {
        const data = this.getCurrentProfileData();
        downloadJsonFile(data, `profile_backup_${new Date().toISOString().slice(0, 10)}.json`);
        toast.show("프로필 JSON 백업 파일이 다운로드되었습니다. 📥", "success");
      });
    }
  }

  getCurrentProfileData() {
    return {
      headline: this.headlineEl ? this.headlineEl.textContent.trim() : "",
      role: this.roleEl ? this.roleEl.textContent.trim() : "",
      content: this.contentEl ? this.contentEl.innerHTML.trim() : "",
      updatedAt: new Date().toISOString()
    };
  }

  saveProfileToStorage() {
    const data = this.getCurrentProfileData();
    setStorageData(STORAGE_PROFILE_KEY, data);
  }

  loadProfileFromStorage() {
    const data = getStorageData(STORAGE_PROFILE_KEY, null);
    if (data) {
      if (this.headlineEl && data.headline) this.headlineEl.textContent = data.headline;
      if (this.roleEl && data.role) this.roleEl.textContent = data.role;
      if (this.contentEl && data.content) this.contentEl.innerHTML = data.content;
    }
  }
}
