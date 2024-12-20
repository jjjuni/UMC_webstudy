<br>

# <img height="27px" width="27px" src="https://github.com/user-attachments/assets/9c7482c9-e6d0-4416-93ae-35b52f4701ea"/> 영화 사이트 제작 | WATCHA

<br>

## 🎈 개요

![나만의 블로그](https://github.com/user-attachments/assets/dbfacb60-245d-4aa1-9d12-67f8cc589e3e)

- 개인 블로그 사이트 제작
- Next.js를 익히며 각종 기능 사용

<br>

## 🛠️ 기능 및 구현
> ### ⛓️‍💥 Routing
> 
> - Next.js 파일 기반 라우팅
> 
> ### 🤗 회원
> 
> - 로그인/회원가입
>     - `FormData`유효성 검사`(useForm, react-hook-form, yup)`를 통해 옳지 않은 정보 `POST`방지
>     - 서버 API 호출을 통해 회원가입 및 로그인 기능 구현
>     - 회원 정보 및 토큰 → 쿠키에 저장
> - 회원 정보 요청 시 쿠키를 함께 보내 토큰 확인 후 정보 반환
>     
>     https://github.com/user-attachments/assets/2971242e-3e89-467a-8658-5809d3506c8c
>     
>     https://github.com/user-attachments/assets/6239ae96-49ea-4e96-9034-7ff42eed6e8a
>     
> 
> ### 🏠 홈
> 
> - `React-Grid-Layout`을 사용하여 반응형 디자인 및 UX 향상
>     
>     https://github.com/user-attachments/assets/6a34237e-b316-4bdd-9ae8-eb4ed07c5cc6
> 
>     https://github.com/user-attachments/assets/067a4e9d-a1a1-4fa4-ae08-30dacfeaffa0
> 
> ### 📁 파일 첨부
> 
> - 게시글 작성 시 파일 첨부 기능
>     - 드래그 앤 드랍 파일 첨부 기능
>     - 클릭으로 첨부도 가능
>   
>     https://github.com/user-attachments/assets/f8e5fd06-e470-49eb-b705-eba71c828d22
>

<br>

## 🛠️ 미구현 기능
>
> - 게시글
>     - 게시글 등록
>     - 게시글 편집
> - 관리자 기능
>     - 회원 관리
>     - 게시글 관리
> - 라이트/다크모드 전환
>     - CSS로 변수 설정까지 완료
>     - 라이트/다크모드 전환 기능만 추가하면 완성

<br>

> ## 📚 사용 라이브러리
> | 명령어 | 라이브러리 |
> | :-----: | :-----: |
> | yarn add styled-components | 스타일 컴포넌트 라이브러리 |
> | yarn add axios | axios 라이브러리(API 통신) |
> | yarn add react-icons | 리액트 아이콘 라이브러리 |
> | yarn add react-spinners | 리액트 스피너 |
> | yarn add react-hook-form yup | useForm 라이브러리 |
> | yarn add @hookform/resolvers | 유효성 검사 관련 라이브러리(schema resolve) |
> | yarn add @tanstack/react-query | tanstackQuery 라이브러리 |
> | yarn add @tanstack/react-query-devtools | tanstackQuery 개발자 도구 |
> | yarn add react-intersection-observer | intersection-observer 라이브러리 |
> | npm install classnames | classnames 라이브러리 |
> | npm install react-grid-layout | grid-layout 라이브러리 |
> | npm install framer-motion | framer-motion 애니메이션 라이브러리 |
