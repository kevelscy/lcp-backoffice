import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type LinkNavigationProps = {
  to: '/dashboard' |
  '/tienda' |
  '/tienda/productos' |
  '/tienda/categorias' |
  '/usuarios' |
  '/banners' |
  '/devocionales' |
  '/multimedia' |
  '/articulos'
  label: string
  icon?:  ReactNode
}

export const LinkNavigation = ({ to, label, icon }: LinkNavigationProps) => {
  const router = useRouter()

  return (
    <Link
      href={`${to}`}
      className={
        `flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
        ${ router.pathname.includes(to) && 'text-brown-primary-300 bg-gray-300' }`
      }
    >
      <div>{icon}</div>
      <span className='pl-2 mt-0.5'>{label}</span>
    </Link>
  )
}
