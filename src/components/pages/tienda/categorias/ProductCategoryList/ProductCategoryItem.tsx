/* eslint-disable @next/next/no-img-element */
import usePortal from 'react-cool-portal'

import { normalizeDate } from 'lib/utils/getLocalDate'
import { IProductCategory } from 'lib/types'

import { Button, LinkAsButton } from 'components/common/Button'
import { Modal } from 'components/layout/Modal'

interface IProductCategoryItemProps extends IProductCategory {
  deleteProductCategoryById: (id: string) => Promise<void>
}

export const ProductCategoryItem = ({ id, title, products, createdAt, deleteProductCategoryById }: IProductCategoryItemProps) => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })

  const deleteProductCategory = async () => {
    hide()
    await deleteProductCategoryById(id)
  }

  return (
    <>
      <Modal Portal={Portal} hide={hide}>
        <div className='w-full flex gap-x-2 justify-start items-end pt-2 text-sm'>
          <Button onClick={hide} classes='w-full'>
            Cancelar
          </Button>

          <Button onClick={deleteProductCategory} classes='w-full'>
            Confirmar
          </Button>
        </div>
      </Modal>

      <li className='bg-slate-200 rounded-md p-3'>
        <section>
          <h6>{title}</h6>
        </section>

        <section className='mt-2'>
          <small>Cantidad de Productos: { products.length }</small> <br />
          <small>Creación: { normalizeDate(createdAt) }</small>
        </section>

        <div className='w-full flex gap-x-2 justify-start items-end pt-2 text-sm'>
          <LinkAsButton to={`/tienda/categorias/${id}`} classes='w-full text-center'>
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