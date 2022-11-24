import { config } from 'config'
import { IReturnAuth } from 'lib/types'

const { API } = config

export const signIn = async (email: string, password: string): Promise<IReturnAuth> => {
  const URL = `${ API.URL }/api/auth/sign-in`
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  const res = await fetch(URL, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const getAuthMe = async (token: string): Promise<IReturnAuth> => {
  const URL = `${ API.URL }/api/auth/me`
  const options: RequestInit = { headers: { 'Authorization': `Bearer ${token}` } }

  const res = await fetch(URL, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const signOut = async (accessToken: string): Promise<IReturnAuth> => {
  const URL = `${ API.URL }/api/auth/sign-out`
  const options: RequestInit = { method: 'POST', headers: { 'Authorization': `Bearer ${accessToken}` } }

  const res = await fetch(URL, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}
