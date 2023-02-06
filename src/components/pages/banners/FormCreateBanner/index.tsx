/* eslint-disable @next/next/no-img-element */
import type { ImageListType } from 'react-images-uploading'
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
  const { register, handleSubmit, formState: { errors } } = useForm<IBannerToCreate>()
  const [bannerImg, setBannerImg] = useState({ mobile: [], desktop: [] })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onChange = (image: ImageListType, addUpdateIndex?: number[], type?: 'mobile' | 'desktop') => {
    if (type === 'mobile')
      setBannerImg(prevState => ({ ...prevState, mobile: image }))

    if (type === 'desktop')
      setBannerImg(prevState => ({ ...prevState, desktop: image }))
  }

  const onSubmit = async (dataForm: IBannerToCreate) => {
    setIsLoading(true)

    if (!bannerImg.mobile || !bannerImg.mobile[0]) {
      toast('La imagen mobile es requerida', { type: 'warning' })
      setIsLoading(false)
      return
    }

    if (!bannerImg.desktop || !bannerImg.desktop[0]) {
      toast('La imagen desktop es requerida', { type: 'warning' })
      setIsLoading(false)
      return
    }

    if (bannerImg.mobile[0]?.file?.size >= config.FILE_LIMITS.BANNERS.IMAGE_SIZE) {
      toast('La imagen para mobile debe pesar menos de 5MB', { type: 'warning' })
      setIsLoading(false)
      return
    }

    if (bannerImg.desktop[0]?.file?.size >= config.FILE_LIMITS.BANNERS.IMAGE_SIZE) {
      toast('La imagen para desktop debe pesar menos de 5MB', { type: 'warning' })
      setIsLoading(false)
      return
    }

    const bannerToCreate: IBannerToCreate = {
      title: dataForm.title,
      imageMobile:  bannerImg.mobile[0]?.file,
      imageDesktop: bannerImg.desktop[0]?.file
    }

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
      <section className='flex flex-col md:flex-row justify-between items-center gap-x-6'>
        <InputBasic
          id='title'
          type='text'
          register={register}
          rules={rulesForm}
          label='Título del Banner'
          placeholder='Título del Banner'
          errors={errors}
        />
      </section>

      <section className='flex justify-between items-start gap-x-6'>
        <UploadImage
          imageToUpload={bannerImg.mobile}
          onChange={onChange}
          type='mobile'
        />

        <UploadImage
          imageToUpload={bannerImg.desktop}
          onChange={onChange}
          type='desktop'
        />
      </section>

      <Button type='submit' classes='mt-4 w-full'>
        Crear Banner
      </Button>
    </form>
  )
}