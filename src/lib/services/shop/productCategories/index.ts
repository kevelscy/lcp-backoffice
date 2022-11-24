import { config } from 'config'
import { IProductCategoryToCreate, IProductCategoryToUpdate, IReturnProductCategories, IReturnProductCategory } from 'lib/types'

const { API } = config

export const getAllProductsCategories= async (): Promise<IReturnProductCategories> => {
  const URL = `${ API.URL }/api/shop/product-categories`

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

export const getProductCategoryById = async (id: string): Promise<IReturnProductCategory> => {
  const URL = `${ API.URL }/api/shop/product-categories/${id}`

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

export const createProductCategory = async (productCategory: IProductCategoryToCreate): Promise<IReturnProductCategory> => {
  const URL = `${ API.URL }/api/shop/product-categories`
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...productCategory })
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

export const updateProductCategoryById = async (id: string, productCategory: IProductCategoryToUpdate): Promise<IReturnProductCategory> => {
  const URL = `${ API.URL }/api/shop/product-categories/${id}`
  const options: RequestInit = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...productCategory })
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

export const deleteProductCategoryById = async (id: string): Promise<IReturnProductCategory> => {
  const URL = `${ API.URL }/api/shop/product-categories/${id}`
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
