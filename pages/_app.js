import '../styles/globals.css'
import Layout from '../components/layout'
import {Wrapper} from '../components/wrapper'

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Layout>
  )
}

export default MyApp
