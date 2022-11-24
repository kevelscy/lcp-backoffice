import { config } from 'config'
import { IDevotionalToCreate, IDevotionalToUpdate, IReturnDevotional, IReturnDevotionals } from 'lib/types'

const { API } = config

export const getAllDevotionals = async (): Promise<IReturnDevotionals> => {
  const URL = `${ API.URL }/api/devotionals`

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

export const getDevotionalsById = async (id: string): Promise<IReturnDevotional> => {
  const URL = `${ API.URL }/api/devotionals/${id}`

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

export const createDevotional = async (devotional: IDevotionalToCreate): Promise<IReturnDevotional> => {
  const URL = `${ API.URL }/api/devotionals`

  const formData = new FormData()
  const entries = Object.entries(devotional)

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

export const updateDevotionalById = async (id: string, devotional: IDevotionalToUpdate): Promise<IReturnDevotional> => {
  const URL = `${ API.URL }/api/devotionals/${id}`
  const options: RequestInit = { method: 'POST', body: JSON.stringify(devotional) }

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

export const deleteDevotionalById = async (id: string): Promise<IReturnDevotional> => {
  const URL = `${ API.URL }/api/devotionals/${id}`
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
