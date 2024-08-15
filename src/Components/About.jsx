import React from 'react'
import '../Components/About.css'
import abt from '../images/abt.jpg'
import img from '../images/c1.png'
import img1 from '../images/bk.jpg'
import le from '../images/le.png'
import hk from '../images/hk.png'
const About = () => {
  return (
    <div name="About" id='About'>
       <div className="headings">
       <h3 className="mt">Let know about me</h3>
        <h1>About</h1>
       </div>
       <div className="mid-section">
        <div className="abt-text">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi autem reiciendis. Vitae quia obcaecati dolorum repudiandae, quisquam, saepe harum quis facere debitis repellat pariatur, fugit sapiente enim iste? Eveniet?</p>
        </div>
        <div className="abt-img">
          <img src={abt} alt="" />
        </div>
       </div>
       <div className="down-section">
        <div className="card">
      <h1>Education</h1>
      <div className="abt-edu">
        <h2>BTech</h2>
        <span>Modern Institute of technology and research center</span>
        <li>8.0 <span>CGPA</span> </li>
      </div>
      <div className="abt-edu">
        <h2>12<sup>th</sup> </h2>
        <span>achiver's academy</span>
        <li>76.4%</li>
      </div>
      <div className="abt-edu">
        <h2>10<sup>th</sup> </h2>
        <span>achiver's academy</span>
        <li>74%</li>
      </div>
      <div className="abt-edu"></div>
        </div>
        <div className="card">
          <h1>Achivement</h1>
          <div className="abt-info">
            <img src={le} alt="" />
            <h2>solve 150+ problem on <span>LEETCODE</span></h2>
          </div>
          <div className="abt-info">
            <img src={hk} alt="" />
            <h2>solve 150+ problem on <span>LEETCODE</span></h2>
          </div>
          <div className="certi">
              <h1>CERITICATE'S</h1>
            <div className="certi-item">
            <div className="certi-i">
              <img src={img1} alt="" />
              <h2>HACKERRANK</h2>
            </div>
            <div className="certi-i">
              <img src={img1} alt="" />
              <h2>OSI'S INFOBYTE</h2>
            </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default About