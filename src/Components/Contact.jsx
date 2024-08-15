import React, { useEffect } from 'react'
import '../Components/Contact.css'
import i2 from '../images/2.png'
import Social from '../Small/Social'
const Contact = () => {

  const openlink=(url)=>{
    window.open(url);
 }

  return (
    <div name="Contact" id='contact'>
       <div className="headings">
      <h3>Let's Connect</h3>
        <h1>Contact</h1>
       </div>
       <div className="container">
       <div className="ct-img">
       <img src={i2} alt="" />
       </div>
        <div className="detail-box">
           <div className="details-b">
           <h2>Phone number</h2>
           <h3>91+ 7073047274 <i class="fa-solid fa-phone" onClick={()=>openlink('tel:+917073047274')}></i></h3>
           </div>
           <div className="details-b">
           <h2>Email Id</h2>
           <h3> <span>saini.priyanshu130503@gamil.com</span> <i class="fa-solid fa-paper-plane" onClick={()=>openlink('mailto:saini.priyanshu130503@gmail.com')}></i> </h3>
           </div>
           <div className="icons">
           <i class="fa-brands fa-github"  onClick={()=>openlink('https://github.com/prayansh2')}></i>
           <i class="fa-brands fa-whatsapp" onClick={()=>openlink('https://wa.me/7073047274')}></i>
           <i class="fa-brands fa-linkedin" onClick={()=>openlink('https://linkedin.com/in/priyanshu-saini135')}></i>
           <i class="fa-brands fa-instagram"></i>
           </div>
           {/* <Social></Social> */}
        </div>
       </div>
       <div className="anime">
       <div className="con-down">
          <h1>Lets connect</h1>
          <h1>With trust</h1>
          <h1>build best things </h1>
        </div>
       <div className="con-down">
          <h1>Lets connect</h1>
          <h1>With trust</h1>
          <h1>build best things </h1>
        </div>
       </div>

    </div>
  )
}

export default Contact