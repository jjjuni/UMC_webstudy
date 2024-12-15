'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdAssignmentInd } from "react-icons/md";

export default function SignUpForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  async function signUpHandler(e: React.FormEvent) {
    e.preventDefault();

    let redirectFlag: boolean = true

    try {
    await axios.post('http://localhost:3000/v1/users', {
        email,
        password,
        role: 'user',
      });

      
    } catch (e: unknown) {
      redirectFlag = false
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data);
      } else {
        console.error('An error occurred:', e);
      }
    }

    if (redirectFlag){
      router.push('/login')
    }
  }

  return (
    <form 
      onSubmit={signUpHandler} 
      className={`w-[100%] max-w-[600px]`}>

      <h1 className={`mb-[50px] text-[--concept-color]`}>
        회원가입
      </h1>
      <div className={`flex flex-col gap-[7px] items-center`}>
        <input 
          name='email' 
          value={email}
          placeholder='이메일 | example@naver.com' 
          onChange={(e) => setEmail(e.target.value)}
          className={`w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] border-[--concept-color] bg-[--input-background] text-[16px] p-[10px]`}>
        </input>

        <input 
          name='password'
          value={password}
          type="password" 
          placeholder='비밀번호 | 영문 소/대문자, 숫자, 기호 | 8자 이상' 
          onChange={(e) => setPassword(e.target.value)}
          className={`w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] border-[--concept-color] bg-[--input-background] text-[16px] p-[10px]`}>
        </input>

        <input 
          type="password" 
          value={password}
          placeholder='비밀번호 재입력' 
          onChange={(e) => setPasswordCheck(e.target.value)}
          className={`w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] border-[--concept-color] bg-[--input-background] text-[16px] p-[10px]`}>
        </input>

        <button type='submit' className={`w-[60%] h-[50px] justify-items-center m-[40px] rounded-[5px] bg-[--concept-color]`}>
          <MdAssignmentInd />
        </button>
      </div>
    </form>
  )
}