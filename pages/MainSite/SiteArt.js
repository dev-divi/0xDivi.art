import Image from 'next/image'

import utilStyles from '/styles/utils.module.css';
import artStyles from '/styles/art.module.css';
{/* 
import one from '/styles/art_gallery/sfn.png'
const One = (props) => { return ( <Image src={one} alt="" width="" height="" /> )}
*/}
const SiteArt = () => {
     {/* <One /> */}
    return (
        <div> 
          {/*<div className={artStyles.art_one}></div> */}
          <div className={artStyles.art_2}></div>
          <div className={artStyles.art_3}></div>
          <div className={artStyles.art_4}></div>
          <div className={artStyles.art_5}></div>
          <div className={artStyles.art_6}></div>
          - Tao Te Ching Wallpapers - 
          <p> - 01 - </p>
          <div className={artStyles.art_7}></div>
          <p> - 02 - </p>
          <div className={artStyles.art_8}></div>
          {/* 
          <div className={artStyles.art_9}></div>
          <div className={artStyles.art_10}></div>*/}


        </div> 
        
     );
}
 
export default SiteArt;
