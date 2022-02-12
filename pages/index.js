import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import SiteTexts from './MainSite/SiteTexts';
import SiteBook from './MainSite/SiteBook';
import SiteLazer from './MainSite/SiteLazer';
//import SiteLetters from './MainSite/SiteLetters';


import utilStyles from '../styles/utils.module.css';
import Date from '/library_system/date';
//load texts from 
import { getSortedPostsData } from '../library_system/texts'
//import { getSortedPostsDataMagic } from '../library_system/magic'
//import { getSortedPostsDataLetters } from '../library_system/letters'

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

function Lazer(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>init cube🟢 </span>
    {showDetail && <p>
      -<SiteLazer /> -
      </p>}
  </React.Fragment> 
  )
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
    
 
export default function Home({ allPostsData }) {

  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);   
  return (
    <>


      <p> 
 
          <Lazer />
 
          <br /> <br /> <br /> 
      </p> 
    </> 
  )
}
