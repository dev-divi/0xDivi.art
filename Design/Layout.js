import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'MasterFlow.art'
export const name = 'MasterFlow.art'

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