export const projects = [
  {
    id: 'all-services',
    label: '한눈에 보기',
    preview: '콘텐츠 필터링 시스템',
    title: '홈런 초등 - 한눈에 보기 신설',
    subtitle: '[필터·결과 기반 렌더링, 데이터 흐름 개선, 구조 설계]',
    description:
      '교육 콘텐츠를 효율적으로 탐색할 수 있도록 필터링 시스템을 구현했습니다. 사용자가 원하는 조건에 따라 실시간으로 콘텐츠를 필터링하고, 검색 결과를 직관적으로 표시하는 시스템을 개발했습니다. 특히 예외 상황 처리와 사용자 경험 개선에 중점을 두어 개발했습니다.',
    duration: '25.07.28 - 25.09.03 [약 1개월 소요]',
    role: '전체 작업 100%',
    usedTechs: [
      {
        name: 'JavaScript',
        level: 'proficient',
      },
      { name: 'jQuery', level: 'proficient' },
      { name: 'JSON API', level: 'experienced' },
      { name: 'Ajax', level: 'experienced' },
    ],
    link: 'https://www.home-learn.co.kr/observe/all-services.do',
    gallery: [
      {
        description: '메인 화면 스크린샷',
        image: 'all-services',
      },
      {
        description: '팝업 화면',
        image: 'all-services-popup',
      },
    ],
    results: [
      '서로 다른 데이터 소스(전체 DB, 맞춤형 데이터, 인기 TOP5) 통합',
      '백엔드 개발자와 협업하여 데이터 스키마부터 프론트엔드 로직까지 최적화',
      '일관된 상세 팝업 인터페이스 설계 및 구현',
      '실시간 필터링으로 사용자 맞춤형 콘텐츠 제공',
    ],
    features: [
      '필터 변경 시 서버 데이터 요청 및 콘텐츠 실시간 업데이트',
      '검색 결과 개수 표시 및 상세 정보 팝업 구현',
      '동영상/이미지 통합 슬라이더 구성',
      '각 콘텐츠마다 고유 ID를 부여해 클릭 시 ID 값과 동일한 상세 정보 팝업 형태로 표시',
      '검색 결과 없음 시 "다른 콘텐츠를 발견해보세요" 유도 메시지',
      'DOM 조작 최적화로 화면 깜빡임 최소화',
    ],
    table: [
      {
        category: '데이터',
        dataSources: [
          {
            description: '서버 DB 로드',
            file: 'onMoreResult.json',
            function:
              '서버에서 실시간으로 콘텐츠 데이터를 가져오는 핵심 데이터 소스',
          },
          {
            description: '학습법 찾기 연동',
            file: 'loadResultJsonDataBind.json',
            function: '개인별 맞춤 학습법 추천을 위한 데이터 바인딩',
          },
          {
            description: '인기 학습 콘텐츠 TOP5',
            file: 'topItems.json',
            function: '사용자들이 가장 많이 선택한 학습 콘텐츠 순위 데이터',
          },
        ],
      },
      {
        category: '스크립트',
        dataSources: [
          {
            description: '전체 스크립트 총괄',
            file: 'main.js',
            function: '모든 모듈을 통합 관리하는 메인 컨트롤러 역할',
          },
          {
            description: 'API 연동',
            file: 'api.js',
            function: '서버 DB 연결 및 TOP5 데이터 통신 처리',
          },
          {
            description: '필터 타입별 동적 체크박스',
            file: 'filter.js',
            function: '체크박스 상태 변경 및 필터 조건 관리 시스템',
          },
          {
            description: '상세 팝업',
            file: 'popup.js',
            function: '전체 페이지 스타일링 및 반응형 디자인',
          },
          {
            description: '학습 콘텐츠 생성',
            file: 'render.js',
            function: '동적 콘텐츠 HTML 생성 및 화면 렌더링',
          },
          {
            description: '슬라이더 출력',
            file: 'slider.js',
            function: '이미지/비디오 슬라이더 컴포넌트 구현',
          },
          {
            description: '공통 함수 출력',
            file: 'utils.js',
            function: '재사용 가능한 유틸리티 함수 모음',
          },
          {
            description: 'DOM 캐싱',
            file: 'domCache.js',
            function: 'DOM 요소 캐싱을 통한 성능 최적화',
          },
        ],
      },
      {
        category: '스타일',
        dataSources: [
          {
            description: '메인 스타일시트',
            file: 'style.scss',
            function: '전체 페이지 스타일링 및 반응형 디자인',
          },
        ],
      },
    ],
  },
  {
    id: 'mid',
    label: '홈런 중등',
    preview: '사용자 인터랙션 시스템',
    title: '홈런 중등 - 일부 리뉴얼',
    subtitle: '[메뉴 리뉴얼, nav 구조 정비, 신규 페이지 작업]',
    description:
      '홈런 중등 웹사이트의 사용자 경험 향상을 위해 전체 사이트 네비게이션 시스템을 재설계했습니다. 서브메뉴 높이 자동 계산, URL 기반 현재 페이지 감지, 반응형 메뉴 전환 등 동적 인터랙션을 구현하여 관리 효율성을 크게 개선했습니다. 또한 레거시 코드의 시맨틱 마크업 전환과 웹 접근성 표준 적용을 통해 코드 품질과 사용자 접근성을 동시에 향상시켰습니다.',
    duration: '25.06.13 - 25.07.02 [약 3주 소요]',
    role: '전체 작업 100%',
    usedTechs: [
      {
        name: 'JavaScript',
        level: 'proficient',
      },
      { name: 'jQuery', level: 'proficient' },
      { name: 'Handlebars.js', level: 'experienced' },
      { name: 'Body-scroll-lock', level: 'experienced' },
    ],
    link: 'https://mid.home-learn.co.kr/',
    gallery: [
      {
        description: '무료체험신청 스크린샷',
        image: 'mid-studyAppFreeDetail',
      },
      {
        description: '네비게이션 화면',
        image: 'mid-navigation',
      },
      {
        description: '홈런매스터링 스크린샷',
        image: 'mid-mathtering',
      },
    ],
    results: [
      '서브메뉴 높이 자동 계산 시스템으로 메뉴 관리 작업 80% 단축',
      '레거시 코드 리팩토링을 통한 div 태그 사용률 70% 감소 및 시맨틱 구조 전환',
      '통합 네비게이션 구조로 PC/모바일 중복 코드 관리 비용 절약',
    ],
    features: [
      '서브메뉴 동적 높이 관리 및 현재 페이지 표시',
      '스크롤 고정 헤더 (PC 환경 조건부 적용)',
      '다단계 학년 선택 시스템 구현',
      '개인정보 동의 관리 (전체/개별 연동)',
      '아코디언 FAQ 인터랙션',
      '시맨틱 마크업 구조 전면 개편 (SEO/접근성 향상)',
      'aria-label, role 속성 체계적 적용',
    ],
    timeline: [
      {
        category: '비효율적인 수동 작업',
        type: 'problem',
        details: [
          '서브메뉴 변경 시마다 CSS 높이값을 수동으로 계산하고 수정해야 하는 반복 작업이 발생했습니다.',
          'PC와 모바일 버전을 각각 별도 관리하여 코드 중복과 유지보수 어려움이 지속되었습니다.',
        ],
      },
      {
        category: '자동화 시스템 구축',
        type: 'solution',
        details: [
          'JavaScript 동적 높이 계산 시스템으로 서브메뉴 개수를 자동 감지하여 적절한 높이를 계산하도록 개선했습니다.',
          '하나의 통합 메뉴 구조에서 breakpoint 기반으로 PC/모바일 동작을 자동 전환하도록 구현했습니다.',
        ],
      },
      {
        category: '정량적 성과 달성',
        type: 'result',
        details: [
          '메뉴 관리 작업 시간 약 80% 단축으로 개발 효율성이 크게 향상되었습니다.',
          '중복 코드 제거로 유지보수성 개선 및 신규 메뉴 추가 시 수동 작업이 완전히 제거되었습니다.',
        ],
      },
    ],
  },
  {
    id: 'newsroom',
    label: '뉴스룸',
    title: '뉴스룸 - 리뉴얼/고도화',
    subtitle: '[UI 재구성, 공통 모듈화, 관리자 기능 안정화]',
    preview: '콘텐츠 UX 개선',
    duration: '25.02.26 - 25.04.28 [약 2개월 소요]',
    role: '전체 작업 100%',
    usedTechs: [
      {
        name: 'JavaScript',
        level: 'proficient',
      },
      { name: 'jQuery', level: 'proficient' },
    ],
    link: 'https://www.home-learn.co.kr/newsroom/main.do',
    gallery: [
      {
        description: '메인 화면 스크린샷',
        image: 'newsroom',
      },
    ],
    description:
      '뉴스룸 웹사이트의 코드 효율성과 사용자 경험 개선을 위해 전면 리뉴얼을 진행했습니다. 복잡한 카테고리별 조건문을 동적 데이터 매핑 구조로 개선하고, 페이지별 중복 공유 스크립트를 통합 시스템으로 리팩토링했습니다. 또한 디자인 시안에 명시되지 않은 한국어 조사 자동 처리 기능과 썸네일 유무에 따른 적응형 레이아웃을 자발적으로 구현하여 자연스러운 사용자 경험을 제공했습니다.',
    results: [
      '공유 기능 통합으로 중복 코드 60% 감소 및 유지보수 효율성 향상',
      '카테고리별 렌더링 구조 개선으로 메인 페이지 코드량 50% 단축',
      '중앙 집중식 배너 관리로 1개 파일 수정만으로 전체 사이트 관리 가능',
      '한국어 조사 자동 처리로 자연스러운 사용자 경험 구현',
    ],
    features: [
      '카테고리별 뉴스 데이터 동적 매핑 및 통합 렌더링',
      '검색 결과 페이지 한국어 조사 자동 변환 시스템',
      '썸네일 유무에 따른 적응형 레이아웃 자동 전환',
      '해시태그 5개 초과 시 말줄임표 처리 및 레이아웃 안정화',
      'SNS 공유 기능 데이터 속성 기반 통합 시스템',
      '프로모션 배너 조건부 노출 관리',
      'JSP 변수 재할당을 통한 코드 구조 최적화',
    ],
    timeline: [
      {
        category: '복잡하고 비효율적인 코드 구조',
        type: 'problem',
        details: [
          '카테고리별로 개별 조건문 처리와 중복된 공유 스크립트로 인한 코드 관리 어려움이 발생했습니다.',
          '주석 처리된 불필요 코드와 복잡한 중첩 조건문으로 가독성이 현저히 저하된 상태였습니다.',
        ],
      },
      {
        category: '통합 시스템 및 UX 개선',
        type: 'solution',
        details: [
          'JSP 변수 재할당 방식으로 카테고리별 데이터 매핑을 통합하고, 데이터 속성 기반 공유 시스템을 구축했습니다.',
          '한국어 조사 자동 처리 및 썸네일 유무에 따른 적응형 레이아웃으로 자연스러운 사용자 경험을 구현했습니다.',
        ],
      },
      {
        category: '정량적 성과 달성',
        type: 'result',
        details: [
          '공유 관련 코드량 60% 감소, 메인 페이지 렌더링 코드 50% 단축으로 개발 효율성이 크게 향상되었습니다.',
          '중앙 집중식 배너 관리로 1개 파일 수정만으로 전체 관리가 가능해져 유지보수성이 개선되었습니다.',
        ],
      },
    ],
  },
  {
    id: 'little',
    label: '리틀홈런',
    preview: '콘텐츠 관리 시스템 구축',
    title: '리틀홈런 - 리뉴얼/고도화',
    subtitle: '[서버 이전 대응, 코드 리팩토링, 신규 스크립트 개발]',
    duration: '25.02.26 - 25.04.28 [약 2개월 소요]',
    role: '전체 작업 100%',
    usedTechs: [
      {
        name: 'JavaScript',
        level: 'proficient',
      },
      { name: 'jQuery', level: 'proficient' },
    ],
    link: 'https://little.home-learn.co.kr/',
    gallery: [
      {
        description: '회원정보 수정 화면',
        image: 'little-modify-form',
      },
      {
        description: '고객센터 화면',
        image: 'little-notice',
      },
    ],
    description:
      '서버 이전에 따른 리틀홈런 웹사이트 리뉴얼 프로젝트로, 비효율적인 콘텐츠 관리 시스템을 개선하고 사용자 경험을 향상시켰습니다. 공지사항 추가 시마다 개별 HTML 파일을 수동 생성하던 방식을 JavaScript 객체 배열 기반 동적 템플릿 시스템으로 전환하고, 각 페이지마다 중복 구현되던 네비게이션 메뉴를 재사용 가능한 JSP 컴포넌트로 통합했습니다. 또한 결제내역이 없는 사용자를 위한 직관적인 빈 상태 안내와 비밀번호 토글 기능을 추가하여 전반적인 사용성을 개선했습니다.',
    results: [
      '공지사항 관리 시간 90% 단축으로 개발 효율성 대폭 향상',
      '네비게이션 메뉴 중복 코드 80% 감소 및 유지보수성 개선',
      '단일 HTML 템플릿으로 무제한 공지사항 처리 가능',
      'JSP 컴포넌트 기반 구조로 신규 페이지 개발 시간 단축',
    ],
    features: [
      'JavaScript 객체 배열 기반 공지사항 동적 템플릿 시스템',
      'URL 파라미터를 활용한 단일 페이지 다중 콘텐츠 처리',
      'JSP Tiles 기반 재사용 가능한 네비게이션 컴포넌트',
      'JSTL 조건문을 통한 빈 상태 사용자 안내 시스템',
      '화면 크기별 자동 이미지 최적화 및 중복 처리 방지',
      '비밀번호 가시성 토글 및 현재 페이지 자동 활성화',
      '반응형 웹 디자인 및 크로스 브라우징 지원',
    ],
    timeline: [
      {
        category: '비효율적인 콘텐츠 관리 시스템',
        type: 'problem',
        details: [
          '관리자 페이지 부재로 공지사항 추가 시마다 개발자가 직접 개별 HTML 파일을 수동 생성해야 했습니다.',
          '신규 가입자나 체험 사용자에게 결제내역이 없을 때 빈 화면만 노출되어 사용자 경험이 미흡했습니다.',
        ],
      },
      {
        category: '동적 템플릿 시스템 및 컴포넌트화',
        type: 'solution',
        details: [
          'JavaScript 객체 배열과 URL 파라미터를 활용해 단일 HTML로 모든 공지사항을 처리하는 동적 시스템을 구축했습니다.',
          'JSP 컴포넌트 기반 네비게이션과 JSTL 조건부 렌더링으로 재사용 가능한 구조를 설계했습니다.',
        ],
      },
      {
        category: '개발 효율성 및 사용성 향상',
        type: 'result',
        details: [
          '공지사항 관리 시간 90% 단축, 메뉴 관련 중복 코드 80% 감소로 개발 효율성이 크게 향상되었습니다.',
          '빈 상태 안내 메시지와 비밀번호 토글 기능 추가로 전반적인 사용자 경험이 개선되었습니다.',
        ],
      },
    ],
  },
];

export const otherWorks = [
  {
    category: '홈페이지',
    details: [
      {
        name: '지인추천',
        description: '지인추천 페이지 설명',
        period: '2025.09',
        link: 'https://www.home-learn.co.kr/jiin/JiinRecommendCreateUrl.do',
      },
      {
        name: '학교공부 예·복습',
        description: '학교공부 예·복습 페이지 설명',
        period: '2025.07',
        link: 'https://www.home-learn.co.kr/homelearn/intro107/prepare-review-study.html',
      },
      {
        name: '영어완성',
        description: '영어완성 페이지 설명',
        period: '2025.07',
        link: 'https://www.home-learn.co.kr/homelearn/intro107/english-master.html',
      },
      {
        name: '특별학습',
        description: '특별학습 페이지 설명',
        period: '2025.06',
        link: 'https://www.home-learn.co.kr/homelearn/intro107/SpecialCont.html',
      },
      {
        name: '스마트학습센터',
        description: '스마트학습센터 페이지 설명',
        period: '2025.06',
        link: 'https://www.home-learn.co.kr/center.do',
      },
      {
        name: '아이스크림에듀 소개',
        description: '아이스크림에듀 소개 페이지 설명',
        period: '2025.05',
        link: 'https://www.i-screamedu.co.kr/front/about01.html',
      },
      {
        name: '대표 인사말',
        description: '대표 인사말 페이지 설명',
        period: '2025.05',
        link: 'https://www.i-screamedu.co.kr/front/about02.html',
      },
      {
        name: '에듀테크',
        description: '에듀테크 페이지 설명',
        period: '2025.05',
        link: 'https://www.i-screamedu.co.kr/front/business02.html',
      },
      {
        name: '재무정보',
        description: '재무정보 페이지 설명',
        period: '2025.05',
        link: 'https://www.i-screamedu.co.kr/front/ir02financial.html',
      },
      {
        name: '성공사례',
        description: '성공사례 페이지 설명',
        period: '2025.05',
        link: 'https://www.home-learn.co.kr/homelearn/news102/SuccessCase.html',
      },
      {
        name: '성공팁',
        description: '성공팁 페이지 설명',
        period: '2025.05',
        link: 'https://www.home-learn.co.kr/homelearn/news102/SuccessTips.html',
      },
    ],
  },
  {
    category: '랜딩 페이지',
    details: [
      {
        name: '겨울방학 잘 보내는 방법',
        description: '겨울방학 잘 보내는 방법 페이지 설명',
        period: '2024.10',
        link: 'https://www.home-learn.co.kr/landing/ADLanding.do?lnd_no=3742',
      },
      {
        name: '하반기 홈런 소개',
        description: '하반기 홈런 소개 페이지 설명',
        period: '2024.10',
        link: 'https://www.home-learn.co.kr/front_html/iseCampaign.html',
      },
      {
        name: 'AI 드림쌤 티징',
        description: 'AI 드림쌤 티징 페이지 설명',
        period: '2024.07',
        link: 'https://www.home-learn.co.kr/front_html/AiDreamSSAM.html',
      },
      {
        name: '여름방학 잘 보내는 방법',
        description: '여름방학 잘 보내는 방법 페이지 설명',
        period: '2024.07',
        link: '',
      },
    ],
  },
  {
    category: '기타',
  },
];
