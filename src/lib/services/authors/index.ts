import { config } from 'config'
import { IReturnAuthors, IReturnAuthor } from 'lib/types'

const { API } = config

export const getAllAuthors = async (): Promise<IReturnAuthors> => {
  const URL = `${ API.URL }/api/authors`

  const res = await fetch(URL)
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

export const getAuthorById = async (id: string): Promise<IReturnAuthor> => {
  const URL = `${ API.URL }/api/authors/${id}`

  const res = await fetch(URL)
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

export const upgradeUserToAuthor = async (userId: string): Promise<IReturnAuthors> => {
  const URL = `${ API.URL }/api/authors/${userId}`
  const options: RequestInit = { method: 'POST' }

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