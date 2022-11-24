import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { FormCreateProductCategory } from 'components/pages/tienda/categorias/FormCreateProductCategory'
import { useCategoriesProduct } from 'lib/hooks/shop/useProductCategories'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'

export const CreateShopProductCategoryPage: PageWithLayout = () => {
  const { isLoading, createProductCategory } = useCategoriesProduct()

  if (isLoading) return <LoaderPage />

  return (
    <div>
      <h4 className='text-xl font-bold'>Crear Categoria</h4>

      <section className='mt-2'>
        <FormCreateProductCategory createProductCategory={createProductCategory} />
      </section>
    </div>
  )
}

CreateShopProductCategoryPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default CreateShopProductCategoryPage