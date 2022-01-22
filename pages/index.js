import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import SiteTexts from './MainSite/SiteTexts';
import SiteSocial from './MainSite/SiteSocial';
import SiteProjects from './MainSite/SiteProjects';
import SiteBook from './MainSite/SiteBook';
import SiteLazer from './MainSite/SiteLazer';
import SiteLetters from './MainSite/SiteLetters';
//🟡 
//🟠
//🟣
//⚫
//🔵
//🟤
//⚪
//🟢
//🔴
function Lazer(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>fire lazer🟢 </span>
    {showDetail && <p>
      -<SiteLazer /> -
      </p>}
  </React.Fragment> 
  )
} 
function Texts(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>texts🟢  </span>
    {showDetail && <p>
      <SiteTexts /> 
      </p>}
  </React.Fragment> 
  )
}  
function Social(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
  <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>social🔴</span>
    {showDetail && 
    <SiteSocial /> 
    }
  </React.Fragment>)
}  

function Projects(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>projects⚪</span>
    {showDetail && 
      <SiteProjects /> 
    }
  </React.Fragment>)
}
function Book(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>book🟢</span>
    {showDetail && 
      <SiteBook /> 
    }
  </React.Fragment>)
  }        
  function Letters(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
  
    return (
    <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle}>letters🟢</span>
      {showDetail && 
        <SiteLetters /> 
      }
    </React.Fragment>)
    }


export default function Home() {
  return (
    <div>
      <p> 
          <Lazer /> 
          <Texts /> 
          {/*<Social />  */}
          {/*<Projects />*/}
          <Book />
          {/*<Letters />*/}
          <br /> <br /> 
      </p> 
    </div> 
  )
}
