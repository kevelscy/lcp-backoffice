import { IFetchReturn } from './http'

export interface IBannerToCreate {
  title: string
  image: FileList
}

export interface IBannerToUpdate {
  title: string
  image: FileList
}

export interface IBanner  {
  id: string
  title: string
  image: {
    publicId: string
    url: string
    width: number
    height: number
  },
  createdAt: string
  updatedAt: string
}

export interface IReturnBanners extends IFetchReturn {
  data: IBanner[]
}

export interface IReturnBanner extends IFetchReturn {
  data: IBanner
}