import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { FormCreateDevotional } from 'components/pages/devocionales/FormCreateDevotional'

export const CreateDevotionalPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Crear Devocional</h4>

      <section className='mt-2'>
        <FormCreateDevotional />
      </section>
    </div>
  )
}

CreateDevotionalPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default CreateDevotionalPage