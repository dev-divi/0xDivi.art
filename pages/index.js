import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import SiteTexts from './MainSite/SiteTexts';
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
    <>
      <p> 
          <Lazer /> 
          <Texts /> 
          <Book />
          {/*<Letters />*/}
          <br /> <br /> <br /> 
      </p> 
    </> 
  )
}
