import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUp = () => {

  const schema = yup.object().shape({
    email: yup.string().required('empty').email('이메일 형식에 맞춰주세요'),
    password: yup.string().required('empty').min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다'),
    passwordCheck: yup.string().required('empty').oneOf([yup.ref('password'), null], '불일치'),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
    // value가 바뀔 때 마다 검사한다면 onChange
    // unFocus 될 때 검사한다면 onBlur
  });

  const onSubmit = (data) => {
    console.log('폼데이터 제출')
    console.log(data)
  }

  const emailValue = watch('email');
  const passwordValue = watch('password');
  const passwordCheckValue = watch('passwordCheck');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")}/>
      <div>
          { emailValue && 
            (errors.email? 
              <img src='/src/icon/x_circle.svg'/>
            :     // 유효성 불만족
              <img src='/src/icon/check_circle.svg'/>
                  // 유효성 만족
            )
          }
      </div>
      <input type='password' {...register("password")} />
      <div>
          { passwordValue && 
            (errors.password? 
              <img src='/src/icon/x_circle.svg'/>
            :     // 유효성 불만족
              <img src='/src/icon/check_circle.svg'/>
                  // 유효성 만족
            )
          }
      </div>
      <input type='password' {...register("passwordCheck")} />
      <div>
          { passwordCheckValue && 
            (passwordCheckValue !== passwordValue? 
              <img src='/src/icon/x_circle.svg'/>
            :     // 유효성 불만족
              <img src='/src/icon/check_circle.svg'/>
                  // 유효성 만족
            )
          }
      </div>
      <input 
        type='submit'
        disabled={!isValid}
        
      />
    </form>
  )
}

export default SignUp;