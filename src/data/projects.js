export const projects = [
  {
    id: "all-services",
    category: "홈페이지",
    label: "한눈에 보기",
    image: "../../public/images/",
    link: "https://www.home-learn.co.kr/observe/all-services.do",
    duration: {
      start: "25.07",
      end: "25.08",
      display: "25.07 - 25.08 [약 1개월 소요]",
    },
    description: {
      first: "필터 기반 학습 콘텐츠 렌더링 시스템 구현",
      second: "개인화 테스트 결과 연동한 맞춤형 UI 개발",
      third: "확장 가능한 컴포넌트 아키텍처 설계",
    },
    techStack: {
      Frontend: "JavaScript (ES6+), jQuery, HTML5, CSS3",
      UIFramework: "Slick Slider (이미지 슬라이드), 반응형 디자인",
      DataHandling: "JSON API 통신, 실시간 데이터 필터링",
      CrossPlatform: "모바일/데스크톱 호환 UI 시스템",
    },
    techFeatures: [
      {
        name: "🔍 실시간 필터링 시스템",
        description:
          "사용자 선택에 따라 콘텐츠를 즉시 필터링하고 개수를 실시간 표시",
      },
      {
        name: "🎬 인터랙티브 미디어 팝업",
        description: "동영상/이미지 통합 슬라이더와 스마트한 재생 제어 시스템",
      },
      {
        name: "⚡ 성능 최적화",
        description:
          "DOM 조작 최적화로 화면 깜빡임 방지 및 백그라운드 리소스 관리",
      },
      {
        name: "🎯 사용자 경험",
        description:
          "'다른 콘텐츠를 발견해보세요' 같은 친화적 안내로 이탈 방지",
      },
    ],
  },
];
