//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
//import Link from 'next/link'

//text system? 
//import Date from '/library_system/date';
//import { getSortedPostsData } from '../library_system/texts'


import React, {useState} from 'react';
import SiteHeader from './MainSite/SiteHeader';
import SiteFlow from './MainSite/SiteFlow';


import utilStyles from '../styles/utils.module.css';

import Image from 'next/image'
import orbgeo from '../styles/style_images/master.png'
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
import woodblue from '../styles/flow_images/woodblue.png'
const WoodBlue = (props) => {
  return (
    <Image
      src={woodblue}
      alt=""
    />
  )
  }
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
       <div  className={utilStyles.flowcontainerheader}> 
         <Art /> 
        </div> 
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
