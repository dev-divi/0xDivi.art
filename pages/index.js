import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import SiteTexts from './SiteTexts';
import SiteSocial from './SiteSocial';
import SiteProjects from './SiteProjects';
import SiteBook from './SiteBook';
import SiteLazer from './SiteLazer';

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
//🟡 
//🟠
//🟣
//⚫
//🔵
//🟤
//⚪
//🟢
//🔴
function Texts(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle}>texts🟡  </span>
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
    <span onClick={handleToggle}>book⚫</span>
    {showDetail && 
      <SiteBook /> 
    }
  </React.Fragment>)
  }        
export default function Home() {
  return (
    <div>
      <p> 
          <Lazer /> 
          <Texts /> 
          <Social /> 
          <Projects />
          <Book /> 
          <br /> <br /> 


{/* 
🟡
🟣 
⚫
🔴
*/}
      </p> 
    </div> 
  )
}
