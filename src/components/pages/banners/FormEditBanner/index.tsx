
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { IBanner, IBannerToUpdate } from 'lib/types'

import { InputBasic } from 'components/common/inputs/InputBasic'
import { Button } from 'components/common/Button'
import { UploadImage } from './UploadImage'
import { updateBannerById } from 'lib/services/banners'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { LoaderPage } from 'components/layout/loaders/LoaderPage'

export const FormEditBanner = ({ id, title, image }: IBanner) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<IBannerToUpdate>()
  const [imageToUpload, setImageToUpload] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList[0], addUpdateIndex)
    setImageToUpload(imageList)
  }

  const onSubmit = async (dataForm: IBannerToUpdate) => {
    setIsLoading(true)

    const bannerToUpdate: IBannerToUpdate = {
      title: dataForm.title,
      image: imageToUpload ? imageToUpload[0]?.file : null
    }

    const { error } = await updateBannerById(id, bannerToUpdate)

    if (error) {
      setIsLoading(false)
      handleFetchErrors(error.status, error.message)
      return
    }

    setIsLoading(false)
    toast('Banner creado', { type: 'success' })
    router.push('/banners')
  }

  if (isLoading) return <LoaderPage />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-2'>
      <section className='flex justify-between items-start rounded-md bg-slate-200 w-full h-full p-4'>
        <img
          src={image.mobile.url}
          height={image.mobile.height}
          width={image.mobile.width}
          alt={title}
          className='rounded-md mt-2 mx-auto max-h-96 object-contain'
        />

        <img
          src={image.desktop.url}
          height={image.desktop.height}
          width={image.desktop.width}
          alt={title}
          className='rounded-md mt-2 mx-auto max-h-96 object-contain'
        />
      </section>

      <section className='mt-4'>
        <InputBasic
          id='title'
          type='text'
          label='Titulo'
          register={register}
          rules={{ required: false }}
          placeholder='Titulo'
          defaultValue={title}
        />

        <UploadImage
          imageToUpload={imageToUpload}
          onChange={onChange}
        />
      </section>

      <Button type='submit' classes='mt-4 w-full'>
        Editar Banner
      </Button>
    </form>
  )
}
