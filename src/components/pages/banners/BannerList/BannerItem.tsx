/* eslint-disable @next/next/no-img-element */
import usePortal from 'react-cool-portal'
import { toast } from 'react-toastify'

import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { Dispatch, IBanner, SetStateAction } from 'lib/types'
import { deleteBannerById } from 'lib/services/banners'

import { Button, LinkAsButton } from 'components/common/Button'
import { Modal } from 'components/layout/Modal'

interface IBannerItemProps extends IBanner {
  setIsLoading: Dispatch<SetStateAction<boolean>>
  refreshBanners: () => Promise<void>
}

export const BannerItem = ({ id, title, image, refreshBanners, setIsLoading }: IBannerItemProps) => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })

  const deleteBanner = async () => {
    hide()
    setIsLoading(true)
    const { error } = await deleteBannerById(id)

    if (error) {
      hide()
      setIsLoading(false)
      handleFetchErrors(error.status, error.message)
      return
    }

    await refreshBanners()
    toast('Banner eliminado exitosamente', { type: 'success' })
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

      <li className='bg-slate-200 rounded-md p-3'>
        <h6>{title}</h6>

        <img
          src={image.url}
          height={image.height}
          width={image.width}
          alt={title}
          className='rounded-md mt-2 object-contain mx-auto h-[176px]'
        />

        <div className='w-full flex gap-x-2 justify-start items-end pt-2 text-sm'>
          <LinkAsButton to={`/banners/${id}`} classes='w-full text-center'>
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