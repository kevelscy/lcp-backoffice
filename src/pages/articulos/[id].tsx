import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { IArticle, PageWithLayout, ReactNode } from 'lib/types'
import { getPostById } from 'lib/services/posts'

import { AuthLayout } from 'layouts/AuthLayout'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'
import { FormEditArticle } from 'components/pages/articulos/FormEditArticle'

export const ArticleDetailPage: PageWithLayout = () => {
  const router = useRouter()
  const [article, setArticle] = useState<IArticle>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      if (router.query.id) {
        const { data, error } = await getPostById(router.query.id as string)
        
        if (error) {
          setIsLoading(false)
          handleFetchErrors(error.status, error.message)
          return
        }
        
        setArticle(data)
        setIsLoading(false)
      }
    })()
  }, [router.query.id])

  if (isLoading) return <LoaderPage />

  return (
    <div>
      <h4 className='text-xl font-bold'>Editar Artículo { article.title }</h4>

      <FormEditArticle {...article} />
    </div>
  )
}

ArticleDetailPage.getLayout = (page: ReactNode) =>
<AuthLayout>
  {page}
</AuthLayout>

export default ArticleDetailPage