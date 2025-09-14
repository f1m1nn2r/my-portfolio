# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 포트폴리오 구조 구상

<!-- prettier-ignore-start -->
portfolio/
├── public/
│   ├── images/                    # 포트폴리오 이미지, 프로필 사진
│   ├── resume.pdf                 # 이력서 파일
│   └── favicon.ico                # 파비콘 만들 수 있으면
├── src/
│   ├── components/                                           
│   │   ├── Header.jsx             # 헤더
│   │   ├── Footer.jsx             # 풋터
│   │   ├── Navigation.jsx         # 메뉴
│   │   └── ProjectCard.jsx
│   ├── pages/                                                
│   │   ├── About.jsx              # 내 소개
│   │   ├── Experience.jsx         # 경력
│   │   └── Portfolio.jsx          # 작업물
│   │   └── Behind.jsx             # 비하인드, 어떻게 작업했는지
│   ├── data/                                                 
│   │   ├── projects.js            # 포트폴리오 데이터
│   │   ├── experience.js          # 경력 데이터
│   ├── styles/                                               
│   │   ├── index.css              # 전체 css 임포트용
│   │   ├── abstracts/
│   │   │   └── _mixins.scss       # 믹스인 모음
│   │   │   └── _variables.scss    # 변수들(색상, 폰트 등)
│   │   │   └── _reset.scss        # 페이지 리셋
│   │   └── base/        
│   │       └── _globals.scss      # 공통 클래스, 기본 스타일
│   │   └── layout/        
│   │       └── _layout.scss       # 헤더/풋터
│   │   └── pages/        
│   │       └── _about.scss        # 내 소개
│   │       └── _experience.scss   # 경력
│   │       └── _portfolio.scss    # 포트폴리오
│   │       └── _behind.scss       # 비하인드, 어떻게 작업했는지
│   ├── hooks/                     # 커스텀 훅(필요시)
│   ├── utils/                     # 유틸리티 함수
│   ├── App.js
│   └── index.js
└── package.json
<!-- prettier-ignore-end -->

## 커밋 개인 규칙

- feat -> 새로운 기능 추가시
  - ex :
    feat(header): 메뉴 추가
    feat(portfolio): 네비게이션 컴포넌트 구현
- fix -> 버그 수정
  - ex :
    fix(mobile): 햄버거 메뉴 버튼 안보이는 이슈
    fix(safari): iOS Safari에서 애니메이션 깨짐 수정
- style -> 단순 스타일 변경(포맷팅, 색상 등)
  - ex :
    style(main): 히어로 섹션 배경 이미지 적용
    style(layout): 전체 여백 조정
- refactor -> 기능 변경 없이 코드 개선
  - ex :
    refactor(components): 컴포넌트 폴더 구조 개선
- docs -> 문서 변경
  - ex :
    docs(readme): 프로젝트 설명 업데이트
- chore -> 빌드 프로세스, 패키지 관리 등
  - ex :
    chore(deps): React 18로 업그레이드
- test -> 테스트 관련
  - ex :
    test(components): Header 컴포넌트 테스트 추가
- perf -> 성능 개선
  - ex :
    perf(images): 이미지 최적화 적용
