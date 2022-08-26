import type { NextPage } from 'next'
import Head from 'next/head'

import HomePage from '../src/screen/home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>All Dev</title>
        <meta name="description" content="All Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}

export default Home
