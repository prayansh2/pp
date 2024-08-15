import React from 'react'
import '../Components/Footer.css'
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="items">
            <h3><Link to="Home" duration={500} smooth={true}>Home</Link></h3>
            <h3><Link to="About" duration={500} smooth={true}>About</Link></h3>
            <h3><Link to="Project" duration={500} smooth={true}>Project</Link></h3>
            <h3><Link to="Contact" duration={500} smooth={true}>Contact</Link></h3>
        </div>
        <h2>@allRightreservebyPrayash</h2>
    </div>
  )
}

export default Footer