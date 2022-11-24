interface IConfig {
  API: { URL: string }
  LIMIT_FILE_SIZE: 10485760
}

export const config: IConfig = {
  API: { URL: process.env.NEXT_PUBLIC_API_URL },
  LIMIT_FILE_SIZE: 10485760,
}