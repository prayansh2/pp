import React from 'react'
import { Link } from 'react-scroll';
import g1 from '../images/g1.png'
import l1 from '../images/l1.png'
import img1 from '../images/1.png'
import '../Components/Hero.css'
import Button from '../Small/Button'
import Social from '../Small/Social'
import res from '../Small/prayansh11.pdf'
const Hero = () => {
 
  const fp=()=>{
    console.log('happy');
    const anchor=document.createElement('a');
    anchor.href=res;
    anchor.setAttribute('download','download_file.pdf');
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  const openlink=(url)=>{
    window.open(url);
 }

  return (
    <div id='Home' name="Home" className="main">
    <div className="shero">
   <div  className="stext-section">
   <h3>Hello, I'm </h3>
   <h1>Prayansh</h1>
   <h2>FULL STACK DEVELOPER</h2>
   <div className="socials">
   <i class="fa-brands fa-github"  onClick={()=>openlink('https://github.com/prayansh2')}></i>
  <i class="fa-brands fa-linkedin-in " onClick={()=>openlink('https://linkedin.com/in/priyanshu-saini135')}></i>
   </div>
   <div className="button">
      <Button icon="fa-solid fa-arrow-down" text="Resume" fun={fp} ></Button>
     <Link to="Contact" duration={500} smooth={true}><Button icon="fa-solid fa-handshake"  text="contact"></Button></Link>
   </div>
   </div>
   <div className="img-section">
       <img src={img1} alt="" />
   </div>
  </div>
   </div>
  )
}

export default Hero