import Link from 'next/link'

import { useCategoriesProduct } from 'lib/hooks/shop/useProductCategories'
import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { ProductCategoryItem } from 'components/pages/tienda/categorias/ProductCategoryList/ProductCategoryItem'
import { ProductCategoryList } from 'components/pages/tienda/categorias/ProductCategoryList'
import { EmptyPageContent } from 'components/common/empty/EmptyPageContent'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'
import { LinkAsButton } from 'components/common/Button'

export const ShopProductCategoriesPage: PageWithLayout = () => {
  const { productCategories, isLoading, deleteProductCategoryById } = useCategoriesProduct('getInit')

  if (isLoading) return <LoaderPage />

  if (!productCategories.length) return (
    <EmptyPageContent label='Sin Contenido'>
      <Link href='/tienda/categorias/crear' className='text-blue-500 font-bold'>
        Crear Nueva Categoria de Productos
      </Link>
    </EmptyPageContent>
  )

  return (
    <div>
      <h4 className='text-xl font-bold'>Tienda - Categorias</h4>

      <LinkAsButton to='/tienda/categorias/crear' classes='mt-2'>
        Crear Nueva Categoria
      </LinkAsButton>

      <section className='mt-4'>
        <ProductCategoryList>
          {
            productCategories.map(category => (
              <ProductCategoryItem
                key={category.id}
                {...category}
                deleteProductCategoryById={deleteProductCategoryById}
              />
            ))
          }
        </ProductCategoryList>
      </section>
    </div>
  )
}

ShopProductCategoriesPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default ShopProductCategoriesPage