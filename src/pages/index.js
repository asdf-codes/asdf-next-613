import Head from 'next/head'
import Layout from '../components/Layout'
import Newsletter from '../components/newsletter'
import Faq from '../components/sections/Faq'
import Section from '../components/Section'
import {Intro, Discover, News, Join, Stat} from '../components/sections'

export default function Home() {
  return (
    <>
    <Layout>
      
      <Section>
        <Intro/>
      </Section>
      
      <Section>
        <Discover/>
      </Section>

      <Section>
        <News/>
      </Section>
      <Section>
        <Stat/>
      </Section>
      <Section>
        <Join>
          <Newsletter/>
        </Join>
      </Section>



      <Head>
        
        <link rel="icon" href="/613.gif" />
      </Head>
      <Section>
        <Faq/>
      </Section>
    </Layout>
    </>
  )
}
