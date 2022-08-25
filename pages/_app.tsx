import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../src/components/menu'
import Cabecalho from '../src/components/head'
import SubMenu from '../src/components/sub-menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Cabecalho />
      <Menu />
      <SubMenu />
    </div>
  )
}

export default MyApp
