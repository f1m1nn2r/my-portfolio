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
│   │   ├── Header.js              # 헤더
│   │   ├── Footer.js              # 풋터
│   │   ├── Navigation.js          # 메뉴
│   │   └── ProjectCard.js
│   ├── pages/                                                
│   │   ├── About.js               # 내 소개
│   │   ├── Experience.js          # 경력
│   │   └── Portfolio.js           # 작업물
│   │   └── Behind.js              # 비하인드, 어떻게 작업했는지
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
