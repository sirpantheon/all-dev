import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../src/components/menu'
import Cabecalho from '../src/components/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Cabecalho />
      <Menu />
      

    </div>
    )
}

export default MyApp
