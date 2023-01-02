import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ToastContainer } from 'react-toastify'

import { useLoadingPage } from 'lib/hooks/useLoadingPage'
import { AppPropsWithLayout } from 'lib/types'

import { GlobalModal } from 'components/layout/Modal/GlobalModal'
import { LoadingPage } from 'components/layout/LoadingPage'

import 'styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.min.css'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: [Line ${locations.line}, Column ${locations.column}], Path: ${path}`)
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({ uri: 'http://localhost:3000/api/graphql' })

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: { errorPolicy: 'all' },
    mutate: { errorPolicy: 'all' }
  },
})

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  )
}
