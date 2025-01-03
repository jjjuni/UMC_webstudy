<br>

# 📝 Chapter 6. 회원 가입 기능, API 호출을 통한 검색 기능 구현, Debounce & Throttling
>
><br>
>
> ## 🔥 미션1 - 회원가입 / 로그인 API 연결
> > ### 회원가입
> > - ✅ `회원가입 API`를 잘 연결하였는가?
> > - ✅ 회원가입 후, `login 페이지`로 이동하였는가? 
> > ### 로그인
> > - ✅ `로그인 API`를 잘 연결하였는가?
> > - ✅ 로그인 후, `메인 페이지`로 이동하였는가?
> > - ✅ `AccessToken`과 `RefreshToken`을 `로컬스토리지에 저장`하였는가?
> >
> > ### 로그인 후 메인페이지 이동 시
> > - ✅ `Navbar`의 로그인, 회원가입 버튼 대신, `로그아웃 버튼`을 보여주었는가?
> > - ✅ `유저 정보 불러오기 API`를 호출하여, 로그인 한 유저 이메일 `@ 기준 앞 부분(닉네임)`을 Navbar에 잘 보여주었는가?
> > 
> > ### 로그아웃 시
> > - ✅ 로그아웃 후, Navbar에 유저 정보가, 사라지며, `로그인, 회원가입 버튼이 다시 생겼는가?`
> > - ✅ `AccessToken`과, `RefreshToken`을 `로컬스토리지에서 제거`하였는가?
> > ### 추가로 해보면 좋아요!
> > - ✅  `refreshToken을 활용`하여, `토큰 재발급`을 진행해보세요.
> > - ✅ `Axios Interceptor`를 활용하여, `refreshToken`을 활용하여, `accessToken`을 `재발급` 받는 로직을 구글 검색을 통해, 직접 해결해보세요!
> >
> > https://github.com/user-attachments/assets/bbe8bfc3-832a-4da6-ad13-b6b02e5a3a09
> <br>
> 
> ## 🔥 미션2 - 검색 기능 구현
> > ### 검색어를 입력하지 않은 경우
> > ![검색어x](https://github.com/user-attachments/assets/b4b0c91c-2257-45c6-84a0-60d7e8e0c337)
> >
> > ### 검색어를 입력한 경우
> > ![검색](https://github.com/user-attachments/assets/4f170b4f-38ba-43b2-b3c0-8ca8f697eca1)
> >
> > ### 검색어를 입력했으나 해당 검색어의 영화 데이터가 존재하지 않는경우
> >![검색X](https://github.com/user-attachments/assets/75559059-cebc-4080-8b4f-886bbed6f9bb)
> >
> > https://github.com/user-attachments/assets/ffcc9aa6-97fe-43fc-bed9-f15ab2825710
> >
<br>
