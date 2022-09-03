//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//import Link from 'next/link'

//text system? 
//import Date from '/library_system/date';
//import { getSortedPostsData } from '../library_system/texts'


import React, {useState} from 'react';
import SiteHeader from './MainSite/SiteHeader';
//import SiteFlow from './MainSite/SiteFlow';
import SiteArt from './MainSite/SiteArt';
import SiteWritings from './MainSite/SiteWritings';
import SiteResources from './MainSite/SiteResources';

import utilStyles from '../styles/utils.module.css';

import Image from 'next/image'
import orbgeo from '../styles/art_gallery/MASTERFLOW.ART.500.png'
const OrbGeo = (props) => {
  return (
    <Image
      src={orbgeo}
      alt=""
      width=""
      height=""
    />
  )
  }
{/*import woodblue from '../styles/flow_images/woodblue.png'
const WoodBlue = (props) => {
  return (
    <Image
      src={woodblue}
      alt=""
    />
  )
  } */} 
//🟡 
//🟠
//🟣
//⚫
//🔵
//🟤
//⚪
//🟢
//🔴

{/* 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
*/}

function FlowHeader(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
  <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle} className={utilStyles.thepointer}>MasterFlow.Art</span>
      {showDetail && 
      <SiteHeader /> 
      } 
  </React.Fragment>)
  }  
  {/*////////////////////////////////////////////////////////////////////////////////////// 
  ////////////////////////////////WRITING FUNCTION 
  /////////////////////////////////////////////////////////////////////////////*/}
  function Writings(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
    return (
    <React.Fragment>
        <h3></h3>
        <span onClick={handleToggle} className={utilStyles.thepointer}>Writings🟢</span>
        {showDetail && 
        <SiteWritings /> 
        }
    </React.Fragment>)
    }  

  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////ART FUNCTION ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////*/}
  function Art(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
    return (
    <React.Fragment>
        <h3></h3>
        <div className={utilStyles.goldbutton_borderdiv}>
        <span onClick={handleToggle} className={utilStyles.thepointer}> <button className={utilStyles.goldbutton}> Art🟢</button></span> 
        </div>
        {showDetail && 
        <SiteArt /> 
        }
    </React.Fragment>)
    }  
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////RESOURCES FUNCTION ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////*/}
function Resources(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
  <React.Fragment>
      <h3></h3>
      <div className={utilStyles.goldbutton_borderdiv}>
      <span onClick={handleToggle} className={utilStyles.thepointer}> <button className={utilStyles.goldbutton}> Life🟢</button></span> 
      </div>
      {showDetail && 
      <SiteResources /> 
      }
  </React.Fragment>)
  }  
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////LOVE FUNCTION ///////////////////////////////////////////////////////
////////////////////////////////////////////////////dont worry there was no plan here lol/////////////////////////////////*/}
function Love(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
  <React.Fragment>
      <h3></h3>
      <div className={utilStyles.goldbutton_borderdiv}>
      <span onClick={handleToggle} className={utilStyles.thepointer}> <button className={utilStyles.goldbutton}> Love🟢</button></span> 
      </div>
      {showDetail && 
       <p>  </p>
      }
  </React.Fragment>)
  }  

{/* ////////////////////////////////
//////////////         SITE 
*/}
export default function Home({ allPostsData }) {

  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);   
  return (
    <>
      <div className={utilStyles.flowcontainer}>

        {/* //////////////////////HEADER/////////////////////////*/}
        <div  className={utilStyles.flowcontainerheader}> 
          <OrbGeo /> 
          {/*<FlowHeader /> */}
        </div> 


        <div className={utilStyles.spacer}> </div> 
                        {/* <Spacer />  */} 
      <div className={utilStyles.flowcontainerheader}> 
      {/*
      /////////////////////LAYOUT
      */}

          
          <Art />
          <Resources /> 
          <Love /> 
          <h3 > - Stuff - </h3>
          <SiteWritings /> 


     
      </div> 
          
      </div>
      
        
          

          <br /> <br /> <br /> 
      
    </> 
  )
}
