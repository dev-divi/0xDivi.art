import Image from 'next/image'

import one from '/styles/art_gallery/sfn.png'
import utilStyles from '/styles/utils.module.css';
import artStyles from '/styles/art.module.css';
const One = (props) => {
  return (
    <Image
      src={one}
      alt=""
      width=""
      height=""
    />
  )
  }
const SiteArt = () => {
    return (
        <div className={artStyles.art_one}>
            {/* <One /> */}
        </div> 
     );
}
 
export default SiteArt;
