import type { ReactElement } from 'react'
import Head from 'next/head'
import { AuthLayout } from 'layouts/AuthLayout'

export default function EventosPage () {
  return (
    <div className='w-full h-full'>
      <span>LCP Admin - Eventos</span>
      <br />
      <span>data</span>
    </div>
  )
}

EventosPage.getLayout = (page: ReactElement) =>
<AuthLayout>
  <Head>
    <title>LCP Admin</title>
    <link rel='icon' href='/favicon.ico' />
  </Head>

  {page}
</AuthLayout>