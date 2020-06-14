import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {Footer} from './Footer'

const name = '613'
export const siteTitle = 'Guide to you favourite city'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta
          name="description"
          content="news for those who ♡ Ottawa and National Capital Region "
        />
        <meta
          property="og:image"
          content="pattern.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        
          <>
            <img
              src="/icon.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h2 className={utilStyles.heading2Xl}>Welcome</h2>
            
          </>
        
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
<style jsx>{` * {
  text-align: center;
}


      `}</style>
      
      <Footer/>
      
      
    </div>
  )
}
