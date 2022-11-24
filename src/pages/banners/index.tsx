import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { LinkAsButton } from 'components/common/Button'
import { BannerList } from 'components/pages/banners/BannerList'

export const BannersPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Banner</h4>

      <LinkAsButton to='/banners/crear' classes='mt-2'>
        Crear Nuevo Banner
      </LinkAsButton>

      <section className='mt-4'>
        <BannerList />
      </section>
    </div>
  )
}

BannersPage.getLayout = (page: ReactNode) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)
export default BannersPage