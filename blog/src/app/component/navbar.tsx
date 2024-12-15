'use client'

import Link from "next/link"
import { axiosUserInstance } from "../apis/axios-instance"
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

  useEffect(() => {

    const getMe = async () => {
      try {
        const refreshMatch = document.cookie.match(/(^|;) ?refreshToken=([^;]*)(;|$)/);
        const accessMatch = document.cookie.match(/(^|;) ?accessToken=([^;]*)(;|$)/);

        if (refreshMatch || accessMatch ) {
          await getUser();
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    getMe();
  }, []);


  return (
    <div className={`flex h-[100px] border-b-[1px] rounded-br-[35px]`} style={{ borderColor: 'var(--border-color)' }}>

      <Link href={'/'} className={`font-[Yeongdo-Rg] text-center self-center m-[20px] mt-[30px] ml-[60px] text-[40px] text-[--concept-color]`}>Blog</Link>

      {!loading &&
        <div className={`flex text-center self-center justify-end flex-grow m-[30px]`}>
          {user == null ? (
            <>
              <Link href={'/login'} className={`m-[10px]`}>로그인</Link>
              <Link href={'/sign_up'} className={`m-[10px]`}>회원가입</Link>
            </>
          ) : (
            <>
              <p className="m-[10px]">{user.username}</p>
              <button className="m-[10px]">로그아웃</button>
            </>
          )}
        </div>
      }

    </div>
  )
}



