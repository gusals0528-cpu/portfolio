# 🎨 [Design Guide] 백엔드 · 데이터 · AI 엔지니어 포트폴리오 디자인 시스템

> **문서명**: Tech Engine Portfolio UI/UX Design System  
> **기획/디자인**: 프론트엔드 UI/UX 전문가 (Antigravity)  
> **버전**: v1.0.0  
> **적용 타깃**: `portfolio/prd.md` 기반 웹 애플리케이션  
> **디자인 테마**: **Terminal Matrix & Modern Rounded (Jet Black & Emerald Green)**  

---

## 1. 디자인 컨셉 & 비주얼 무드 (Design Concept)

### 1.1 "Terminal Matrix Meets Modern Cleanism"
- **무드**: 깊이감 있는 제트 블랙(`Jet Black`) 바탕에 에메랄드 그린(`Terminal Emerald`) 네온 액센트를 더해, **정통 백엔드 개발자의 CLI 콘솔 감성**과 **신뢰성 높은 현대적 테크 기업의 미니멀함**을 동시에 전달합니다.
- **다크 모드 전용(Deep Dark Only)**: 복잡한 듀얼 테마 대신, 엔지니어의 전문성과 코드 가독성이 가장 극대화되는 프리미엄 다크 테마 단일 체계로 일관된 시각 경험을 완성합니다.
- **모던 라운디드(Modern Rounded)**: 딱딱하고 차가운 터미널 창을 8px~14px의 부드럽고 세련된 곡률로 완화하여 가독성과 사용자 친화적인 감성을 확보합니다.

---

## 2. 컬러 팔레트 시스템 (Color Palette)

### 2.1 배경색 계층 구조 (Background Hierarchy)
다크 모드에서는 컴포넌트의 위계(Elevation)를 **명도의 차이**로 구분합니다.

| 토큰명 (CSS Variable) | 색상 코드 (HEX/RGBA) | 용도 및 설명 |
| :--- | :--- | :--- |
| `--bg-base` | `#080b11` | 최하단 메인 페이지 배경 (극도로 정돈된 제트 블랙) |
| `--bg-surface` | `#0f141c` | 캔버스/섹션 컨테이너 배경 |
| `--bg-card` | `#151b26` | 프로젝트 카드, 기술 스택 카드, 터미널 윈도우 본체 |
| `--bg-card-hover` | `#1b2332` | 카드 마우스 오버 시 입체감 상승 배경 |
| `--bg-glass` | `rgba(21, 27, 38, 0.75)` | 상단 네비게이션(GNB), 모달 백드롭 (Blur 16px 적용) |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | 일반 카드 및 구분선 경계 |
| `--border-emerald` | `rgba(16, 185, 129, 0.25)` | 주요 포인트 컴포넌트 및 호버 시 테두리 |

---

### 2.2 브랜드 & 포인트 액센트 컬러 (Brand & Accent Colors)

| 토큰명 | 색상 코드 | 용도 |
| :--- | :--- | :--- |
| `--primary` | `#10b981` (Emerald 500) | 메인 액션 버튼, 링크 호버, 터미널 프롬프트(`$`), 활성 탭 |
| `--primary-hover` | `#34d399` (Emerald 400) | 버튼 마우스 오버, 활성 강조 |
| `--primary-dark` | `#059669` (Emerald 600) | 버튼 클릭(Active), 뱃지 테두리 |
| `--primary-glow` | `rgba(16, 185, 129, 0.35)` | 네온 발광, 포커스 링, 백그라운드 오라(Aura) |
| `--accent-cyan` | `#06b6d4` (Cyan 500) | 데이터 파이프라인 태그, 실시간 지표 뱃지 |
| `--accent-violet` | `#8b5cf6` (Violet 500) | AI / ML / 모델링 관련 태그 및 특수 뱃지 |
| `--accent-amber` | `#f59e0b` (Amber 500) | 성능 개선 지표(Metrics: Latency/TPS 단축) 강조 |
| `--accent-red` | `#f43f5e` (Rose 500) | 터미널 윈도우 닫기 닷, 에러/삭제 알림 |

---

### 2.3 텍스트 컬러 시스템 (Typography Colors)

| 토큰명 | 색상 코드 | 명도 대비 | 용도 |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#f8fafc` (Slate 50) | 16.5:1 (AAA) | H1~H3 제목, 본문 핵심 강조 텍스트 |
| `--text-secondary` | `#94a3b8` (Slate 400) | 7.8:1 (AAA) | 일반 설명 문장, 프로젝트 요약, 라벨 |
| `--text-muted` | `#64748b` (Slate 500) | 4.6:1 (AA) | 작성일, 푸터 정보, 비활성 힌트 텍스트 |
| `--text-code` | `#a7f3d0` (Emerald 200) | 12.2:1 (AAA) | 코드 인라인 스니펫, 터미널 텍스트, 콘솔 로그 |

---

## 3. 타이포그래피 시스템 (Typography)

### 3.1 폰트 패밀리 (Font Families)
- **UI / Headings / Body**:  
  `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - 한국어 고유의 자연스러운 자간과 세련된 획 굵기를 제공하는 모던 산세리프.
- **Code / Metrics / Terminal Console**:  
  `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`
  - 백엔드 개발자 감성을 극대화하는 고정폭(Monospace) 코딩 폰트.

### 3.2 타입 스케일 (Type Scale)

| 역할 (Role) | 폰트 크기 | 행간 (Line-height) | 자간 (Letter-spacing) | 굵기 (Weight) | 추천 태그 / 클래스 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 44px (2.75rem) | 1.2 | -0.03em | 800 (Bold) | `.hero-title` |
| **H1 (Section)** | 32px (2.00rem) | 1.3 | -0.02em | 700 (Bold) | `h1, .section-title` |
| **H2 (Card)** | 22px (1.375rem)| 1.4 | -0.01em | 600 (SemiBold)| `h2, .card-title` |
| **H3 (Sub)** | 18px (1.125rem)| 1.4 | 0em | 600 (SemiBold)| `h3, .sub-title` |
| **Body Large** | 16px (1.00rem) | 1.65 | -0.01em | 400 / 500 | `.intro-text, p.lead`|
| **Body Regular**| 14px (0.875rem)| 1.6 | 0em | 400 (Regular) | `p, .card-desc` |
| **Caption/Code**| 13px (0.8125rem)| 1.5 | +0.02em | 500 (Mono) | `code, .meta-text` |
| **Tag/Badge** | 12px (0.75rem) | 1.0 | +0.03em | 600 (SemiBold)| `.badge, .pill` |

---

## 4. 간격 & 레이아웃 그리드 (Spacing & Layout)

### 4.1 8-Point Spacing Scale
모든 여백(Margin, Padding, Gap)은 8배수(필요시 4px 하프스텝) 원칙을 따릅니다.

| 스케일 토큰 | 값 (px / rem) | 권장 사용 영역 |
| :--- | :--- | :--- |
| `--space-xs` | `4px` (0.25rem) | 뱃지 내부 상하 패딩, 인라인 아이콘 갭 |
| `--space-sm` | `8px` (0.50rem) | 태그 간격, 버튼 내부 상하 패딩 |
| `--space-md` | `16px` (1.00rem) | 컴포넌트 내부 기본 여백, 버튼 좌우 패딩 |
| `--space-lg` | `24px` (1.50rem) | 카드 패딩, 그리드 갭(Gap) |
| `--space-xl` | `32px` (2.00rem) | 카드 간격, 모달 내부 패딩 |
| `--space-2xl`| `48px` (3.00rem) | 섹션 내부 헤더와 본문 사이 여백 |
| `--space-3xl`| `80px` (5.00rem) | 메인 섹션 간 상하 마진(Section Spacing) |

### 4.2 레이아웃 컨테이너
- **Max Width**: `1200px` (가독성과 아키텍처 다이어그램 뷰에 최적화)
- **Container Padding**: Desktop `32px`, Tablet `24px`, Mobile `16px`
- **Grid Layout**:
  - Desktop: 3열 카드 그리드 (`grid-template-columns: repeat(3, 1fr)`)
  - Tablet: 2열 카드 그리드 (`grid-template-columns: repeat(2, 1fr)`)
  - Mobile: 1열 카드 그리드 (`grid-template-columns: 1fr`)

---

## 5. 모서리 곡률 시스템 (Border Radius)

사용자 선호도인 **"모던 라운디드"** 를 시스템화합니다.

| 토큰명 | 값 (px) | 적용 대상 |
| :--- | :--- | :--- |
| `--radius-sm` | `6px` | 코드 블록, 인라인 태그, 작은 아이콘 버튼 |
| `--radius-md` | `10px` | 일반 버튼, 입력창(Input), 뱃지, 드롭다운 |
| `--radius-lg` | `14px` | **메인 카드(Card)**, 터미널 창 프레임, 모달 다이얼로그 |
| `--radius-xl` | `20px` | 대형 히어로 컨테이너, 프로필 이미지 프레임 |
| `--radius-full` | `9999px` | 필터 알약 탭(Pills), 원형 아바타, 상태 표시 닷 |

---

## 6. 버튼 & 인터랙티브 컴포넌트 규격 (Buttons & UI Elements)

### 6.1 버튼 크기 (Button Sizes)

```
[ Small Button (32px) ] -> 태그 필터, 카드 내부 링크
[ Medium Button (40px) ] -> 기본 인터랙션, 모달 확인/취소
[ Large Button (48px) ] -> 히어로 메인 CTA, 이력서 다운로드
```

| 크기 (Size) | 높이 (Height) | 패딩 (Padding) | 폰트 크기 | 아이콘 크기 | 용도 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Small (sm)** | `32px` | 상하 6px / 좌우 12px | 13px | 14px | 깃허브 코드 보기, 카드 링크, 필터 |
| **Medium (md)**| `40px` | 상하 10px / 좌우 18px | 14px | 16px | 일반 버튼, 복사 버튼, 모달 액션 |
| **Large (lg)** | `48px` | 상하 12px / 좌우 24px | 16px | 20px | 프로젝트 데모 보기, 메인 연락처 CTA |
| **Icon Only** | `36px × 36px` | 중앙 정렬 | - | 18px | 푸터 소셜 링크, 관리자 락 버튼(🔒) |

---

### 6.2 버튼 스타일 변형 (Button Variants)

#### 1) Primary Button (터미널 에메랄드 메인 버튼)
- **기본**: Background `#10b981`, Color `#080b11` (고대비 블랙), Weight 600, Box-shadow `0 4px 14px rgba(16, 185, 129, 0.3)`
- **호버 (Hover)**: Background `#34d399`, Transform `translateY(-2px)`, Box-shadow `0 6px 20px rgba(16, 185, 129, 0.45)`
- **액티브 (Active)**: Background `#059669`, Transform `translateY(0)`

#### 2) Secondary / Ghost Button (아웃라인 버튼)
- **기본**: Background `rgba(255, 255, 255, 0.04)`, Border `1px solid rgba(255, 255, 255, 0.12)`, Color `#f8fafc`
- **호버 (Hover)**: Background `rgba(16, 185, 129, 0.08)`, Border-color `#10b981`, Color `#34d399`, Transform `translateY(-2px)`

#### 3) Category Filter Pill (알약 탭 버튼)
- **기본 (Inactive)**: Background `rgba(255, 255, 255, 0.04)`, Color `#94a3b8`, Border `1px solid rgba(255, 255, 255, 0.08)`
- **활성 (Active)**: Background `rgba(16, 185, 129, 0.15)`, Color `#10b981`, Border `1px solid #10b981`, Weight 600, Glow 효과

---

## 7. 특화 컴포넌트 UI/UX 가이드 (Specialized Components)

### 7.1 터미널 스타일 윈도우 프레임 (Terminal Window)
백엔드 엔지니어의 정체성을 부각시키는 디자인 시그니처입니다.
- **상단 윈도우 바 (Window Bar)**:
  - 높이 `36px`, 배경 `#111622`, 하단 `1px solid var(--border-subtle)`
  - 좌측 신호등 닷: 🔴 `#f43f5e`, 🟡 `#f59e0b`, 🟢 `#10b981` (직경 11px, 간격 7px)
  - 중앙 타이틀: `bash - profile.sh` 또는 `architecture.py` (폰트 12px Mono, `#64748b`)
- **본문 영역**:
  - 패딩 `20px`, 폰트 `'JetBrains Mono'`, 에메랄드 프롬프트(`$` 또는 `>`) 애니메이션

---

### 7.2 나만 편집 가능한 자기소개란 (Admin In-place Edit UI)
- **일반 모드**:
  - 정갈한 텍스트 렌더링. 우측 하단 푸터에 은은한 자물쇠 아이콘(🔒) 배치 (`opacity: 0.4`, 호버 시 `1.0`).
- **PIN 인증 모달**:
  - 모달 배경: 반투명 글래스(`rgba(8, 11, 17, 0.85)` + Blur 12px)
  - 4자리 PIN 입력 필드: 중앙 정렬, 마스킹 처리(`● ● ● ●`), 폰트 크기 24px Mono, 초록빛 포커스 테두리.
- **편집 모드 활성화 시 (Active Edit State)**:
  - 자기소개 텍스트 박스 둘레에 **에메랄드 펄스 네온 보더** 생성 (`box-shadow: 0 0 0 2px #10b981, 0 0 16px rgba(16, 185, 129, 0.3)`).
  - 우측 상단에 플로팅 툴바 노출:
    - `[저장 완료 💾]` (Primary 버튼)
    - `[취소 ❌]` (Ghost 버튼)
    - `[JSON 백업 받기 📥]` (Secondary 버튼)

---

### 7.3 아키텍처 다이어그램 & 성과 지표 배지 (Case Study Card)
- **시스템 흐름도 영역**:
  - 카드 상단 50% 높이 배정, 백그라운드 그리드 도트 패턴(`grid 20px, dot 1px`)
  - 우측 상단 [돋보기 아이콘] 마우스 오버 시 전체화면 라이트박스 팝업 지원
- **정량적 성과 지표 배지 (Metrics Pill)**:
  - 예시: `⚡ Latency 240ms → 38ms (84% 단축)`
  - 스타일: 다크 그린 배경(`rgba(16, 185, 129, 0.12)`), 에메랄드 보더, 폰트 12px Mono, 볼드.

---

## 8. 엘리베이션, 섀도우 및 블러 (Elevation & Shadows)

```css
/* Card Drop Shadow */
--shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05);

/* Hover Elevation */
--shadow-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.85), 0 0 20px rgba(16, 185, 129, 0.2);

/* Neon Emerald Glow */
--glow-emerald: 0 0 24px rgba(16, 185, 129, 0.35);

/* Modal Backdrop */
--backdrop-blur: blur(16px);
```

---

## 9. 바로 복사해서 쓸 수 있는 완성형 CSS 디자인 토큰 (`variables.css`)

```css
/* ==========================================================================
   Tech Portfolio Design System Tokens (Terminal Emerald & Jet Black)
   ========================================================================== */

:root {
  /* 1. Color Palette - Jet Black & Obsidian Surfaces */
  --bg-base: #080b11;
  --bg-surface: #0f141c;
  --bg-card: #151b26;
  --bg-card-hover: #1b2332;
  --bg-glass: rgba(21, 27, 38, 0.8);

  /* 2. Brand & Accent - Terminal Matrix Emerald */
  --primary: #10b981;
  --primary-hover: #34d399;
  --primary-dark: #059669;
  --primary-glow: rgba(16, 185, 129, 0.35);
  --primary-subtle: rgba(16, 185, 129, 0.12);

  /* Accent Data Colors */
  --accent-cyan: #06b6d4;
  --accent-violet: #8b5cf6;
  --accent-amber: #f59e0b;
  --accent-red: #f43f5e;

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.15);
  --border-emerald: rgba(16, 185, 129, 0.3);

  /* 3. Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-code: #a7f3d0;

  /* 4. Font Families */
  --font-sans: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", Consolas, monospace;

  /* 5. Border Radius (Modern Rounded) */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* 6. Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;

  /* 7. Elevation & Shadows */
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05);
  --shadow-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.85), 0 0 20px rgba(16, 185, 129, 0.2);
  --glow-emerald: 0 0 24px rgba(16, 185, 129, 0.35);

  /* 8. Transitions */
  --transition-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
