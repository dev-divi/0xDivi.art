import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'Next.js Sample Website'

const Layout = ( { children } ) => {
    return ( 
        <div className={styles.container}>
            <Header /> 
            { children }
            {/* <Footer /> */}<br />  
        </div>
     );
}
 
export default Layout;