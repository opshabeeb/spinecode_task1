import React from 'react'
import './Home.css'
import About from '../about/About'
import Product from '../products/Product'
import Services from '../services/Services'
import Contact from '../contact/Contact'
function Home() {
  return (
    <>
    <div className="HomeContainer">
        <div className="HomeText">
            <h1 className='HomeHeading'>We Mould Your Needs in Rubber</h1>
            <p className='Homepara'>Empowering industries with bespoke rubber solutions since 1997, Industrial Elastomers is your trusted partner for precision-engineered rubber components.</p>
        </div>
    </div>
    <About/>
    <Product/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home