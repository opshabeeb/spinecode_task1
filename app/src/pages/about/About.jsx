import React from 'react'
import './About.css'
import about1 from '../../assets/images/image 18.png'
import about2 from '../../assets/images/image 19.png'
import about3 from '../../assets/images/image 20.png'

function About() {
   

  return (
    <div className="about-container">
        <div className="aboutTitle">
            <h1>About Us</h1>

        </div>
    

        <div className="AboutContent">
            <div className="aboutimg">
               <img src={about1} alt="" />
            </div>
            <div className="aboutText">
                <h2>
                Pioneering Rubber Solutions Since 1997
                </h2>
                <p>
                Industrial Elastomers started production in the year 1997 at Alwaye, the industry town of Kerala. The company is in the business of manufacturing and supply high quality rubber components. The product range includes products like molded rubber parts, rubber to metal bonded components, extruded rubber components and a vast verity of similar rubber components which find critical applications in Industry, automotive and medical sectors. The company is managed by a well qualified, experienced and dynamic managerial structure. In a short span of time we have established a recognized name in this field as a quality manufacturer and supplies of rubber products. Our client lists includes multinational companies, government organizations, industrial and other engineering establishments.
                </p>
            </div>
        </div>
        <div className="AboutContent">
            
            <div className="aboutText">
                <h2>
                Quality Assurance Backed by Scientific Testing
                </h2>
                <p>
                We have a dedicated and skilled workforce with the organization for ling time. Our strict quality control measures make it possible for us to achieve the most strict and exacting standards for producing the best quality rubber components for our demanding customers. Beside our in – house quality control measures , our compounds are tested at cochin university of science and technology at regular intervells to assure and maintain the quality of products. The raw materials are processed at our in-house compounding facility and hence the new developments can be expedited in a short span of time. The technical know-how, practical experience and expertise in this field processed by the company’s workforce have made us to gain these capabilities.',

                </p>
                </div>
            <div className="aboutimg">
               <img src={about2} alt="" />
            </div>
            
        </div>
        <div className="AboutContent">
            <div className="aboutimg">
               <img src={about3} alt="" />
            </div>
            <div className="aboutText">
                <h2>
                Innovative Rubber Blends for Superior Performance
                </h2>
                <p>
                The company manufactures a vast range of moulded and extruded rubber components for the automotive and other industries. The core capability of the company is it’s ability to meet very stringent and demanding parameters. The company specializes in manufacturing components with polymers and their blends of Natural Rubber, Styrene Butadiene Rubber (SBR), and Acrylonitrile Butadiene Rubber (NBR), Poly Butadiene Rubber (PBR), Neoprene Rubber (CR), EPDM, Polyurethane, Viton, Silicone etc in-house compounding facility and hence the new developments can be expedited in a short span of time. The technical know-how, practical experience and expertise in this field processed by the company’s workforce have made us to gain these capabilities.',

                </p>
            </div>
        </div>

    </div>
  )
}

export default About