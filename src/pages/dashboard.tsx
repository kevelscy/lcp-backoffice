import type { ReactElement } from 'react'
import Head from 'next/head'

import { AuthLayout } from 'layouts/AuthLayout'

export default function DashboardPage () {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <span className='text-2xl font-black'>PROXIMAMENTE</span>
    </div>
  )
}

DashboardPage.getLayout = (page: ReactElement) => (
  <AuthLayout>
    <Head>
      <title>LCP Admin</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    {page}
  </AuthLayout>
)