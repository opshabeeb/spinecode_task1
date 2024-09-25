import React from 'react'
import './Services.css'
import s1 from '../../assets/images/image 21.png'
import s2 from '../../assets/images/image 22.png'
import s3 from '../../assets/images/image 24.png'
import s4 from '../../assets/images/image 25.png'
import s5 from '../../assets/images/image 26.png'
import s6 from '../../assets/images/image 23.png'
import s7 from '../../assets/images/image 27.png'
function Services() {
  return (
    <div className="servicescontainer">
            <h1>Services</h1>

            <div className="service-content">
                <img src={s1} alt="" />
                
                <div className="service-text">
                    <h2>Custom Rubber Molding</h2>
                    <p>Custom Rubber Molding Industrial Elastomers excels in the manufacturing of high-quality molded rubber parts tailored to meet specific industry needs. Our state-of-the-art molding techniques ensure precision and durability, making our components ideal for a variety of applications in the automotive, industrial, and medical sectors.</p>
                </div>
            </div>
            <div className="service-content">
                
                
                <div className="service-text">
                    <h2>Rubber-to-Metal Bonded Components</h2>
                    <p>We specialize in the production of rubber-to-metal bonded components, combining the resilience of rubber with the strength of metal. This service is crucial for applications requiring a strong, yet flexible bond, providing superior performance in demanding environments.</p>
                </div>
                <img src={s2} alt="" />
            </div>
            <div className="service-content">
                <img src={s3} alt="" />
                
                <div className="service-text">
                    <h2>Extruded Rubber Components</h2>
                    <p>Our expertise in extruding rubber allows us to create complex profiles and shapes with high precision. These extruded components are used across various industries, ensuring reliable performance and longevity.</p>
                </div>
            </div>
            <div className="service-content">
                
                
                <div className="service-text">
                    <h2>Custom Formulations</h2>
                    <p>At Industrial Elastomers, we understand the importance of performance under specific conditions. We offer custom formulations of polymers and their blends, including Natural Rubber, SBR, NBR, PBR, Neoprene, EPDM, Polyurethane, Viton, and Silicone. Our compounds are designed to withstand wide temperature and pressure ranges, meeting stringent customer specifications and international standards..</p>
                </div>
                <img src={s4} alt="" />
            </div>
            <div className="service-content">
                <img src={s6} alt="" />
                
                <div className="service-text">
                    <h2>Industry Applications</h2>
                    <p>Our rubber components are engineered to meet the critical needs of diverse industries. We serve the automotive, oil field, chemical and petrochemical, electronic, pharmaceutical, defense, space, and marine sectors, ensuring our products perform reliably in the most demanding applications.</p>
                </div>
            </div>
            <div className="service-content">
                
                
                <div className="service-text">
                    <h2>Client Support and Custom Solutions</h2>
                    <p> pride ourselves on our ability to deliver custom solutions that meet our clients' exact specifications. Our team works closely with multinational companies, government organizations, and various engineering establishments to develop products that are both innovative and</p>
                </div>
                <img src={s5} alt="" />
            </div>

            {/* <div className="whycontainer">
                <div className="whyimg">
                    <img src={s7} alt="" />
                </div>
                <div className="whytext">
                    <h2>Why Choose Industrial Elastomers?</h2>
<ul>

                   <li>Over two decades of expertise in rubber component manufacturing.</li> 
                   <li>A comprehensive range of services tailored to diverse industry needs.</li>
            <li>High-quality, custom-formulated rubber products designed for critical applications.</li>
            <li>A commitment to meeting stringent quality and performance standards.</li>
             <li>Proven track record of serving prestigious clients across the globe.</li>

</ul>      
                </div>
            </div> */}
    </div>
  )
}

export default Services