import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle, name } from './Layout'
import styles from '../styles/Home.module.css'

const NavBar = () => {
    return ( 
        <nav className={utilStyles.siteheader}>
            <section className={utilStyles.headingMd}>
            <Head>
                <title>{siteTitle}</title> {/* tab title */}
            </Head>
            <h2 className={utilStyles.headingLg}>
              {/* <Link href="/">                                 SITE NAME 
                <a className={utilStyles.colorInherit}>{name}</a>
    </Link> */}
              <span className={utilStyles.header0xdivi}>

              <Link href="/"> - Home </Link>
              <Link href="/projects"> - Projects </Link>
         
              </span>
            <section className={utilStyles.navbar_links}>
            </section>
            </h2>
            </section>
        </nav> 
     );
}
 
export default NavBar;