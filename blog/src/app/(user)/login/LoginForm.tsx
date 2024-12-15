'use client'

import axios from "axios";
import { axiosUserInstance } from '../../apis/axios-instance'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { MdAssignmentInd } from "react-icons/md";

import classNames from 'classnames'
import { useStore } from "@/app/store/useStore";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {

  const { getUser } = useStore();

  const router = useRouter();

  const [error, setError] = useState<string>('');

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').matches(passwordRegExp),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitted } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const emailValue = watch('email');
  const passwordValue = watch('password');

  async function signUpHandler(data: LoginData) {

    let redirectFlag: boolean = true

    try {
      const response = await axiosUserInstance.post('http://localhost:3000/v1/auth/login', {
        email: data.email,
        password: data.password,
      });
      getUser();
      console.log(response)
    } catch (e: unknown) {
      redirectFlag = false
      if (axios.isAxiosError(e)) {
        setError('이메일 또는 비밀번호를 확인해주세요')

      } else {
        console.error('An error occurred:', e);
      }
    }
    
    if (redirectFlag) {
      router.push('/')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(signUpHandler)}
      className={`w-[100%] max-w-[600px] mt-[60px]`}>

      <h1 className={`mb-[50px] text-[--concept-color]`}>
        로그인
      </h1>
      <div className={`flex flex-col gap-[7px] items-center`}>
        <input
          placeholder='이메일 | example@naver.com'
          {...register('email')}
          className={classNames(
            'w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] bg-[--input-background] text-[16px] p-[10px]',
            {
              'border-[--error-color]': (emailValue || isSubmitted) && errors.email,
              'border-[--concept-color]': !(emailValue || isSubmitted) || !errors.email
            }
          )}>
        </input>

        <input
          type="password"
          placeholder='비밀번호 | 영문 소/대문자, 숫자, 기호 | 8자 이상'
          {...register('password')}
          className={classNames(
            'w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] bg-[--input-background] text-[16px] p-[10px]',
            {
              'border-[--error-color]': (passwordValue || isSubmitted) && errors.password,
              'border-[--concept-color]': !(passwordValue || isSubmitted) || !errors.password
            }
          )}>
        </input>
        {error !== '' && 
          <p className="m-[10px] text-[15px] text-[--error-color]">{error}</p>
        }
        <button 
          type='submit' 
          className={classNames(
            `w-[60%] h-[50px] justify-items-center m-[40px] rounded-[5px] bg-[--concept-color]`,
            {
              'opacity-30': !isValid,
              'opacity-100': isValid,
            }
          )}>
          <MdAssignmentInd />
        </button>
      </div>
    </form>
  )
}