import { PageWithLayout, ReactNode } from 'lib/types'

import { AuthLayout } from 'layouts/AuthLayout'
import { LinkAsButton } from 'components/common/Button'
import { ArticleList } from 'components/pages/articulos/ArticleList'

export const ArticlesPage: PageWithLayout = () => {
  return (
    <div>
      <h4 className='text-xl font-bold'>Articulos</h4>

      <LinkAsButton to='/articulos/crear' classes='mt-2'>
        Crear Nuevo Artículo
      </LinkAsButton>

      <section className='mt-4'>
        <ArticleList />
      </section>
    </div>
  )
}

ArticlesPage.getLayout = (page: ReactNode) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)
export default ArticlesPage