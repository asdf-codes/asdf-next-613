import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {Footer} from './Footer'
import {ChangingText} from './ChangingText'

const name = '613'
export const siteTitle = 'Guide to you favourite city'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/613.gif" />
        <meta
          name="description"
          content="For those who ♡ Ottawa and want to make it a better place for everyone "
        />
        <meta
          property="og:image"
          content="pattern1.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        
          <>
            <img
              src="/613.gif"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            {/* <h2 className={utilStyles.heading2Xl}></h2> */}
            <ChangingText/>
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
  
  img:hover{
    backgroundImg: url("./613.gif")
  }
}


      `}</style>
      
      <Footer/>
      
      
    </div>
  )
}
