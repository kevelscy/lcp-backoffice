import { config } from 'config'
import { IBannerToCreate, IBannerToUpdate, IReturnBanner, IReturnBanners } from 'lib/types'

const { API } = config

export const getAllBanners = async (): Promise<IReturnBanners> => {
  const res = await fetch('/api/banners')
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

export const getBannerById = async (id: string): Promise<IReturnBanner> => {
  const res = await fetch(`/api/banners/${id}`)
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

export const createBanner = async (banner: IBannerToCreate): Promise<IReturnBanner> => {
  const formData = new FormData()
  const entries = Object.entries(banner)

  entries.forEach(([key, value]) => {
    if (key === 'image') {
      if (!value) return
    }

    formData.append(key, value)
  })

  const options: RequestInit = { method: 'POST', body: formData }

  const res = await fetch('/api/banners', options)
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

export const updateBannerById = async (id: string, banner: IBannerToUpdate): Promise<IReturnBanner> => {
  const formData = new FormData()
  const entries = Object.entries(banner)

  entries.forEach(([key, value]) => {
    if (key === 'image') {
      if (!value) return
    }

    formData.append(key, value)
  })

  const options: RequestInit = { method: 'PUT', body: formData }

  const res = await fetch(`/api/banners/${id}`, options)
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

export const deleteBannerById = async (id: string): Promise<IReturnBanner> => {
  const options: RequestInit = { method: 'DELETE' }

  const res = await fetch(`/api/banners/${id}`, options)
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
