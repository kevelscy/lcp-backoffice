/* eslint-disable @next/next/no-img-element */
import usePortal from 'react-cool-portal'
import { toast } from 'react-toastify'

import { normalizeDate } from 'lib/utils/getLocalDate'
import { deleteBannerById } from 'lib/services/banners'
import { IArticle } from 'lib/types'

import { Button, LinkAsButton } from 'components/common/Button'
import { Modal } from 'components/layout/Modal'

export const ArticleItem = ({ id, title, image, author, published, category, type, createdAt }: IArticle) => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })

  const deleteBanner = async () => {
    const { error } = await deleteBannerById(id)

    if (error) return toast('Hubo un error', { type: 'error' })

    hide()
  }

  return (
    <>
      <Modal Portal={Portal} hide={hide}>
        <div className='w-full flex gap-x-2 justify-start items-end pt-2 text-sm'>
          <Button onClick={hide} classes='w-full'>
            Cancelar
          </Button>

          <Button onClick={deleteBanner} classes='w-full'>
            Confirmar
          </Button>
        </div>
      </Modal>

      <li className='bg-slate-200 rounded-md p-3' >
        <section>
          <h6>{title}</h6>

          <small>Autor: {author.user.firstName} {author.user.lastName}</small>
        </section>

        <section className='mt-2 relative'>
          <img
            src={image.url}
            height={image.height}
            width={image.width}
            alt={title}
            className='rounded-md'
          />

          <div className='absolute bottom-1 right-2'>
            <span className={`font-semibold text-white px-2 py-1 rounded-md ${ published ? 'bg-green-500' : 'bg-red-500' }`}>
              { published ? 'Publicado' : 'No Publicado' }
            </span>
          </div>
        </section>

        <section className='mt-2'>
          <small>Tipo: { type }</small> <br />
          <small>Categoria: { category }</small> <br />
          <small>Creación: { normalizeDate(createdAt) }</small>
        </section>

        <div className='w-full flex gap-x-2 justify-start items-end pt-2 text-sm'>
          <LinkAsButton to={`/articulos/${id}`} classes='w-full text-center'>
            Editar
          </LinkAsButton>

          <Button onClick={show} classes='w-full'>
            Eliminar
          </Button>
        </div>
      </li>
    </>
  )
}