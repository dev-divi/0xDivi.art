import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from './Layout'
import styles from '../styles/Home.module.css'

const name = '0xDivi.art'

const NavBar = () => {
    return ( 
        <nav className={utilStyles.siteheader}>
            <section className={utilStyles.headingMd}>

            <Head>
                <title>{siteTitle}</title> {/* tab title */}
            </Head>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
              <Link href="/"> - Home </Link>
              <Link href="/about"> - About </Link>
              {/* 
              <Link href=""> - Social </Link> 
              <Link href=""> - Gaming </Link> 
              */} 
            <section className={utilStyles.navbar_links}>
            </section>
            
            </h2>
            </section>


        </nav> 
     );
}
 
export default NavBar;