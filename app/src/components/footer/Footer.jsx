import React from 'react'
import './Footer.css'
import icon from '../../assets/images/icons.png'

const Footer = () => {
  return (

    <div className="footer-container">
        <div className="footer1">
            <h3>About Us</h3>
            
                <p>Home</p>
                <p>Services</p>
                <p>achievements</p>
                <p>Specialities</p>
                <p>ContactUs</p>
                
            <img src={icon} alt="" />
        </div>
        <div className="footer1">
            <h3>Industries We Serve</h3>
            
                <p>Automobile Components</p>
                <p>Extruded Components</p>
                <p>Moulded Components</p>
                <p>Pharmaceutical Rubber Products</p>
                <p>Rubber to mental Bonded</p>
                <p>Adhesives</p>
                <p>O rings and Gaskets</p>
                
            
        </div>
        <div className="footer1">
            <h3>Contact Us</h3>
            <p>1/243, Industrial Development Area,Erumathala Post, Alwaye - 683105.Ernakulam Dist, Kerala, India</p>
            <p><span>Phone:</span>  (91) (484) 2839627, 2672654</p>
           <p><span>Tele/Fax:</span>  (91)(484)  2672655</p> 
           <p><span>Mobile:</span>  9447024924</p>
           <p><span>Email:</span> indel@rediffmail.com</p>
        </div>
    

    </div>
  )
}

export default Footer