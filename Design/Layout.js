import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = '0xDivi.art'
export const name = '0xDivi.art'

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