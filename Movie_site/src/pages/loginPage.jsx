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

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const loginSubmit = (data) => {
    console.log('로그인')
    console.log(data)
    navigate('/', { replace: true })
  }
  
  const emailValue = watch('email');
  const passwordValue = watch('password');

  useEffect(() => {
    document.title = `왓챠 | 로그인`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.SignForm onSubmit={handleSubmit(loginSubmit)}>
          <S.SignTitle>로그인</S.SignTitle>
          <S.InputDiv $borderBottom={'1px solid'} $borderRadius={'5px 5px 0 0'}>
            <S.InputText type='text' placeholder='이메일 | example@gmail.com' {...register("email")}
            $border={ emailValue && errors.email ? '1px solid #e73e3e' : '1px solid #48484b'}
            />
            { emailValue && 
              (errors.email? 
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv >
          <S.InputDiv $borderRadius={'0 0 5px 5px'}>
            <S.InputText type='password' placeholder='비밀번호 | 8~16자' maxLength={16} {...register("password")}
            $border={ passwordValue && errors.password ? '1px solid #e73e3e' : '1px solid #48484b'}/>
            { passwordValue && 
              (errors.password? 
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv>
          <S.SubmitButton $opacity={!isValid ? '0.3' : '1'}>로그인</S.SubmitButton>
        </S.SignForm>
      </S.ContentBox>
    </S.ContentContainer>
  )
}

export default LoginPage;