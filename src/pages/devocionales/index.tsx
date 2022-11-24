import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { LinkAsButton } from 'components/common/Button'
import { DevotionalList } from 'components/pages/devocionales/DevotionalList'

export const DevotionalsPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Devocional</h4>

      <LinkAsButton to='/devocionales/crear' classes='mt-2'>
        Crear Nuevo Devocional
      </LinkAsButton>

      <section className='mt-4'>
        <DevotionalList />
      </section>
    </div>
  )
}

DevotionalsPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default DevotionalsPage