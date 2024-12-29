<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prisma 활용 프로젝트 실행 방법

```bash
$ pnpm install
```

```bash
$ npx prisma migrate dev --name init
```

```bash

# watch mode
$ pnpm run start:dev

```

Swagger 문서 경로
http://localhost:3000/doc

🔥 유의 사항 🔥
- 자물쇠가 걸린 부분은, 로그인을 해야만 사용할 수 있는 기능입니다.
- API 설명 중 (admin) 이라고 되어있는 부분은, admin role의 계정만 접근할 수 있는 API입니다.
- 최초 로그인 한번하시면, 영구적으로 스웨거에서 로그인되게 적용했으므로, 자물쇠 굳이 안잠그시고, 계정 생성하셔서, 스웨거 내부에서 회원가입 후, 로그인 한번 하시면 모든 API 활용이 가능합니다.

교내 세션 운영을 위해, 당일에 급하게 제작한 서버라 API 문서가 다소 부실하며, 약 20개의 API를 단시간에 테스트 없이 제작하여, 예외처리가 간혹 안되어있는 부분이 있습니다. 디스코드로 연락 주시거나, 이슈 남겨주시면은, 퇴근 후 최대한 빠르게 수정해서 올리겠습니다.
그래도, 이정도면 충분히 하실 수 있을 것이라고, 판단되어집니다! 
해당 서버 자료 잘 활용해주시면 감사하겠습니다!

### 🚀 **최종 미션: 나만의 블로그 사이트 제작하기**

안녕하세요, 여러분!

그동안 많은 기능과 개념들을 함께 익혔는데요, 이제는 직접 배운 것들을 활용해서 **본인만의 블로그 사이트**를 만들어보는 시간을 가져보려고 합니다. 이번 미션은 단순히 기능 구현을 넘어, 배운 내용을 종합적으로 응용하여, 단순 기능 구현 이상으로, 에러 / 로딩 / 캐싱 / UI / UX 등 다양한 방면에서 고민하며, 해당 미션을 진행해주시면 감사하겠습니다!

---

### 🎯 **미션 목표**

이번 미션을 통해 아래의 기술적 역량을 익혀봅시다.

1. `세션 쿠키 기반의 로그인` 및 **쿠키 활용 방법**
2. **`Role-Based Access Control`** (RBAC)를 활용한 권한 처리 (전역 상태 관리 포함)
3. **이미지 업로드 및 관리 방법** (**`Presigned URL`**과 유사한 로컬 환경 구성 활용)
4. **Refresh Token**을 활용한 **`Access Token 재발급` 처리**
5. Swagger 문서 활용법

---

### 💻 **미션 요구사항**

블로그 사이트를 제작하며 아래의 사항들을 충족해야 합니다:

1. `TanStack Query`**를 활용**해 데이터 요청 및 관리 (예: 무한 스크롤 구현)
2. **`전역 상태 관리`**를 적절히 활용 (예: 로그인 상태, 사용자 정보 등)
3. **`끊김 없는 로그인 구현`** (Refresh Token 및 세션 유지 처리)
4. **`이미지 업로드 및 관리`** (로컬 환경에서 `Presigned URL`과 유사한 방식)
5. **`에러 및 로딩 상태 처리`**를 깔끔하게 구현
6. **`TypeScript`**를 적극 활용하여 타입 안정성을 보장
7. **`Tailwind CSS`** 또는 **Styled-Components**를 활용하여 디자인 구현 (가능하면 Tailwind CSS를 시도해 보세요!)

---

### 🛠 **평가 요소**

미션 완성도를 판단하기 위해 아래의 평가 기준을 참고하세요:

1. **TanStack Query**를 활용하여 데이터를 효율적으로 처리했는가?
   - 예: API 페이징, 무한 스크롤 구현 등.
2. **전역 상태 관리**를 적절히 설계하고 활용했는가?
   - 예: 사용자 상태, 권한 관리 등.
3. **로그인 유지 상태**가 잘 동작하고, 끊김 없이 처리되었는가?
   - 예: Refresh Token 및 Access Token 재발급 처리.
4. **디자인**을 깔끔하고 직관적으로 구현했는가?
   - Tailwind CSS or Styled-Component로 빠르고 효율적으로 스타일링했는지 여부 포함.
5. **에러 및 로딩 처리**를 사용자가 명확히 이해할 수 있도록 구현했는가?
6. **TypeScript**로 타입을 명확히 정의하고, 안정적으로 활용했는가?
7. **이미지 관리 및 업로드** 로직을 효과적으로 구현했는가?

---

### 🎨 **추가 Tip**

- **UI/UX**를 신경 써서 디자인하세요. (깔끔하고 직관적인 레이아웃)
- **코드 가독성**과 **재사용성**을 고려하며 작성하세요.
- 혹시 미션 과정에서 배운 적 없는 개념이 나오더라도, **구글 검색**을 적극 활용하여 문제를 해결해 보세요. (GPT 보다는, 구글 검색 위주로)

---

### 🏆 **여러분의 도전, 응원합니다!**

혜원이랑 제가 짧다면 짧고, 길다면 긴 10주 동안 알려드린 내용들로 충분히 해결할 수 있는 미션이라고 생각합니다! 이전에, 작성한 워크북 or 강의영상을 활용하며 진행해주시고, 처음 접하는 부분이라면 스스로 학습하며 도전해보세요!

이 미션을 통해, 여러분들이 데모데이에서, 주도적으로 개발하실 수 있는 실력이 되길 응원합니다~!!

행운을 빕니다! 🎉

---

# API 관련 문서

---

### User 관련 API

1. 회원가입

**`POST : /v1/users`**

```tsx
{
    "email": "s1@s.com",
    "password": "Smu123!!",
    "role": "user" // 기본값은 user이며, admin또한 가능합니다.
}
```

body에 **`role`**을 넘기지 않을 시, 자동으로, user role의 계정이 생성됩니다.

---

1. 로그인

**`POST : /v1/auth/login`**

```tsx
{
    "email": "s1@s.com",
    "password": "Smu123!!"
}
```

회원가입 성공시 201 응답만 오며, 자동으로 **`cookie`**에 **`accessToken`**과 **`refreshToken`**을 브라우저에 심어줍니다.

**`accessToken`** → 1시간

**`refreshToken`** → 1주

---

1. 리프레시 토큰을 활용하여, 토큰 재발급

**`POST : /v1/auth/refresh`**

```tsx
{
}
```

body에 아무것도 제공하지 않아도 됩니다. (HINT: 빈객체)

리프레시 토큰을 활용한 토큰 재발급 성공시, **`cookie`**에 **`accessToken`**과 **`refreshToken`**을 브라우저에 심어줍니다.

이떄, 쿠키에 있는 **`refreshToken`**을 활용합니다.

---

1. 유저 전체 목록 조회 (admin)

admin 유저인 계정만 접근할 수 있습니다. 이를 활용하기 위해 전역 상태관리 (context-api를 활용해주세요)

**`GET : /v1/users`**

**response**

**`admin`** 유저가 아닌 계정으로 접근시

```tsx
{
    "message": "Admin 유저만 사용 가능한 API입니다.",
    "error": "Unauthorized",
    "statusCode": 401
}
```

**`admin`** 계정으로 접근시

```tsx
[
  {
    id: 1,
    email: 's1@s.com',
    role: 'user',
  },
];
```

가입한, 유저의 전체 목록을 전달해줍니다.

---

1. 내 정보 조회

**`GET : /v1/users/me`**

response

```tsx
{
    "id": 1,
    "email": "s1@s.com",
    "role": "user"
}
```

---

### 이미지 관련 API

**`POST /v1/common/image`**

**`form-data`** 형식으로 image 키 값에, **`png 파일만 넘겨주어야 합니다.`** 다른 확장자 파일에서는 에러가 발생합니다. 이미지는 1개만 넘길 수 있습니다.

response

```tsx
{
    "imageUrl": "571dcbbd-f91d-491e-8d91-994369210936_1732477701646.png"
}
```

해당 **`imageUrl`**을 추후에 게시글 생성시 body에, **`imageUrl`** 키값에 넘겨주면 됩니다.

여러분들이 백엔드와 **`Presigned Url`**을 통해 협업을 진행한다면, 해당 방식과 매우 유사하니, 미리 배워두는게 좋습니다.

error

여러개의 이미지를 넘길 시

```tsx
{
    "message": "Unexpected field",
    "error": "Bad Request",
    "statusCode": 400
}
```

`mimeType`이 PNG가 아닌 다른 확장자 파일을 넘길 시

```tsx
{
    "message": "PNG 타입의 파일만 업로드 가능합니다.",
    "error": "Bad Request",
    "statusCode": 400
}
```

---

### 게시글 관련 API

1. 게시글 생성

**`POST : /v1/posts`**

body: title, content, imageUrl

title, content는 필수로 넘겨야 하는 body입니다.

imageUrl은, 위에서 /common/image를 통해 발급 받은, imageUrl을 넘겨야 합니다. 안넘길시 에러 발생.

body

```tsx
{
    "title": "고구마",
    "content": "내용입니다.",
    "imageUrl": "571dcbbd-f91d-491e-8d91-994369210936_1732477701646.png"
}
```

Success (201)

```tsx
{
    "id": 3,
    "authorId": 1,
    "title": "게시글 12345",
    "likeCount": 0,
    "dislikeCount": 0,
    "content": "내용입니다.",
    "imageUrl": null,
    "createdAt": "2024-11-24T20:47:03.975Z",
    "updatedAt": "2024-11-24T20:47:03.975Z",
    "version": 0
}
```

---

1. 전체 게시글 조회 (커서기반 페이지네이션 / 무한스크롤 연습)

**`GET : /v1/posts`**

Query Parameter : cursor, order[], take

혼합해서 사용할 수 있습니다.

**`?order[]=likeCount_DESC` → 좋아요 수의 내림차순.**

**`?order[]=likeCount_ASC` → 좋아요 수의 오름차순**

**`?order[]=id_ASC`** **→ id 수의 오름차순**

**`take` → 몇개의 게시글을 가져올지 (default:2)**

**`cursor` → 다음 커서 위치**

response

```tsx
{
    "data": [
        {
            "id": 1,
            "authorId": 1,
            "title": "구글입2323",
            "likeCount": 0,
            "dislikeCount": 0,
            "content": "내용입니다.",
            "imageUrl": null,
            "createdAt": "2024-11-24T19:48:15.040Z",
            "updatedAt": "2024-11-24T19:52:26.826Z",
            "version": 7,
            "likedUsers": []
        },
        {
            "id": 2,
            "authorId": 1,
            "title": "게시글 12345",
            "likeCount": 1,
            "dislikeCount": 0,
            "content": "내용입니다.",
            "imageUrl": "public/image/571dcbbd-f91d-491e-8d91-994369210936_1732477701646.png",
            "createdAt": "2024-11-24T19:48:32.200Z",
            "updatedAt": "2024-11-24T20:11:27.785Z",
            "version": 0,
            "likedUsers": [
                {
                    "user": {
                        "id": 1,
                        "email": "s1@s.com",
                        "role": "user"
                    }
                }
            ]
        },
        {
            "id": 3,
            "authorId": 1,
            "title": "게시글 12345",
            "likeCount": 0,
            "dislikeCount": 0,
            "content": "내용입니다.",
            "imageUrl": null,
            "createdAt": "2024-11-24T20:47:03.975Z",
            "updatedAt": "2024-11-24T20:47:03.975Z",
            "version": 0,
            "likedUsers": []
        }
    ],
    "nextCursor": null,
    "hasNextPage": false
}
```

nextCursor가 null이고, hasNextPage가 없는 경우는 다음 페이지가 없다는 것 입니다.

```tsx
    "nextCursor": "1",
    "hasNextPage": true
```

다음 페이지가 있는경우, 위와 같이 나옵니다.

---

1. 상세 게시글 조회

**`GET /v1/posts/:id`**

response(200)

```tsx
{
    "id": 1,
    "authorId": 1,
    "title": "구글입2323",
    "likeCount": 0,
    "dislikeCount": 0,
    "content": "내용입니다.",
    "imageUrl": null,
    "createdAt": "2024-11-24T19:48:15.040Z",
    "updatedAt": "2024-11-24T20:55:22.698Z",
    "version": 8,
    "author": {
        "id": 1,
        "email": "s1@s.com",
        "role": "user"
    }
}
```

이미지를, 정상적으로 보기위해서는 앞에 서버 url을 붙여주어야 합니다.

ex) **`http://localhost:3000/${imageUrl}`**

---

1. 게시글 수정

**`PATCH : /v1/posts/:id`**

body(Optional)

title, content, imageUrl

**`한개씩만 넘겨도 상관없습니다.`**

```tsx
// body
{
    "title": "구글입2323"
}
```

**`response 200`**

```tsx
{
    "id": 1,
    "authorId": 1,
    "title": "구글입2323",
    "likeCount": 0,
    "dislikeCount": 0,
    "content": "내용입니다.",
    "imageUrl": null,
    "createdAt": "2024-11-24T19:48:15.040Z",
    "updatedAt": "2024-11-24T20:55:22.698Z",
    "version": 8,
    "author": {
        "id": 1,
        "email": "s1@s.com",
        "role": "user"
    }
}
```

---

1. 게시글 좋아요

**`POST : /v1/posts/:id/like`**

response 200

```tsx
{
    "isLike": true
}
```

이미 isLike가 true인 경우

```tsx
{
    "isLike": null
}
```

1. 게시글 싫어요

**`POST : /v1/posts/:id/dislike`**

```tsx
{
    "isLike": false
}
```

이미 isLike가 false인 경우

```tsx
{
    "isLike": null
}
```

1. 게시글 삭제

**`DELETE : /v1/posts/:id`**

게시글이 정상적으로 삭제되면 해당 게시글 id를 반환해줍니다.

response (200)

```tsx
1; // 1번 게시글 정상적으로 삭제 완료
```

https://tundra-tulip-b3d.notion.site/35dc4ba0e0ea4479a486b96f271e028a?pvs=4
