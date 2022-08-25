import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../src/components/menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Menu />

    </div>
    )
}

export default MyApp
