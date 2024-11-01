### UMC-7th-YONGCHA-BE

# 서버 실행 방법
```js
yarn
yarn start:dev
```

# API 명세서

### `POST` http://localhost:3000/auth/register (회원가입)

Reqeust

```json
{
    "email": "dydals34403@gmail.com",
    "password": "hihi",
    "passwordCheck": "hihi"
}
```

---


### `POST` http://localhost:3000/auth/login (로그인)

Reqeust

```json
{
    "email": "dydals34403@gmail.com",
    "password": "hihi"
}
```

Response `(Success: 200)`

```json
{
    "refreshToken": "eyJhbGci123OiJIUzI1NiIsInR41235cCI6IkpXVCJ9.e123yJzdWIiOjIsImVtYWlsIjoiZHlkYWxzMzQ0MDNAZ21haWwuY29tIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3Mjc2MTM3MjgsImV4cCI6MTcyNzcwMDEyOH0.Ag8Va6NtNhcphunV8bIdFSXifogXEtRD-SzEOrYW0kQ",
    "accessToken": "eyJhbGciOiJI123UzI1NiIsInR5123123cCI6IkpXVCJ9.eyJ123zdWIiOjIsImVtYWlsIjoiZHlkYWxzMzQ0MDNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcyNzYxMzcyOCwiZXhwIjoxNzI3NjE0MDI4fQ.zSCImG4svIfB_zbAkx8nCAMhy1ReEb4019krPu2cEq4"
}
```

---

### `POST` http://localhost:3000/auth/token/access (refreshToken을 활용한, 토큰 재발급)
## accessToken : 5m 후 만료, refreshToken: 24h 후 만료

request시, 따로 body로 데이터 전송을 안해주어도 되고, 로그인 시 얻는 Refresh 토큰을 헤더에 Bearer 형태로 넘겨주시면 됩니다.
Authorization: Bearer `refreshToken`

유효한 토큰일시 유저 정보를 아래와 같이 전달받습니다.
`(Success: 200)`

```json
{
    "refreshToken": "eyJhbGci123OiJIUzI1NiIsInR41235cCI6IkpXVCJ9.e123yJzdWIiOjIsImVtYWlsIjoiZHlkYWxzMzQ0MDNAZ21haWwuY29tIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3Mjc2MTM3MjgsImV4cCI6MTcyNzcwMDEyOH0.Ag8Va6NtNhcphunV8bIdFSXifogXEtRD-SzEOrYW0kQ",
    "accessToken": "eyJhbGciOiJI123UzI1NiIsInR5123123cCI6IkpXVCJ9.eyJ123zdWIiOjIsImVtYWlsIjoiZHlkYWxzMzQ0MDNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcyNzYxMzcyOCwiZXhwIjoxNzI3NjE0MDI4fQ.zSCImG4svIfB_zbAkx8nCAMhy1ReEb4019krPu2cEq4"
}
```

---

### `GET` http://localhost:3000/user/me (유저 정보 불러오기)

request시, 따로 body로 데이터 전송을 안해주어도 되고, 로그인 시 얻는 access 토큰을 헤더에 Bearer 형태로 넘겨주시면 됩니다.
Authorization: Bearer `accessToken`

유효한 토큰일시 유저 정보를 아래와 같이 전달받습니다.
`(Success: 200)`

```json
{
    "id": 1,
    "email": "dydals34402@gmail.com"
}
```

---
# TODO 관련 API (http://localhost:3000/doc 스웨거 확인)

### `POST` http://localhost:3000/todo (Todo 작성하기)

title, content (body)

`(Success: 200)`

```json
// body

{
  "title": "고구마 아이스크림 구매하기!",
  "content": "근데 어디서 팔까요?",
}
```

---

### `GET` http://localhost:3000/todo (Todo 전체 조회 | title에 대응하는 Todo 조건 조회)

### [Todo]를 조회하는 API, query-parameter를 넘길 경우, 해당 title에 대응하는, todo 목록을 줍니다.

title(query)

`(Success: 200)`

```json
[
  [
    {
      "createdAt": "2024-10-08T07:31:18.000Z",
      "updatedAt": "2024-10-08T07:31:18.000Z",
      "version": 1,
      "id": 2,
      "title": "TodoTest123123",
      "content": "내용123123123123123",
      "checked": false
    },
    {
      "createdAt": "2024-10-08T07:31:35.000Z",
      "updatedAt": "2024-10-08T07:31:35.000Z",
      "version": 1,
      "id": 3,
      "title": "TodoTest123123",
      "content": "내용123123123123123",
      "checked": false
    },
    {
      "createdAt": "2024-10-08T07:33:07.000Z",
      "updatedAt": "2024-10-08T07:37:48.000Z",
      "version": 3,
      "id": 4,
      "title": "4번 데이터 수정",
      "content": "야호야호",
      "checked": true
    },
    {
      "createdAt": "2024-10-08T07:43:26.000Z",
      "updatedAt": "2024-10-08T07:43:26.000Z",
      "version": 1,
      "id": 5,
      "title": "안녕하세요",
      "content": "ㅎㅇㅎㅇ",
      "checked": false
    }
  ],
  4
]
```

---

### `GET` http://localhost:3000/todo/${id} (Todo id에 해당하는 Todo 데이터 개별 조회)
id(path-parameter)

`(Success: 200)`
```json
{
  "createdAt": "2024-10-08T07:31:18.000Z",
  "updatedAt": "2024-10-08T07:31:18.000Z",
  "version": 1,
  "id": 2,
  "title": "TodoTest123123",
  "content": "내용123123123123123",
  "checked": false
}
```

---

### `DELETE` http://localhost:3000/todo/${id} (Todo id에 해당하는 데이터 삭제)
id(path-parameter)

`(Success: 200)`
2번의 todo를 삭제했습니다.

---

---

### `PATCH` http://localhost:3000/todo/${id} (Todo id에 해당하는 데이터 삭제)
id(path-parameter)

title, content, checked (body) -> 필요한 부분만 넣으시면 됩니다.

todo 완료 여부 체크도 가능.

```json
{
  "title": "고구마 아이스크림 구매하기!",
  "content": "근데 어디서 팔까요?",
  "checked": true
},

{
  "title": "고구마 아이스크림 구매하기!",
},

{
  "checked": true
}
```

`(Success: 200)`
2번의 todo를 수정했습니다.

---
