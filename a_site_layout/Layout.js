import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from '../styles/layout.module.css';

export const siteTitle = 'Next.js Sample Website'

const Layout = ( { children } ) => {
    return ( 
        <div className={styles.container}>
            <NavBar /> 
            { children }
            <Footer /> 
        </div>
     );
}
 
export default Layout;