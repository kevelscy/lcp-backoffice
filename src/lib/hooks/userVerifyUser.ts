import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useVerifyUser = () => {
  const router = useRouter()

  useEffect(() => {
    (() => {
      const token = Cookies.get('token')

      console.log({ token })
    })
  }, [])

  return {}
}