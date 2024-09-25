import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from '../pages/about/About'
import Product from '../pages/products/Product'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Productlist from '../pages/productlist/Productlist'
import Home from '../pages/home/Home'
function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/Services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/productlist' element={<Productlist/>} />
            
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes