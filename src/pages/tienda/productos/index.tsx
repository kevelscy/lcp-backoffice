
import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { ProductList } from 'components/pages/tienda/productos/ProductList'
import { LinkAsButton } from 'components/common/Button'

export const ShopProductsPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Tienda</h4>

      <LinkAsButton to='/tienda/productos/crear' classes='mt-2'>
        Crear Nuevo Producto
      </LinkAsButton>

      <section className='mt-4'>
        <ProductList />
      </section>
    </div>
  )
}

ShopProductsPage.getLayout = (page: ReactNode) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)

export default ShopProductsPage