import Footer from "../Design/Footer";
import AboutInfo from "./MainAbout/AboutInfo"
function info(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
    return (
     <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle}>info🟢 </span>
      {showDetail && <p>
        -<AboutInfo /> -
        </p>}
    </React.Fragment> 
    )
  } 
const About = () => {
    return ( 
        <div> 
            {/* <h1> About </h1> */} 
            <p> This is a website about sharing critical, consolidated meaning. </p> 
            <p> The text on the homepage is interactive even though it does not look it. </p> 
            <p> The Letters Project [ To be added ] is composed of interactive pieces that change when you click on certain words.</p>

            <p> Please join the email list to be notified of new texts, letters, books, and games. </p>
            <p> You can also follow site updates on twitter. </p>

            <Footer />
        </div>
     );
}
 
export default About;