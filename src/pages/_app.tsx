import { ToastContainer } from 'react-toastify'

import { useLoadingPage } from 'lib/hooks/useLoadingPage'
import { AppPropsWithLayout } from 'lib/types'

import { LoadingPage } from 'components/layout/LoadingPage'

import 'styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { GlobalModal } from 'components/layout/Modal/GlobalModal'


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className='relative'>
      <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />
      <GlobalModal />

      {getLayout(<Component {...pageProps} />)}

      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}
