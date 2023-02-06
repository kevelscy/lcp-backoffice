interface IConfig {
  API: { URL: string }
  FILE_LIMITS: {
    BANNERS: {
      IMAGE_SIZE: 3145728 // 3mb
    }
  }
}

export const config: IConfig = {
  API: { URL: process.env.NEXT_PUBLIC_API_URL },
  FILE_LIMITS: {
    BANNERS: {
      IMAGE_SIZE: 3145728 // 3mb
    }
  }
}