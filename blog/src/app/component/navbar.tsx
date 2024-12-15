'use client'

import Link from "next/link"
import { axiosLogOutInstance, axiosUserInstance } from "../apis/axios-instance"
import { useEffect, useState } from "react"
import axios from "axios"
import { useStore } from "../store/useStore"


interface UserInfo {
  "id": number,
  "email": string,
  "password": string,
  "username": string,
  "refreshToken": string,
  "role": string,
}

export const Navbar = () => {
  const { user, getUser, loading } = useStore() as { user: UserInfo, getUser: () => Promise<void>, loading: boolean };

  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {

    const checkLoginStatus = async () => {
      if (!loading) {
        try {
          await getUser();
          setIsLogged(true);
        } catch (error) {
          setIsLogged(false);
          setIsLogged(false);
        } finally {
          setIsLoading(false);
        }
      }
    }

    checkLoginStatus();

  });

  const LogOut = async () => {
    try {
      await axiosUserInstance.post(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/auth/logout`)
    } catch(error){
      
    }
  }

  return (
    <div className={`flex h-[100px] border-b-[1px] rounded-br-[35px]`} style={{ borderColor: 'var(--border-color)' }}>

      <Link href={'/'} className={`font-[Yeongdo-Rg] text-center self-center m-[20px] mt-[30px] ml-[60px] text-[40px] text-[--concept-color]`}>Blog</Link>

      {!isLoading &&
        <div className={`flex text-center self-center justify-end flex-grow m-[30px]`}>
          {!isLogged ? (
            <>
              <Link href={'/login'} className={`m-[10px]`}>로그인</Link>
              <Link href={'/sign_up'} className={`m-[10px]`}>회원가입</Link>
            </>
          ) : (
            <>
              <p className="m-[10px]">{user?.username}</p>
              <button onClick={() => LogOut()} className="m-[10px]">로그아웃</button>
            </>
          )}
        </div>
      }

    </div>
  )
}



