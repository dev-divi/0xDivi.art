import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../a_site_layout/Layout'
const name = '0xDivi.art'

const Header = () => {
    return ( 
        <div id="Header">
            <section className={utilStyles.headingMd}>

            <Head>
                <title>{siteTitle}</title> {/* tab title */}
            </Head>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            </section>
        </div>
     );
}
 
export default Header;