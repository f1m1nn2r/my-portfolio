# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 포트폴리오 구조 구상

portfolio/
├── public/
│ ├── images/ # 포트폴리오 이미지, 프로필 사진
│ ├── resume.pdf # 이력서 파일
│ └── favicon.ico # 파비콘 만들 수 있으면
├── src/
│ ├── components/  
│ │ ├── Layout.jsx # 전체 레이아웃 구조 설정(Outlet)
│ │ ├── Header.jsx # 헤더
│ │ ├── Footer.jsx # 풋터
│ │ ├── Navigation.jsx # 메뉴
│ ├── pages/  
│ │ ├── About.jsx # 내 소개
│ │ ├── Experience.jsx # 경력
│ │ └── Portfolio.jsx # 작업물
│ │ └── Contact.jsx # 연락처
│ │ └── Behind.jsx # 비하인드, 어떻게 작업했는지
│ ├── data/  
│ │ ├── projects.js # 포트폴리오 데이터
│ │ ├── experience.js # 경력 데이터
│ ├── styles/  
│ │ ├── index.css # 전체 css 임포트용
│ │ ├── abstracts/
│ │ │ └── \_mixins.scss # 믹스인 모음
│ │ │ └── \_variables.scss # 변수들(색상, 폰트 등)
│ │ │ └── \_reset.scss # 페이지 리셋
│ │ └── base/  
│ │ └── \_globals.scss # 공통 클래스, 기본 스타일
│ │ └── layout/  
│ │ └── \_layout.scss # 헤더/풋터
│ │ └── pages/  
│ │ └── \_about.scss # 내 소개
│ │ └── \_experience.scss # 경력
│ │ └── \_portfolio.scss # 포트폴리오
│ │ └── \_portfolioDetail.scss # 포트폴리오 상세 내용
│ │ └── \_behind.scss # 비하인드, 어떻게 작업했는지
│ ├── hooks/ # 커스텀 훅(필요시)
│ ├── utils/ # 유틸리티 함수(필요시)
│ ├── App.js
│ └── index.js
└── package.json

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

## 포트폴리오 동작

1. PortfolioNavigation.jsx:
   projects.js 배열을 순회 -> 각 프로젝트의 id를 NavLink에 설정
2. App.jsx:
   클릭 시 /portfolio/all-services 같은 URL로 이동
3. PortfolioDetail.jsx:
   useParams()로 URL의 :projectId 부분을 가져옴 (projects.js의 id 값)
4. projects.find()로 해당 id와 일치하는 프로젝트 객체를 찾음

## 포트폴리오 내 라우팅 동작

1. {}:
   처음 빈 객체로 시작
2. project:
   { id: 'all-services', category: '📱 홈페이지', label: '한눈에 보기'.... }
3. acc:
   acc에는 project.category가 없으므로, acc[project.category] = [] 실행
   -> {'📱 홈페이지': []}
4. acc[project.category].push(project):
   {'📱 홈페이지': [{id: 'all-services', ...}]}
5. 이어서 두 번째 순회:
   {'📱 홈페이지': [{id: 'all-services', ...}]} 값을 갖고 있는 상태이므로 if 조건문 건너 뜀
   -> acc[project.category].push(project); 실행
6. acc[project.category].push(project):
   -> {'📱 홈페이지': [{id: 'all-services', ...}, {id: 'SuccessTips',}]}
7. return acc:
   -> acc로 전달되어 최종적으로 acc는 "하나"의 객체를 반환함
8. Object.entries:
   acc 객체는 map 메서드를 사용할 수 없어, Object.entries로 배열로 변환시킴
   [
   ["📱 홈페이지", [{ ... }, { ... }]],
   ["💻 일반 랜딩", [{ ... }]]
   ]
