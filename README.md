# My Site

[![React](https://img.shields.io/badge/React-18-61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/MUI-6-007FFF)](https://mui.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5-FF4154)](https://tanstack.com/query)
[![Zustand](https://img.shields.io/badge/Zustand-5-000000)](https://github.com/pmndrs/zustand)

> React + Vite + Tailwind + MUI 기반 다국어 포트폴리오 템플릿

---

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [핵심 기능](#핵심-기능)
- [아키텍처 요약](#아키텍처-요약)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [사용 가능한 스크립트](#사용-가능한-스크립트)
- [환경 변수](#환경-변수)
- [커스터마이징 가이드](#커스터마이징-가이드)
- [배포 노트](#배포-노트)
- [추가 팁](#추가-팁)

---

## 프로젝트 개요

- Hero · About · Projects · Contact 단일 페이지 흐름
- 한국어 · 영어 · 일본어 지원 다국어 포트폴리오 템플릿
- Tailwind 유틸리티 + MUI 컴포넌트 하이브리드 UI
- Zustand 테마 상태와 로컬 스토리지 동기화 구조
- TanStack Query 캐싱 전략 기반 전역 데이터 레이어
- `.env` 기반 사이트 소유자·연락처 커스터마이징 옵션

---

## 기술 스택

- React 18 + TypeScript 5 조합
- Vite 5 번들링·개발 서버
- Tailwind CSS 3 + PostCSS 파이프라인
- MUI 6 컴포넌트 라이브러리
- TanStack Query 5 데이터 페칭 레이어
- Zustand 5 전역 상태 스토어
- ESLint 9 + Prettier 3 품질 툴링

---

## 핵심 기능

- 다국어 지원 · `src/shared/i18n` 리소스 · LanguageDetector · LanguageSwitcher UI · 브라우저 언어 자동 감지
- 폰트 스위칭 · `src/shared/fonts/fontManager.ts` · 언어별 폰트 스택 · `lang` 속성 동기화
- 테마 토글 · `src/features/theme/theme.store.ts` · `initializeTheme()` 바디 클래스 세팅 · 로컬 스토리지 보존
- 디자인 일관성 · `AppProviders` ThemeProvider · Tailwind `dark` 클래스 결합
- 데이터 페칭 준비 · React Query 기본 옵션 (`staleTime`, `refetchOnWindowFocus`)
- 타입 안전 구성 · `src/shared/config/links.ts` 상수 · `@/*` 경로 별칭
- 정적 자산 구조화 · 다국어 JSON 카피 · resume 링크 · 환경 변수 기반 메타데이터

---

## 아키텍처 요약

- Providers 레이어 · `src/app/providers/AppProviders.tsx` · React Query 클라이언트 + MUI 테마 래퍼
- Routing UI 레이어 · `src/App.tsx` · Hero/About/Projects/Contact 섹션 레이아웃
- Language 레이어 · `src/features/language/LanguageSwitcher.tsx` · 언어 선택 인터페이스
- Theme 레이어 · `src/features/theme/theme.store.ts` · `ThemeToggle.tsx` · 테마 상태 스토어 + 토글 버튼
- Internationalization 레이어 · `src/shared/i18n/index.ts` · i18next 초기화 · 폰트 이벤트 훅
- Content Config 레이어 · `src/shared/config/{site,links}.ts` · 사이트 메타데이터 상수
- Styling 레이어 · `src/index.css` · `tailwind.config.js` · Tailwind 베이스 · 색상 확장

---

## 프로젝트 구조

```
.
├── public/
├── src/
│   ├── app/
│   │   └── providers/
│   ├── features/
│   │   ├── language/
│   │   └── theme/
│   ├── shared/
│   │   ├── config/
│   │   ├── fonts/
│   │   └── i18n/
│   │       └── locales/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 시작하기

```bash
npm install
npm run dev
```

- 권장 Node 버전 · 18 이상
- 개발 서버 주소 · `http://localhost:5173`
- 언어 전환 · 헤더 `Language` 셀렉트 · 브라우저 언어 감지
- 테마 토글 · 헤더 아이콘 버튼 · 로컬 스토리지 동기화

---

## 사용 가능한 스크립트

- `dev` · 로컬 개발 서버 실행
- `build` · `tsc -b` 후 프로덕션 번들 생성
- `preview` · 빌드 결과 미리보기 서버
- `lint` · ESLint 검사
- `format` · Prettier 정렬

---

## 환경 변수

- 설정 파일 · `.env` · `.env.local` · 기타 Vite 규칙 준수 파일

```env
VITE_SITE_OWNER="Jack Lee"
VITE_CONTACT_EMAIL="jack@example.com"
```

- `VITE_SITE_OWNER` · 헤더 브랜드 라벨 · 푸터 저작권 문구
- `VITE_CONTACT_EMAIL` · Contact 버튼 대상 이메일 주소

---

## 커스터마이징 가이드

- 텍스트·번역 · `src/shared/i18n/locales/*/common.json` (projects.items 배열 포함)
- 네비게이션·소셜 링크 · `src/shared/config/links.ts` (resume 링크 사용 시 `public/resume.pdf` 업로드 필요)
- 사이트 기본값 · `src/shared/config/site.ts` (.env 미설정 시 폴백 문자열 포함)
- 테마 팔레트 · `tailwind.config.js` (`theme.extend.colors.primary` 커스터마이징)
- 글로벌 스타일 · `src/index.css` · `AppProviders.tsx` MUI 테마 옵션
- 폰트 관리 · `src/shared/fonts/fontManager.ts` · 언어별 CSS 변수 헬퍼
- 레이아웃 편집 · `src/App.tsx` Hero/About/Projects/Contact 구성

---

## 배포 노트

- 정적 호스팅 · `npm run build` 산출물(`dist/`) 업로드
- 대상 플랫폼 · Vercel · Netlify · GitHub Pages 등 SPA 호스팅 환경
- 환경 변수 제한 · 빌드 타임 Vite prefix(`VITE_`) 필수 · 공개 가능한 값 권장
- React Query 확장 · `AppProviders` `QueryClient` 옵션 조정으로 캐싱·에러 전략 관리

---

## 추가 팁

- VS Code 확장 추천 · ESLint · Tailwind CSS IntelliSense · i18n Ally
- 테스트 전략 후보 · Storybook · Vitest · React Testing Library
- 접근성 점검 툴킷 · Lighthouse · axe DevTools
- 배포 전 체크리스트 · `npm run lint` · `npm run build`

---

🌟 아이디어 · 개선 제안 환영
