export const publicContactEmail = 'gusals0528@naver.com';

// 사용자에게 제공받은 정보만 미리보기 사례로 사용한다.
export const skills = [
  { id: 'arduino', title: '아두이노·센서', summary: '센서 입력부터 장치 제어까지', icon: 'chip', lessons: ['아두이노 기초 코딩과 입출력 장치 제어', '환경 센서와 조건별 자동제어', '스마트팜 등 제작 프로젝트'], tools: 'Arduino · LED · 모터 · 환경 센서' },
  { id: 'python', title: 'Python·데이터 분석', summary: '데이터를 정리하고 그래프로 설명', icon: 'chart', lessons: ['Python 기초 문법', '데이터 정제·필터링과 수치 연산', '데이터 시각화와 결과 보고서'], tools: 'Python · pandas · NumPy · Matplotlib' },
  { id: 'ai', title: 'AI·피지컬AI', summary: 'AI의 판단을 실제 동작으로 연결', icon: 'ai', lessons: ['이미지 데이터 수집과 분류 모델 제작', 'AI카메라 인식·분류 원리', 'AI와 로봇·장치 제어 연계'], tools: 'Teachable Machine · AI카메라 · 로봇팔' },
  { id: 'drone', title: '드론', summary: '비행 원리부터 코딩·촬영 기초까지', icon: 'drone', lessons: ['안전 수칙과 조종·비행 원리', '블록코딩·Python 비행 제어', '간단한 촬영 이론과 기법'], tools: 'Tello · 블록코딩 · Python' },
  { id: 'printing', title: '3D 모델링·프린팅 교육', summary: '간단한 설계부터 실제 출력까지', icon: 'cube', lessons: ['Tinkercad 도형 조합과 기초 모델링', '슬라이싱·출력 준비', '프린터 안전과 기초 운용'], tools: 'Tinkercad · Ender-3·5 · Bambu Lab' },
  { id: 'canva', title: '생성형 AI·Canva', summary: '아이디어를 콘텐츠로 표현', icon: 'pen', lessons: ['생성형 AI와 프롬프트 기초', '포스터·영상·발표자료 제작', '초등학교 3~6학년 Canva 교육'], tools: 'Gemini · Canva · 클로바노트' },
  { id: 'web', title: '웹 제작·대시보드', summary: '센서 데이터를 웹에서 확인하고 제어', icon: 'web', lessons: ['HTML과 AI 활용 웹 제작', 'Web Serial 양방향 데이터 연동', 'API·JSON·데이터 시각화'], tools: 'HTML · Antigravity · Web Serial · Chart.js' },
];
export const projects = [
{"id": "sprout-c-gyeonggi", "title": "2026 디지털새싹 C형 경기권", "institution": "주관기관 (사)한국능률협회", "summary": "2026 디지털새싹 C형 경기권 프로그램을 위한 교구 모델링 납품.", "role": "교구 모델링 납품", "period": "2026", "category": "making", "tags": ["렌더링", "3D프린팅 키트"], "skillIds": [], "group": "modeling"},
{"id": "sprout-extra-parts", "title": "2026 디지털새싹 기타 필요 부품 요청", "institution": "", "summary": "디지털새싹 프로그램의 기타 필요 부품 요청에 따른 모델링 작업.", "role": "부품 모델링", "period": "2026", "category": "making", "tags": ["렌더링", "3D프린팅 키트"], "skillIds": [], "group": "modeling"},
{"id": "sprout-b-national", "title": "2026 디지털새싹 B형 전국권", "institution": "주관기관 한국로봇융합연구원", "summary": "2026 디지털새싹 B형 전국권 프로그램을 위한 교구 모델링 납품.", "role": "교구 모델링 납품", "period": "2026", "category": "making", "tags": ["렌더링", "레이저커팅 키트"], "skillIds": [], "group": "modeling"},
  { id: 'climate-academy', title: '고양시민 기후테크 아카데미', institution: '한국항공대학교 산학협력단·고양특례시', period: '2026.06 ~ 2026.11', role: '강사', summary: '블록 코딩과 Python, 센서 제어와 웹 대시보드를 연결하는 교육.', tags: ['아두이노', 'Python', '웹'], skillIds: ['arduino', 'python', 'web'] },
  { id: 'digital-sprout', title: 'AI·로봇·드론 융합 교육', institution: '한국항공대학교 산학협력단', period: '2025.06 ~ 현재', role: '디지털새싹 주강사', summary: '초·중·고 대상 AI카메라, 로봇팔과 Python 드론 제어 교육.', tags: ['AI', '드론'], skillIds: ['ai', 'drone'] },
  { id: 'hanam-3d', category: 'teaching', title: '3D 모델링과 프린팅 실습', institution: '하남시청소년수련관', period: '2025.06', role: '코딩 강사', summary: '경기이룸학교에서 간단한 입체 설계와 3D 프린팅 실습 지도.', tags: ['3D 모델링', '3D 프린팅'], skillIds: ['printing'] },
];
projects.push(
  { id: 'diy-gif', title: 'DIY GIF 장치 전시', institution: '2025 메이커 페어 · 2026 헬로메이커', period: '2025.09 / 2026.09', role: '부스 운영', summary: 'DIY GIF 장치를 소개하고 부스를 운영한 제작·전시 활동.', tags: ['메이커', '전시'], category: 'making', skillIds: [] },
);
export const experience = [
  ['2026.07 ~ 현재', '인천연수초등학교', '디지털튜터', 'AI 및 디지털 기기 활용 교육 지원'],
  ['2026.06 ~ 2026.11', '한국항공대학교 산학협력단·고양특례시', '강사', '2026 고양시민 기후테크 아카데미'],
  ['2026.10 ~ 현재', '한국로봇융합연구원', '디지털새싹 보조강사', '6축 로봇팔 가동 및 Python 언어 교육'],
  ['2026.05', '경북테크노파크', '연수 강사', '과학관 공동 개발 프로그램 강사연수'],
  ['2025.06 ~ 현재', '한국항공대학교 산학협력단', '디지털새싹 주강사', 'AI카메라, 로봇팔, Python 드론 제어'],
  ['2025.06', '하남시청소년수련관', '코딩 강사', '3D 모델링 및 3D 프린팅 실습 지도'],
  ['2023.12.18 ~ 2023.12.22', '상지대학교 산학협력단', '디지털새싹 주강사', '드론·RC카 메이커캠프'],
  ['2023.12.21', '원주고등학교', '주강사', '드론 촬영 조종 및 촬영 기법 배우기'],
  ['2023.12.04 ~ 2023.12.06', '홍천중학교', '주강사', '메이커캠프_드론, 마이크로캠프'],
  ['2023.06.14', '흥양초등학교', '보조강사', '인공지능으로 햄스터 로봇 구동하기'],
  ['2023.06.10', '남원주중학교', '보조강사', '드론으로 코딩하고 날려보기'],
  ['2023.06.08 ~ 2023.06.16', '화천고등학교', '주강사', '텔로(Tello)드론으로 코딩하고 날려보기'],
  ['2023.05.25 ~ 2023.05.26', '강원중학교', '주강사', '메이커스페이스와 함께하는 2023 SW/AI 메이커 캠프'],
  ['2023.05.24 ~ 2023.06.14', '상지여자고등학교', '주강사', '공학동아리 단기 강의'],
  ['2023.04.17 ~ 2023.04.20', '산현초등학교', '주강사', '드론체험캠프'],
  ['2023.04.12 ~ 2023.04.19', '주진초등학교', '주강사', '드론동아리 드론캠프'],
  ['2022.07.06 ~ 2022.07.14', '평원중학교', '주강사', '창의드론캠프'],
  ['2021.12.06', '원주여자중학교', '주강사', '창의융합 메이커스 캠프'],
  ['2021.11.29 ~ 2021.11.30', '고산초등학교', '보조강사', '단기드론캠프'],
  ['2021.11.25', '오동초등학교', '주강사', '핑퐁로봇으로 자동차 만들기'],
  ['2021.11.19 ~ 2021.11.29', '상지대학교 제품디자인학과', '멘토', '기말 과제 전자부품 부문 멘토링'],
  ['2021.11.13', '상지대학교', '주강사', '2021 메이커스페이스 비교과프로그램'],
  ['2021.11.05', '원주공업고등학교', '주강사', '창의유합 메이커 진로캠프'],
].map(([period, institution, role, description]) => ({ period, institution, role, description }));

// 기관별 활동 기간과 개별 수업의 진행 기간을 구분한다.
const sproutClasses = [["2025.06", "영등포고등학교", "피지컬AI를 활용한 Python 드론 제어"], ["2025.07", "서울초당초등학교", "AI카메라를 활용한 AI 원리 이해"], ["2025.07", "서울광진초등학교", "AI카메라를 활용한 AI 원리 이해"], ["2025.07", "송내초등학교", "AI카메라를 활용한 AI 원리 이해"], ["2025.07", "인천아라초등학교", "빛 소리 탐험대 · 안전지킴이 로봇 챌린지"], ["2025.07", "마송중앙초등학교", "AI카메라를 활용한 AI 원리 이해"], ["2025.07 ~ 2025.08", "강남미래교육센터", "로봇팔과 AI카메라를 활용한 우주자원 채굴"], ["2025.10", "고양중학교", "로봇팔과 AI카메라를 활용한 우주자원 채굴"], ["2025.11", "하남시청소년수련관", "로봇팔과 AI카메라를 활용한 우주자원 채굴"], ["2026.07", "상안중학교", "우주개척 Lv.1"]];
experience.find(row => row.institution === '한국항공대학교 산학협력단').classes = sproutClasses.filter(item => item[1] !== '인천아라초등학교');
// 인천아라초 수업은 조선대학교 산학협력단 주관 이력으로 구분한다.
experience.splice(experience.findIndex(row => row.institution === '하남시청소년수련관'), 0, {
  period: '2025.07', institution: '조선대학교 산학협력단', role: '디지털새싹 주강사',
  description: '빛 소리 탐험대 · 안전지킴이 로봇 챌린지',
  classes: sproutClasses.filter(item => item[1] === '인천아라초등학교')
});
experience.find(row => row.institution === '한국로봇융합연구원').classes = [['2026.10', '동원동우고등학교', '협동로봇과 함께 떠나는 스마트 기술 탐험']];
experience.find(row => row.institution === '상지대학교 산학협력단').classes = [
  ['2023.12', '북원여자고등학교', '디지털새싹캠프_메이커캠프_RC카'],
  ['2023.12', '동해광희중학교', '디지털새싹캠프_메이커캠프_드론'],
];
experience.forEach(row => { row.status = row.period.includes('현재') ? '진행 중' : ''; });
experience[0].schedule = '2026.12 종료 예정';
experience[1].status = '';

// 작업 유형은 목록 필터와 카드 표시에 공통으로 사용한다.
projects.forEach(project => {
  project.category = project.group === 'modeling' ? 'modeling'
    : project.id === 'diy-gif' ? 'exhibition'
    : 'teaching';
});

// 제작 시기가 제공되지 않은 사례에는 임의의 날짜를 표시하지 않는다.
projects.push(...[{"id": "ubion-deepco-mini", "title": "딥코 미니 기기 활용 과정", "institution": "주식회사 유비온", "period": "", "role": "교안 제작", "summary": "딥코 미니 기기 활용 과정 교안 제작.", "tags": ["교안 제작"], "skillIds": [], "category": "curriculum", "categories": ["curriculum"]}, {"id": "ubion-ai-workbook", "title": "AI 동행 프로젝트", "institution": "주식회사 유비온", "period": "", "role": "워크북 제작", "summary": "학습 목표에 맞춘 워크북 제작.", "tags": [], "skillIds": [], "category": "workbook", "categories": ["workbook"]}]);
// B형 교안 제작 이력은 교구 모델링 사례에서 별도 수행 기관으로 구분한다.
const sproutBProject = projects.find(project => project.id === 'sprout-b-national');
sproutBProject.categories = ['modeling', 'curriculum'];
sproutBProject.title = '디지털새싹 B형 전국권';
sproutBProject.institution = '한국로봇융합연구원 · 대학·연구기관';
sproutBProject.period = '2025 ~ 2026';
sproutBProject.role = '교구 모델링 납품 · 교안 제작';
sproutBProject.workRows = [
  { period: '2026', institution: '한국로봇융합연구원', title: '디지털새싹 B형 전국권', role: '교구 외관 모델링 및 레이저커팅 시제품 제작' },
  { period: '2025 ~ 2026', institution: '대학·연구기관', title: '디지털새싹 B형 전국권', role: '단계별 에듀테크 학습 교안 제작' },
];
const climateProject = projects.find(project => project.id === 'climate-academy');
climateProject.categories = ['teaching', 'curriculum'];
climateProject.role = '교안 제작 · 강사';
climateProject.summary = '고양시민 기후테크 아카데미의 교안을 직접 제작하고 강의를 진행했습니다. 블록코딩·Python·센서 제어·웹 대시보드를 연결하는 교육입니다.';
climateProject.tags = ['교안 제작', '아두이노', 'Python', '웹', 'Codex', 'Antigravity', '생성형 AI', 'Google Colab', 'AI 리터러시', 'API 기초 및 AI API 활용'];
experience.find(row => row.description === '2026 고양시민 기후테크 아카데미').description = '2026 고양시민 기후테크 아카데미 교안 직접 제작 및 강의';

// 디지털새싹 사례와 경력 페이지는 동일한 기관별 강의 데이터를 사용한다.
const sproutProject = projects.find(project => project.id === 'digital-sprout');
sproutProject.title = '디지털새싹 에듀테크 교육';
sproutProject.tags = ['아두이노 기반', 'AI 리터러시', '피지컬 AI', '드론', '블록코딩', '파이썬 코딩', '로봇팔'];
sproutProject.careerRows = experience.filter(row => row.role === '디지털새싹 주강사' || row.role === '디지털새싹 보조강사');
sproutProject.institution = '한국로봇융합연구원 · 항공대 · 조선대 · 상지대';
sproutProject.summary = '아두이노 기반 기기 활용, AI 리터러시·피지컬 AI, 드론·로봇팔 제어, 블록코딩·파이썬 코딩 등 각 주관기관의 교안에 맞는 에듀테크 교육 강사로 활동했습니다.';

// 하남시청소년수련관 사례는 교안 제작과 강의를 함께 수행했다.
const hanamProject = projects.find(project => project.id === 'hanam-3d');
hanamProject.categories = ['teaching', 'curriculum'];
hanamProject.role = '주강사 및 교안 제작';
hanamProject.summary = '경기이룸학교 3D 모델링·프린팅 실습 교안을 제작하고 강의를 진행했습니다.';
experience.find(row => row.institution === '하남시청소년수련관').role = '주강사 및 교안 제작';
experience.find(row => row.institution === '하남시청소년수련관').description = '3D 모델링 및 3D 프린팅 실습 교안 제작·강의';

// 3D프린팅 교육 사례의 기관별 이력은 기간을 각각 표시한다.
hanamProject.institution = '하남시청소년수련관 · 상지대학교';
hanamProject.period = '2021.11 / 2025.06';
hanamProject.careerRows = [
  { institution: '상지대학교', role: '주강사', classes: [['2021.11.13', '2021 메이커스페이스 비교과프로그램', '도전 3D프린팅']] },
  { institution: '하남시청소년수련관', role: '주강사 및 교안 제작', classes: [['2025.06', '2025 경기이룸학교', '팅커캐드 3D 모델링 및 3D프린터 활용 교육']] },
];

// 제품 설계부터 교안과 강의까지 함께 수행한 과학관 연계 사례.
projects.push({
  id: 'science-museum-space', title: '과학관 연계 협력 프로그램',
  institution: '테크노파크', period: '2025.10', role: '3D 모델링 · 교안 제작 · 강사',
  summary: '자이로 센서와 우주 콘셉트를 결합한 교구 설계, 교안 제작 및 강의.',
  tags: ['교구 제작'], skillIds: ['printing', 'arduino'],
  category: 'modeling', categories: ['modeling', 'curriculum', 'teaching'],
});
projects.push({
  id: 'automatic-target-kit', title: '자동 표적판 키트',
  institution: '', period: '2023.05', role: '외주 설계·제작',
  summary: '고무줄 총으로 쓰러뜨린 표적을 감지해 자동으로 복귀시키는 키트 제작.',
  tags: ['렌더링', '레이저커팅 키트'], skillIds: ['arduino'],
  category: 'modeling', categories: ['modeling'],
});
projects.push({
  id: 'lightweight-four-axis-arm', title: '재료 최소화 4축 로봇팔',
  institution: '', period: '2026.09', role: '3D 모델링 · 3D 프린팅 · 디지털 트윈 구현',
  summary: 'MG90S 중심의 경량 4축 로봇팔과 가변저항 입력부를 제작해 Web Serial로 연결.',
  tags: ['3D프린팅 키트', '디지털 트윈'], skillIds: ['arduino', 'web', 'printing'],
  category: 'modeling', categories: ['modeling'],
});
projects.push({
  id: 'yeonsu-canva-music-video', title: 'Canva AI 뮤직비디오 만들기',
  institution: '인천연수초등학교', period: '2026.09 ~ 2026.12', role: '디지털튜터 · 교안 제작',
  summary: '초등학교 5학년 대상 Canva 기초부터 Suno AI 음악·Canva AI 영상 제작까지 연결한 수업.',
  tags: ['Canva', 'Canva AI', 'Suno AI'], skillIds: ['canva'],
  category: 'teaching', categories: ['teaching', 'curriculum'],
});
projects.push({
  id: 'yeonsu-gemini-literacy', title: 'AI 프롬프트 엔지니어링 및 AI 리터러시',
  institution: '인천연수초등학교', period: '2026.10', role: '디지털튜터 · 교안 제작',
  summary: '초등학교 6학년 대상 Gemini 프롬프트 기초 실습과 AI 사용 시 주의사항 교육.',
  tags: ['Gemini'], skillIds: [],
  category: 'teaching', categories: ['teaching', 'curriculum'],
});
experience.find(row => row.institution === '인천연수초등학교').description = 'AI·디지털 기기 활용 지원, 5학년 Canva 영상 제작 및 6학년 Gemini·AI 리터러시 수업·교안 제작';
experience.push({ period: '2025.10', institution: '테크노파크', role: '강사 · 교안 제작',
  description: '과학관 연계 협력 프로그램 교구 3D 모델링·제작 및 강의' });
