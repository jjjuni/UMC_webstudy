import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from "./style/page-style"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate();

  const emailRegExp = 
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const phoneRegExp =
  /^[0-9]{11}$/

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').min(8).max(16),
    passwordCheck: yup.string().required('empty').oneOf([yup.ref('password'), null]),
    name: yup.string().required('empty'),
    phone: yup.string().required('empty').matches(phoneRegExp),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const signUpSubmit = (data) => {
    console.log('회원가입')
    console.log(data)
    navigate('/', { replace: true });
  }
  
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const passwordCheckValue = watch('passwordCheck');
  const nameValue = watch('name');
  const phoneValue = watch('phone');

  useEffect(() => {
      document.title = `왓챠 | 회원가입`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.SignForm onSubmit={handleSubmit(signUpSubmit)}>
          <S.SignTitle>회원가입</S.SignTitle>
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
          <S.InputDiv $borderBottom={'1px solid'}>
            <S.InputText type='password' placeholder='비밀번호 | 8~16자' maxLength={16} {...register("password")}
            $border={ passwordValue && errors.password ? '1px solid #e73e3e' : '1px solid #48484b'}
            />
            { passwordValue && 
              (errors.password? 
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv>
          <S.InputDiv $borderRadius={'0 0 5px 5px'}>
            <S.InputText type='password' placeholder='비밀번호 재입력' maxLength={16} {...register("passwordCheck")}
            $border={ passwordCheckValue && passwordCheckValue !== passwordValue ? '1px solid #e73e3e' : '1px solid #48484b'}
            />
            { passwordCheckValue && 
              (passwordCheckValue !== passwordValue?
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv>
          <S.InputDiv style={{margin: '20px 0 0'}}>
            <S.InputText type='text' placeholder='이름' maxLength={30} {...register("name")}
            $border={ nameValue && errors.name ? '1px solid #e73e3e' : '1px solid #48484b'}
            />
            { nameValue && 
              (errors.name?
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv>
          <S.InputDiv>
            <S.InputText type='text' placeholder='휴대전화번호' maxLength={11} {...register("phone")}
            $border={ phoneValue && errors.phone ? '1px solid #e73e3e' : '1px solid #48484b'}/>
            { phoneValue && 
              (errors.phone?
                <S.ValidationIcon src='/src/icon/x_circle.svg'/>
              :
                <S.ValidationIcon src='/src/icon/check_circle.svg'/>
              )
            }
          </S.InputDiv>
          <S.SubmitButton $opacity={!isValid ? '0.3' : '1'}>회원가입</S.SubmitButton>
        </S.SignForm>
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default SignUpPage;
