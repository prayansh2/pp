import React from 'react'
import './Skill.css'
import img1 from '../images/3.png'
import img2 from '../images/4.png'
import img3 from '../images/5.png'
import img4 from '../images/6.png'
import img5 from '../images/7.png'
import img6 from '../images/8.png'
import img7 from '../images/9.png'
import img8 from '../images/10.png'
import { useEffect } from 'react'
import sk from '../images/sk.png'
const Skill = () => {
   
const imgs=[img1,img2,img3,img4,img5,img6,img7];
    useEffect(()=>{
        // var copy = document.querySelector(".logos-slide").cloneNode(true);
        // document.querySelector(".logos").appendChild(copy);
        // var copy2 = document.querySelector(".two").cloneNode(true);
        // document.querySelector(".logos2").appendChild(copy2);

    },[])

  return (
    <>
    <div id='skill'>
     <div className="headings or">

<h3>My specilisations</h3>
<h1>Skills</h1>
</div>
     <div class="skill-main">
      <div class="logos">
        <div class="logos-slide">
       {imgs.map((v,i)=>{
          return (
            <div key={i} className="skill-img">
              <img src={v} alt="" />
            </div>
          )
       })}
        </div>
        <div class="logos-slide">
       {imgs.map((v,i)=>{
          return (
            <div key={i} className="skill-img">
              <img src={v} alt="" />
            </div>
          )
       })}
        
        </div>
      </div>
      <div class="logos ">
        <div class="logos-slide logo2">
       {imgs.map((v,i)=>{
          return (
            <div key={i} className="skill-img">
              <img src={v} alt="" />
            </div>
          )
       })}
        </div>
        <div class="logos-slide logo2">
       {imgs.map((v,i)=>{
          return (
            <div key={i} className="skill-img">
              <img src={v} alt="" />
            </div>
          )
       })}
        
        </div>
      </div>
    </div>
    <div className="sk-down">
        <div className="sk-img">
            <img src={sk} alt="" />
        </div>
        <div className="sk-text">
            <h2>Skill's</h2>
            <h3>I'm proefficient in...</h3>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skill