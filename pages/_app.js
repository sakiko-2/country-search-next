import '../styles/globals.css'
import Layout from '../components/layout'
import {CountryContext, useFetch} from '../hooks/useFetch'

function MyApp({Component, pageProps}) {
  const {data} = useFetch()

  return (
    <Layout>
      <CountryContext.Provider value={data}>
        <Component {...pageProps} />
      </CountryContext.Provider>
    </Layout>
  )
}

export default MyApp
