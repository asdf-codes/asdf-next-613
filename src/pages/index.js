import Head from 'next/head'
import Layout from '../components/Layout'
import Newsletter from '../components/newsletter'
import SectionFaq from '../components/SectionFaq'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
    <Layout>
      <Section>
      <Head>
        
        <link rel="icon" href="/613.gif" />
      </Head>
      
        <Newsletter/>
      </Section>
      <Section>
        <SectionFaq/>
      </Section>
    </Layout>
    </>
  )
}
