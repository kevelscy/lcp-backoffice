import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from 'components/common/Button'
import { ErrorForm } from 'components/common/errors/ErrorForm'
import { SpinnerLoader, LockClosed, EyeVisible, EyeHidden } from 'components/common/icons'

import { rules } from './formConfig'
import { signIn } from 'lib/services/auth'
import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { useAuthStore } from 'lib/store/Auth'
import { setLocalStorage } from 'lib/utils/localStorage'
// import { signIn } from 'lib/services/firebase/utils/auth/signIn'

interface IUserSignIn {
  email: string
  password: string
}

export const FormSignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUserSignIn>()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setAuth } = useAuthStore()
  const router = useRouter()

  const onSubmit: SubmitHandler<IUserSignIn> = async (dataForm: IUserSignIn) => {
    setLoading(true)

    const { data, error } = await signIn(dataForm.email, dataForm.password)

    if (error) {
      setLoading(false)
      handleFetchErrors(error.status, error.message)
      return
    }
    
    setLocalStorage('accessToken', data.accessToken)
    reset()
    setAuth(data)
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <>
      { errors?.email && <ErrorForm>{ errors.email.message }</ErrorForm> }
      { errors?.password && <ErrorForm>{ errors.password.message }</ErrorForm> }

      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 space-y-6'>
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <input
              {...register('email', rules.email)}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='Correo Electrónico'
              className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
            />

            { errors.email && <p className='text-sm text-red-400'>{errors.email.message}</p> }
          </div>

          <div className='relative'>
            <input
              {...register('password', rules.password)}
              id='password'
              name='password'
              autoComplete='password'
              placeholder='Contraseña'
              type={`${showPassword ? 'text' : 'password'}`}
              className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
            />
            <div
              onClick={() => setShowPassword((prevState) => !prevState)}
              className='cursor-pointer absolute right-4 mr-0.5 top-3.5 mt-0.5'
            >
              { showPassword ? <EyeHidden /> : <EyeVisible /> }
            </div>

            { errors.password && <p className='text-sm text-red-400'>{ errors.password.message }</p> }
          </div>
        </div>

        <div className='text-center'>
          <Button
            type='submit'
            disabled={loading}
            classes='group relative w-full flex justify-center py-2 hover:bg-opacity-95 disabled:opacity-50 disabled:cursor-wait px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-primary-300'
          >
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <LockClosed aria-hidden='true' />
            </span>

            { loading ? <SpinnerLoader classes='animate-spin h-5 w-5 text-white' /> : 'Iniciar Sesión' }
          </Button>
        </div>
      </form>
    </>
  )
}