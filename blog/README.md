<br>

# <img height="27px" width="27px" src="https://github.com/user-attachments/assets/9c7482c9-e6d0-4416-93ae-35b52f4701ea"/> 영화 사이트 제작 | WATCHA

<br>

## 🎈 개요

![Blog 사이트.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea312d39-1f75-4243-882b-27310f99dfcc/341d7744-8eb6-4e52-b2ab-560c45c6521c/Blog_%EC%82%AC%EC%9D%B4%ED%8A%B8.png)

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
>     [로그인, 로그아웃.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea312d39-1f75-4243-882b-27310f99dfcc/8ad5d872-f50c-43c5-82da-62b5e08b9680/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.mp4)
>     
>     [회원가입.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea312d39-1f75-4243-882b-27310f99dfcc/5caf23ed-6987-4716-87ee-6a757d6d1657/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.mp4)
>     
> 
> ### 🏠 홈
> 
> - `React-Grid-Layout`을 사용하여 반응형 디자인 및 UX 향상
>     
>     [React-Grid-Layout.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea312d39-1f75-4243-882b-27310f99dfcc/d48bbfa5-c541-4050-b2e9-756c1ac7b3f1/React-Grid-Layout.mp4)
>     
> 
> ### 📁 파일 첨부
> 
> - 게시글 작성 시 파일 첨부 기능
>     - 드래그 앤 드랍 파일 첨부 기능
>     - 클릭으로 첨부도 가능
>     
>     [파일첨부.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea312d39-1f75-4243-882b-27310f99dfcc/6d73b373-5368-47ab-b3a4-8d43d4a717f7/%ED%8C%8C%EC%9D%BC%EC%B2%A8%EB%B6%80.mp4)
> 
<br>

### 🛠️ 미구현 기능
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