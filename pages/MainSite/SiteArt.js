
import one from '/styles/art_gallery/START_FROM_NOTHING_03.png'
import utilStyles from '/styles/utils.module.css';

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
        <div className={utilStyles.art_one}>
            {/* <One /> */}
        </div> 
     );
}
 
export default SiteArt;
