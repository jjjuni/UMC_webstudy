import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import * as S from "./style/page-style"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate()

  const emailRegExp = 
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').min(8).max(16),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitted } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  
  const emailValue = watch('email');
  const passwordValue = watch('password');

  const loginSubmit = (data) => {
    console.log('로그인')
    console.log(data)
    navigate('/', { replace: true })
  }
  
  useEffect(() => {
    document.title = `왓챠 | 로그인`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.SignForm onSubmit={handleSubmit(loginSubmit)}>
          <S.SignTitle>로그인</S.SignTitle>
          <S.InputDiv>
            <S.InputText type='text' placeholder='이메일 | example@gmail.com' {...register("email")}
            $border={ (emailValue || isSubmitted) && errors.email ? '2px solid #e73e3e' : '2px solid black'}
            />
            {(emailValue || isSubmitted) && 
              <S.ValidationIcon src={errors.email? '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
            }
          </S.InputDiv >
          <S.InputDiv>
            <S.InputText type='password' placeholder='비밀번호 | 8~16자' maxLength={16} {...register("password")}
            $border={ (passwordValue || isSubmitted) && errors.password ? '2px solid #e73e3e' : '2px solid black'}/>
            {(passwordValue || isSubmitted) && 
              <S.ValidationIcon src={errors.password?  '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
            }
          </S.InputDiv>
          <S.SubmitButton $opacity={!isValid ? '0.3' : '1'}>로그인</S.SubmitButton>
        </S.SignForm>
      </S.ContentBox>
    </S.ContentContainer>
  )
}

export default LoginPage;