import { ReactNode } from 'react'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

interface IInputBasicProps {
  register: UseFormRegister<any>
  id: string
  label: string
  rules: object
  type: 'text' | 'number'
  placeholder?: string
  inputClasses?: string
  containerClasses?: string
  defaultValue?: string | number
  disabled?: boolean
  onKeyPress?: (event: any) => void
  errors?: Partial<any>
}

export const InputBasic = ({
  register,
  id,
  label,
  rules,
  type,
  defaultValue,
  placeholder,
  inputClasses,
  containerClasses,
  onKeyPress,
  disabled = false,
  errors
}: IInputBasicProps) => {
  console.log(errors)
  console.log(id)
  return (
    <div className={`w-full ${containerClasses}`}>
      <label htmlFor={id} className='font-semibold dark:text-white'>
        {label} {errors[id] && <span className='text-xs text-red-600'>{errors[id]?.message}</span> }
      </label>

      <input
        {...register(id, rules)}
        id={id}
        name={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onKeyPress={onKeyPress}
        className={`w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-300 leading-8 transition-colors duration-200 ease-in-out dark:bg-[#1a1a1a] dark:text-gray-200 dark:placeholder:text-gray-200 ${inputClasses}`}
      />
    </div>
  )
}

interface IInputSelectBasicProps {
  register: UseFormRegister<any>
  children: ReactNode
  id: string
  label: string
  rules: object
  placeholder?: string
  inputClasses?: string
  containerClasses?: string
  defaultValue?: string | number
  disabled?: boolean
  errors?: Partial<any>
}

export const InputSelectBasic = ({
  register,
  id,
  label,
  rules,
  defaultValue,
  placeholder,
  inputClasses,
  containerClasses,
  disabled = false,
  children,
  errors
}: IInputSelectBasicProps) => {
  return (
    <div className={`w-full ${containerClasses}`}>
      <label htmlFor={id} className='font-semibold dark:text-white'>
        {label} {errors[id] && <span className='text-xs text-red-600'>{errors[id]?.message}</span> }
      </label>

      <select
        {...register(id, rules)}
        id={id}
        name={id}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`relative w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-300 leading-8 transition-colors duration-200 ease-in-out ${inputClasses}`}
      >
        { children }
      </select>
    </div>
  )
}
