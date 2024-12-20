'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { MdAssignmentInd } from "react-icons/md";

import classNames from 'classnames'
import { axiosUserInstance } from "@/app/apis/axios-instance";

interface SignUpData {
  email: string;
  password: string;
  username: string;
  role?: string | null;
}

export default function SignUpForm() {

  const router = useRouter();

  const [error, setError] = useState<string>('');

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').matches(passwordRegExp),
    passwordCheck: yup.string().required('empty').oneOf([yup.ref('password'), null]),
    username: yup.string().required('empty').min(2),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitted } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const emailValue = watch('email');
  const passwordValue = watch('password');
  const passwordCheckValue = watch('passwordCheck');
  const usernameValue = watch('username');

  async function signUpHandler(data: SignUpData) {

    let redirectFlag: boolean = true

    try {
      await axiosUserInstance.post('http://localhost:3000/v1/users', {
        email: data.email,
        password: data.password,
        username: data.username,
        role: 'user',
      });

    } catch (e: unknown) {
      redirectFlag = false
      if (axios.isAxiosError(e)) {

        if (Array.isArray(e.response?.data?.message)) {
          e.response?.data?.message?.map((error: string) => {
            if (error === '이미 가입된 이메일입니다!') {
              setError('이미 가입된 이메일입니다')
            }
          });
        } else if (e.response?.data?.message === '이미 가입된 이메일입니다!') {
          setError('이미 가입된 이메일입니다')
        } else {
          setError('')
        }

      } else {
        console.error('An error occurred:', e);
      }
    }

    if (redirectFlag) {
      router.push('/login')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(signUpHandler)}
      className={`w-[100%] max-w-[600px] mt-[60px]`}>

      <h1 className={`mb-[50px] text-[--concept-color]`}>
        회원가입
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

        <input
          type="password"
          placeholder='비밀번호 재입력'
          {...register('passwordCheck')}
          className={classNames(
            'w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] bg-[--input-background] text-[16px] p-[10px]',
            {
              'border-[--error-color]': (!passwordCheckValue && isSubmitted) || (passwordCheckValue && (passwordCheckValue !== passwordValue)),
              'border-[--concept-color]': !(!passwordCheckValue && isSubmitted) && !(passwordCheckValue && (passwordCheckValue !== passwordValue))
            }
          )}>
        </input>

        <input
          placeholder="이름 | 2자 이상"
          {...register('username')}
          className={classNames(
            'w-[60%] h-[50px] outline-none border-[1px] rounded-[5px] bg-[--input-background] text-[16px] p-[10px]',
            {
              'border-[--error-color]': (usernameValue || isSubmitted) && errors.username,
              'border-[--concept-color]': !(usernameValue || isSubmitted) || !errors.username
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