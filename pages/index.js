import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
//import SiteBook from './MainSite/SiteBook';
import SiteWritings from './MainSite/SiteWritings';

import SiteProjects from './MainSite/SiteProjects';
import SiteSocial from './MainSite/SiteSocial'; 
import SiteWebsites from './MainSite/SiteWebsites';
import utilStyles from '../styles/utils.module.css';
import Date from '/library_system/date';


import { getSortedPostsData } from '../library_system/texts'

//🟡 
//🟠
//🟣
//⚫
//🔵
//🟤
//⚪
//🟢
//🔴

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Writings(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>writings🟢{/* readings? */} </span>
    {showDetail && <p>
      - <SiteWritings /> -
      </p>}
  </React.Fragment> 
  )
} 
function Socials(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
  <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle} className={utilStyles.thepointer}>social🟢</span>
      {showDetail && 
      <SiteSocial /> 
      }
  </React.Fragment>)
  }  
  
function Book(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>books🟢</span>
    {showDetail && 
      <SiteBook /> 
    }
  </React.Fragment>)
  }        
  {/*
  function Letters(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
  
    return (
    <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle}className={utilStyles.thepointer}>letters🟢</span>
      {showDetail && 
        <SiteLetters /> 
      }
    </React.Fragment>)
    }
  */} 
    function TextsBak(){
      //const [showDetail,setShowDetail] = useState(false);
      //const handleToggle = () => setShowDetail(!showDetail);
      return (
       <React.Fragment>
        <h3></h3>
        <span onClick={handleToggle}className={utilStyles.thepointer}>texts🟢  </span>
        {showDetail && <p>
          <SiteTexts /> 
          </p>}
      </React.Fragment> 
      )
    }  
    function Projects(){
      const [showDetail,setShowDetail] = useState(false);
      const handleToggle = () => setShowDetail(!showDetail);
      
      return (
        <React.Fragment>
            <h3></h3>
            <span onClick={handleToggle} className={utilStyles.thepointer}>projects🟢</span>
            {showDetail && 
            <SiteProjects />  
            }
        </React.Fragment>)
      }   
 

export default function Home({ allPostsData }) {

  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);   
  return (
    <>


      <p> 
         
          <Writings /> 
          <Projects />
          <Socials /> 

          
            {/*<Letters />*/}
          <br /> <br /> <br /> 
      </p> 
    </> 
  )
}
