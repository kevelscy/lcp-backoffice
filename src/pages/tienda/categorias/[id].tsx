import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getProductCategoryById } from 'lib/services/shop/productCategories'
import { IProductCategory, PageWithLayout, ReactNode } from 'lib/types'
import { handleFetchErrors } from 'lib/utils/handleFetchErrors'

import { AuthLayout } from 'layouts/AuthLayout'
import { EmptyPageContent } from 'components/common/empty/EmptyPageContent'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'
import { FormEditProductCategory } from 'components/pages/tienda/categorias/FormEditProductCategory'

export const ShopProductCategoryDetailPage: PageWithLayout = () => {
  const [productCategory, setProductCategory] = useState<IProductCategory>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    (async () => {
      if (router.query.id) {
        const { data, error } = await getProductCategoryById(router.query.id as string)

        if (error) {
          setIsLoading(false)
          handleFetchErrors(error.status, error.message)
          return
        }
  
        setProductCategory(data)
        setIsLoading(false)
      }
    })()
  }, [router.query.id])

  if (isLoading) return <LoaderPage />

  if (!productCategory) return (
    <EmptyPageContent label='Sin Contenido'>
      <Link href='/tienda/categorias/crear' className='text-blue-500 font-bold'>
        Crear Nueva Categoria
      </Link>
    </EmptyPageContent>
  )

  return (
    <div>
      <h4 className='text-xl font-bold'>Editar Categoria { productCategory.title }</h4>

      <FormEditProductCategory {...productCategory} />
    </div>
  )
}

ShopProductCategoryDetailPage.getLayout = (page: ReactNode) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)

export default ShopProductCategoryDetailPage