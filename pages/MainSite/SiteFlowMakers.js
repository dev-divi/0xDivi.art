import Link from 'next/link'
import utilStyles from '/styles/utils.module.css';

{/*             What is Flow? */}
const SiteFlowMakers = () => {
    return ( 
        <p className={utilStyles.resources}>
            <h3> - FlowMakers - </h3>
            
            <p className={utilStyles.underline}>
                <span className={utilStyles.crimson}>
                    <span className={utilStyles.center}>
                        <a href="https://medium.com/@0xdivi/what-is-a-flowmaker-1a6d9bd6cd3">What is a FlowMaker?</a>
                        <br /> 
                        <br /> 
                        <a href="https://www.reddit.com/r/theflowmakers/"> The FlowMakers Community Art Forum on Reddit</a>
                    </span>
                </span>
            </p>
            <br /> 
            
        </p> 
        
    );

}
 
export default SiteFlowMakers;