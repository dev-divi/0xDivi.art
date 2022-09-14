import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'FlowMaker.art'
export const name = 'FlowMaker.art'

const Layout = ( { children } ) => {
    return ( 
        <div className={styles.container}>
            <Header className={styles.name} /> 
            { children }
            {/* <Footer /> */}<br />  
        </div>
     );
}
 
export default Layout;