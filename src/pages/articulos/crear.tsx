import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { FormCreateArticle } from 'components/pages/articulos/FormCreateArticle'

export const CreateArticlesPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Crear Artículo</h4>

      <section className='mt-2'>
        <FormCreateArticle />
      </section>
    </div>
  )
}

CreateArticlesPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default CreateArticlesPage