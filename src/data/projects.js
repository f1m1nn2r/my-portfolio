export const projects = [
  {
    id: 'all-services',
    category: '📱 홈페이지',
    label: '한눈에 보기',
    title: '홈런 초등 - 한눈에 보기(신규)',
    externalLink: 'https://www.home-learn.co.kr/observe/all-services.do',
    duration: '25.07 - 25.08 (약 1개월)',
    role: '기여도 100%',
    gallery: ['all-services.png', 'all-services-popup.png'],
    description: [
      '필터 기반 학습 콘텐츠 렌더링 시스템 구현',
      '개인화 테스트 결과 연동한 맞춤형 UI 개발',
      '확장 가능한 컴포넌트 아키텍처 설계',
    ],
    techStack: {
      Frontend: 'JavaScript (ES6+), jQuery, HTML5, CSS3',
      'UI Framework': 'Slick Slider (이미지 슬라이드), 반응형 디자인',
      'Data Handling': 'JSON API 통신, 실시간 데이터 필터링',
      'Cross-Platform': '모바일/데스크톱 호환 UI 시스템',
    },
    techFeatures: [
      {
        name: '🔍 실시간 필터링 시스템',
        description:
          '사용자 선택에 따라 콘텐츠를 즉시 필터링하고 개수를 실시간 표시',
      },
      {
        name: '🎬 인터랙티브 미디어 팝업',
        description: '동영상/이미지 통합 슬라이더와 스마트한 재생 제어 시스템',
      },
      {
        name: '⚡ 성능 최적화',
        description:
          'DOM 조작 최적화로 화면 깜빡임 방지 및 백그라운드 리소스 관리',
      },
      {
        name: '🎯 사용자 경험',
        description:
          "'다른 콘텐츠를 발견해보세요' 같은 친화적 안내로 이탈 방지",
      },
    ],
  },
  {
    id: 'mid',
    category: '📱 홈페이지',
    label: '홈런 중등',
    title: '홈런 중등 - 일부 리뉴얼',
    externalLink: 'https://mid.home-learn.co.kr/',
    duration: '25.06 - 25.06 [2주 소요]',
    role: '기여도 100%',
    gallery: [
      'mid-navigation.png',
      'mid-studyAppFreeDetail.png',
      'mid-mathtering.png',
    ],
    description: [
      '전체 사이트 네비게이션 시스템 설계 및 구현',
      '복잡한 다중 depth 메뉴 구조와 반응형 인터랙션 처리',
      '접근성 준수 및 사용자 경험 최적화',
    ],
    techStack: {
      Frontend:
        'JavaScript (ES6+), jQuery, HTML5, CSS3, Handlebars.js (템플릿 엔진)',
      'UI Framework': 'Slick Carousel (이미지 슬라이드)',
      'JavaScript Libraries':
        'Body-scroll-lock (스크롤 제어), Toggle 모듈 (커스텀 컴포넌트)',
    },
    techFeatures: [
      {
        name: '🎯 스마트 네비게이션 시스템',
        description:
          'URL 분석을 통한 현재 페이지 자동 감지 및 동적 서브메뉴 높이 관리',
      },
      {
        name: '📱 적응형 메뉴 구조',
        description:
          'PC/모바일 환경별 최적화된 인터랙션과 반응형 레이아웃 자동 전환',
      },
      {
        name: '♿ 웹 접근성 강화',
        description:
          '시맨틱 마크업과 ARIA 속성으로 스크린 리더 및 키보드 네비게이션 지원',
      },
      {
        name: '🔄 레거시 코드 개선',
        description:
          'div 남발 구조를 HTML5 시맨틱 태그로 전환하여 코드 품질 및 유지보수성 향상',
      },
    ],
  },
  {
    id: 'newsroom',
    category: '📱 홈페이지',
    label: '뉴스룸',
    title: '뉴스룸 - 리뉴얼/고도화',
    externalLink: 'https://www.home-learn.co.kr/newsroom/main.do',
    duration: '25.02 - 25.04 [2개월 소요]',
    role: '기여도 100%',
    description: [
      'UI 디자인 시스템 리뉴얼 대응',
      '재사용 가능한 공통 스크립트 모듈 개발',
      '관리자 권한별 예외처리 로직 구현',
    ],
    techStack: {
      Frontend: 'JavaScript (ES6+), jQuery, JSP/JSTL, CSS3',
      'UI Framework': 'Slick Carousel (이미지 슬라이드)',
      'Frontend Patterns': 'Template Literal (동적 렌더링)',
    },
    techFeatures: [
      {
        name: '🎨 적응형 레이아웃 시스템',
        description:
          '썸네일 유무에 따라 텍스트 중심 레이아웃으로 자동 전환하여 일관된 사용자 경험 제공',
      },
      {
        name: '📝 동적 텍스트 처리',
        description:
          '해시태그 5개 초과 시 말줄임표 처리 및 한국어 조사 자동 변환으로 자연스러운 UI 구현',
      },
      {
        name: '🔧 중앙 집중식 관리',
        description:
          '프로모션 배너를 footer 조건부 처리로 통합하여 1개 파일 수정으로 전체 관리 효율성 향상',
      },
      {
        name: '⚡ 코드 최적화',
        description:
          '3개 페이지 개별 공유 함수를 1개 통합 함수로 리팩토링하여 코드 재사용성 및 유지보수성 개선',
      },
    ],
  },
  {
    id: 'little',
    category: '📱 홈페이지',
    label: '리틀홈런',
    title: '리틀홈런 - 일부 리뉴얼/고도화',
    externalLink: 'https://little.home-learn.co.kr/main/index',
    duration: '24.03 - 24.06 [3개월 소요]',
    role: '기여도 100%',
    description: [
      '서버 마이그레이션 대응 코드 리팩토링',
      '관리자 기능 대체 스크립트 신규 개발',
      '관리자 권한별 예외처리 로직 구현',
    ],
    techStack: {
      Frontend: 'JavaScript (ES6+), jQuery, JSP, CSS3',
      'Frontend Patterns':
        'Template Literal (동적 렌더링), SPA-like Routing (URL 파라미터 기반)',
    },
    techFeatures: [
      {
        name: '📊 데이터 기반 동적 렌더링',
        description:
          'JavaScript 객체 배열과 Template Literal을 활용하여 단일 HTML로 다수의 공지사항 페이지 생성',
      },
      {
        name: '🔄 URL 파라미터 라우팅',
        description:
          'notice.html?p=1, ?p=2 방식으로 SPA와 유사한 사용자 경험 제공하며 개별 HTML 파일 생성 불필요',
      },
      {
        name: '🎯 조건부 UI 렌더링',
        description:
          'JSTL 조건문으로 결제내역 없는 사용자에게 직관적인 빈 상태 안내 메시지 및 이미지 표시',
      },
      {
        name: '🎨 사용자 경험 개선',
        description:
          '비밀번호 토글 기능과 현재 페이지 자동 활성화로 직관적인 인터랙션 및 내비게이션 제공',
      },
    ],
  },
  {
    id: 'i-screamedu',
    category: '📱 홈페이지',
    label: 'IR',
    title: 'IR (서브 페이지 일부 디자인 리뉴얼)',
    externalLink: 'https://www.i-screamedu.co.kr/index.do',
    gallery: [
      'ir-top-banner.png',
      'ir-about.png',
      'ir-ceo-message.png',
      'ir-edutech.png',
      'ir-financial-information.png',
    ],
  },
  {
    id: 'SuccessTips',
    category: '📱 홈페이지',
    label: '성공사례/성공팁',
    title: '홈런 초등 - 성공사례/성공팁(신규)',
    externalLink:
      'https://www.home-learn.co.kr/homelearn/news102/SuccessCase.html',
    gallery: ['success-case.png', 'success-tips.png'],
    duration: '',
    role: '기여도 100%',
  },
  {
    id: 'prepare-review-study',
    category: '📱 홈페이지',
    label: '학교공부 예·복습',
    title: '홈런 초등 - 학교공부 예·복습(디자인 리뉴얼)',
    externalLink:
      'https://www.home-learn.co.kr/homelearn/intro107/prepare-review-study.html',
  },
  {
    id: 'english-master',
    category: '📱 홈페이지',
    label: '영어완성',
    title: '홈런 초등 - 영어완성(디자인 리뉴얼)',
    externalLink:
      'https://www.home-learn.co.kr/homelearn/intro107/english-master.html',
  },
  {
    id: 'SpecialCont',
    category: '📱 홈페이지',
    label: '특별학습/에듀게임',
    title: '홈런 초등 - 특별학습/에듀게임(신규)',
    externalLink:
      'https://www.home-learn.co.kr/homelearn/intro107/SpecialCont.html',
    gallery: ['special-cont.png', 'edugame.png'],
  },
  {
    id: 'bookcafe',
    category: '📱 홈페이지',
    label: '홈런북카페',
    title: '홈런 초등 - 홈런북카페(신규)',
    externalLink:
      'https://www.home-learn.co.kr/homelearn/intro107/bookcafe.html',
  },
  {
    id: 'winter-break',
    category: '📄 일반 랜딩',
    label: '겨울방학',
    title: '겨울방학 잘 보내는 방법',
    externalLink: '',
  },
  {
    id: 'ise-campaign',
    category: '📄 일반 랜딩',
    label: '하반기 홈런',
    title: '하반기 홈런 소개 페이지',
    externalLink: '',
  },
  {
    id: 'ai-dream-ssam',
    category: '📄 일반 랜딩',
    label: 'AI 드림쌤',
    title: 'AI 드림쌤 티징 페이지',
    externalLink: '',
  },
  {
    id: 'summer-break',
    category: '📄 일반 랜딩',
    label: '여름방학',
    title: '여름방학 잘 보내는 방법',
    externalLink: '',
  },
];
