// 로그인 페이지

import { PiSignInBold } from "react-icons/pi";

export default function Home() {
  return (
    <form className={`w-[100%] max-w-[600px]`}>
      <h1 className={`mb-[50px] text-[--concept-color]`}>
        로그인
      </h1>
      <div className={`flex flex-col gap-[7px] items-center`}>
        <input placeholder='이메일 | example@naver.com' className={`w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] border-[--concept-color] bg-[--input-background] text-[16px] p-[10px]`}></input>
        <input type="password" placeholder='비밀번호 | 영문 소/대문자, 숫자, 기호 | 8자 이상' className={`w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] border-[--concept-color] bg-[--input-background] text-[16px] p-[10px]`}></input>

        <button className={`w-[60%] h-[50px] justify-items-center m-[40px] mt-[97px] rounded-[5px] bg-[--concept-color]`}>
          <PiSignInBold />
        </button>
      </div>
    </form>
  );
}
