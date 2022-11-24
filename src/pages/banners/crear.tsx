import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { FormCreateBanner } from 'components/pages/banners/FormCreateBanner'

export const CreateBannersPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Crear Banner</h4>

      <section className='mt-2'>
        <FormCreateBanner />
      </section>
    </div>
  )
}

CreateBannersPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default CreateBannersPage