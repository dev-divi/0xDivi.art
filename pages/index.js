import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';

function Social(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
      <h3>
           
      </h3>
      <span onClick={handleToggle}>social </span>
    {showDetail && <p>
      <a href="https://amysterycubesclub.com/">club</a>
          <br /> 
          <a href="https://twitter.com/0xdivi">twitter</a> 
          <br /> 
          <a href="https://github.com/dev-divi">github</a>  
          <br /> 
          <a href="https://www.goodreads.com/user/show/135257757-james-the-blessed">goodreads</a>  
      </p>}
  </React.Fragment>)

}  
function Projects(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
      <h3>
            
      </h3>
      <span onClick={handleToggle}>projects </span>
    {showDetail && <p>
        <a href="https://lightdark.art/">lightdark</a>  
        <br /> 
        <a href="https://heroorvillain.io/">hero or villain</a>  
        <br /> 
        <a href="https://sorcerawr.com/theupdater2">updater</a>  
        <br /> 
        <a href="https://divinescripture.art/">scripture entropy</a>  
      </p>

      }
  </React.Fragment>)
}

function Book(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
      <h3>
            
      </h3>
      <span onClick={handleToggle}>book </span>
    {showDetail && <p>
        <Link href="/posts/first-post">
          <a>- The Magic of Potentiality</a>
        </Link>
      </p>

      }
  </React.Fragment>)
  }        
export default function Home() {
  return (
    <div>
      <p>
          <Social /> 
          <Projects />
          <Book /> 
          <br /> 
      </p> 
    </div> 
  )
}
