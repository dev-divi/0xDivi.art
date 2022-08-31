//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//import Link from 'next/link'

//text system? 
//import Date from '/library_system/date';
//import { getSortedPostsData } from '../library_system/texts'


import React, {useState} from 'react';
import SiteHeader from './MainSite/SiteHeader';
import SiteFlow from './MainSite/SiteFlow';
import SiteWritings from './MainSite/SiteWritings';

import utilStyles from '../styles/utils.module.css';

import Image from 'next/image'
import orbgeo from '../styles/art_gallery/MASTERFLOW.ART.EMBOSS.png'
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
  function Art(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
    return (
    <React.Fragment>
        <h3></h3>
        <span onClick={handleToggle} className={utilStyles.thepointer}>Art🟢</span>
        {showDetail && 
        <SiteHeader /> 
        }
    </React.Fragment>)
    }  

export default function Home({ allPostsData }) {

  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);   
  return (
    <>
      <div className={utilStyles.flowcontainer}>
        <div  className={utilStyles.flowcontainerheader}> 
          
          <OrbGeo /> 
          {/*<FlowHeader /> */}
        </div> 

        <div className={utilStyles.spacer}> </div> 
                        {/* <Spacer />  */} 
      <div className={utilStyles.flowcontainerheader}> 
      {/*-----------------------Temporary Layout: ----------------------------------------------*/}

          <h3 > - Stuff - </h3>
          <SiteWritings /> 

     
      </div> 
      {/* Normal Design:
         <Writings />      
         <div  className={utilStyles.chakrapurple}>      
            <Art />  
          </div>
        </div>  */}
                       {/*   <Spacer />        


                        <SiteFlow />                           
                        <Spacer />     
                        <SiteCubes />      
                        <Spacer />      
                        <SiteBook/>       
                        <Spacer />          
                        <Spacer />          
                        <Spacer />      
                        
                        <Socials /> 
                        */}  
          
      </div>
      
        
          

          <br /> <br /> <br /> 
      
    </> 
  )
}
