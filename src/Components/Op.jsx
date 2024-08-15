import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {  ScrollTrigger } from "gsap/ScrollTrigger";
import './Op.css'
import bk from '../images/bk.jpg'
import g2 from '../images/g1.png'
import Button from "../Small/Button";
import CardContainer from "./CardContainer";
gsap.registerPlugin(ScrollTrigger)
const Op = () => {
   
  useEffect(() => {
    var tl = gsap.timeline({scrollTrigger:{
      trigger:"#main",
     //  markers:true,
      start:"50% 50%",
      end:"100% 50%",
      scrub:2,
      pin:true
  }});
  tl
  .to("#center",{
     height: "100vh",
  },'a')
  .to("#top",{
      top: "-50%",
   },'a')
   .to("#bottom",{
      bottom: "-50%",
   },'a')
  .to("#top-h1",{
      bottom: "40%"
   },'a')
   .to("#bottom-h1",{
      bottom: "-70%"
   },'a')
  .to("#center",{
     delay: -0.1,
     marginTop: "0%",
    //  height:"130vh"
  })

  return () => {
    if (tl.scrollTrigger) {
      tl.scrollTrigger.kill(); // Kill the ScrollTrigger instance
      console.log('ko')
    }
    tl.kill(); // Kill the timeline to avoid memory leaks
  };

  }, []);
 

  return (
    <>
    
    <div id="main" >
        <div id="top">
          <h1 id="top-h1">PROJECTS</h1>
        </div>
        <div id="center">
             {/* <div className="content">  */}
             <CardContainer></CardContainer>
             {/* </div>  */}
        </div>
        <div id="bottom">
          <h1 id="bottom-h1">PROJECTS</h1>
        </div> 
      </div>
    </>
  );
}

export default Op