import Link from 'next/link'
import utilStyles from '/styles/utils.module.css';

{/*             What is Flow? */}
const SiteFlow = () => {
    return ( 
        <p>
            <h3> - Flow - </h3>
            <iframe width="315" height="315" src="https://www.youtube.com/embed/videoseries?list=PLwgC-cD-X2_UIk_Ef7VqSzXQUkDzobqoQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <a  className={utilStyles.black} href="https://youtube.com/playlist?list=PLwgC-cD-X2_UIk_Ef7VqSzXQUkDzobqoQ">- Art and Flow YouTube Playlist - </a> <br /> 

            <p > 
                <a  className={utilStyles.woodlink} href="https://medium.com/@0xdivi/why-we-are-not-yet-living-in-the-flow-state-b2cb355b686d">- Why We Are Not Yet Living In The Flow State -  </a> <br /> 
                <br /> 
                <a className={utilStyles.woodlink} href="https://medium.com/@0xdivi/possibility-flow-state-and-dream-26ee604e8f0">- Possibility - Flow State and Dream -  </a>
            </p>

            <h3> - Recovery - </h3> 
            <iframe width="315" height="315" src="https://www.youtube.com/embed/5szvutMISsw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
        </p> 
        
    );

}
 
export default SiteFlow;