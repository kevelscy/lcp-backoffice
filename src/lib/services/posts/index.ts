import { config } from 'config'
import { IArticleToCreate, IArticleToUpdate, IReturnArticle, IReturnArticles } from 'lib/types'

const { API } = config

export const getAllPosts = async (): Promise<IReturnArticles> => {
  const URL = `${ API.URL }/api/posts`

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

export const getPostById = async (id: string): Promise<IReturnArticle> => {
  const URL = `${ API.URL }/api/posts/${id}`

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

export const createPost = async (post: IArticleToCreate): Promise<IReturnArticle> => {
  const URL = `${ API.URL }/api/posts`

  const formData = new FormData()
  const entries = Object.entries(post)

  entries.forEach(([key, value]) => {
    if (key === 'image') {
      if (!value) return
    }

    formData.append(key, value)
  })

  const options: RequestInit = { method: 'POST', body: formData }

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

export const updatePostById = async (id: string, post: IArticleToUpdate): Promise<IReturnArticle> => {
  const URL = `${ API.URL }/api/posts/${id}`

  const formData = new FormData()
  const entries = Object.entries(post)

  entries.forEach(([key, value]) => {
    if (key === 'image') {
      if (!value) return
    }

    formData.append(key, value)
  })

  const options: RequestInit = { method: 'PUT', body: formData }

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

export const deletePostById = async (id: string): Promise<IReturnArticle> => {
  const URL = `${ API.URL }/api/posts/${id}`
  const options: RequestInit = { method: 'DELETE' }

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
