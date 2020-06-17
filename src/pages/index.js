import Head from 'next/head'
import Layout from '../components/Layout'
import Newsletter from '../components/newsletter'

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        
        <link rel="icon" href="/613.gif" />
      </Head>
        <Newsletter/>

    </Layout>
    </>
  )
}
