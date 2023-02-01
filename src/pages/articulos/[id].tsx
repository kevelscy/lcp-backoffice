import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { IArticle, PageWithLayout, ReactNode } from 'lib/types'
import { getPostById } from 'lib/services/posts'

import { AuthLayout } from 'layouts/AuthLayout'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'
import { FormEditArticle } from 'components/pages/articulos/FormEditArticle'
import { EmptyPageContent } from 'components/common/empty/EmptyPageContent'
import Link from 'next/link'

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

  if (!article) return (
    <EmptyPageContent label='Artículo no encontrado'>
      <Link href='/articulos/crear' className='text-blue-500 font-bold'>
        Crear nuevo artículo
      </Link>
    </EmptyPageContent>
  )


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