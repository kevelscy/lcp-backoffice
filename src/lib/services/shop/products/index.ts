import { config } from 'config'
import { IProductToCreate, IProductToUpdate, IFetchReturn, IReturnProducts, IReturnProduct } from 'lib/types'

const { API } = config

export const getAllProducts = async (): Promise<IReturnProducts> => {
  const URL = `${ API.URL }/api/shop/products`

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

export const getProductById = async (id: string): Promise<IReturnProduct> => {
  const URL = `${ API.URL }/api/shop/products/${id}`

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

export const createProduct = async (product: IProductToCreate): Promise<IReturnProduct> => {
  const URL = `${ API.URL }/api/shop/products`

  const formData = new FormData()
  const entries = Object.entries(product)

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

export const updateProductById = async (id: string, product: IProductToUpdate): Promise<IReturnProduct> => {
  const URL = `${ API.URL }/api/shop/products/${id}`

  const formData = new FormData()
  const entries = Object.entries(product)

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

export const deleteProductById = async (id: string): Promise<IReturnProduct> => {
  const URL = `${ API.URL }/api/shop/products/${id}`
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
