import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { FormCreateProduct } from 'components/pages/tienda/productos/FormCreateProduct'

export const CreateShopProductPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Crear Producto</h4>

      <section className='mt-2'>
        <FormCreateProduct />
      </section>
    </div>
  )
}

CreateShopProductPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default CreateShopProductPage