/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { handleFetchErrors } from 'lib/utils/handleFetchErrors'
import { createBanner } from 'lib/services/banners'
import { IBannerToCreate } from 'lib/types'
import { rulesForm } from './rulesForm'
import { config } from 'config'

import { LoaderPage } from 'components/layout/loaders/LoaderPage'
import { InputBasic } from 'components/common/inputs/InputBasic'
import { Button } from 'components/common/Button'
import { UploadImage } from './UploadImage'

export const FormCreateBanner = () => {
  const { register, handleSubmit } = useForm<IBannerToCreate>()
  const [imageToUpload, setImageToUpload] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList[0], addUpdateIndex)
    setImageToUpload(imageList)
  }

  const onSubmit = async (dataForm: IBannerToCreate) => {
    setIsLoading(true)

    if (!imageToUpload || !imageToUpload[0]) {
      toast('La imagen es requerida', { type: 'error' })
      setIsLoading(false)
      return
    }

    if (imageToUpload[0]?.file?.size > config.LIMIT_FILE_SIZE) {
      toast('Solo archivos menos de 10MB', { type: 'error' })
      setIsLoading(false)
      return
    }

    const bannerToCreate: IBannerToCreate = { title: dataForm.title, image: imageToUpload[0]?.file }
    const { error } = await createBanner(bannerToCreate)

    if (error) {
      setIsLoading(false)
      handleFetchErrors(error.status, error.message)
      return
    }

    setIsLoading(false)
    router.push('/banners')
  }

  if (isLoading) return <LoaderPage />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl mx-auto mt-2'>
      <InputBasic
        id='title'
        type='text'
        register={register}
        rules={rulesForm}
        label='Título del Banner'
        placeholder='Título del Banner'
      />

      <UploadImage
        imageToUpload={imageToUpload}
        onChange={onChange}
      />

      <Button type='submit' classes='mt-4 w-full'>
        Crear Banner
      </Button>
    </form>
  )
}