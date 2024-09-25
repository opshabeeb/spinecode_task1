import React from 'react'
import './Product.css'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import p5 from '../../assets/images/p5.png'
import p6 from '../../assets/images/p6.png'
import p7 from '../../assets/images/p7.png'
import indel from '../../assets/images/indel.png'
import { Link } from 'react-router-dom'
import Productlist from '../productlist/Productlist'

function Product() {
  return (
    <div className="productcontainer">
        <h1>Product Category</h1>
       <div className="productcontent">
        <div className="productcontent1">
            <div className="products">
                <img src={p1} alt="" />
                <div className="prod">
                    <h2>Aoutomobile Component</h2>
                    <button >viewProduct  </button>
                </div>
            </div>
            <div className="products">
                <img src={p2} alt="" />
                <div className="prod">
                    <h2>Moduled Component</h2>
                    <button >viewProduct  </button>
                </div>
            </div>
            <div className="products">
                <img src={p3} alt="" />
                <div className="prod">
                    <h2>Rubber to Mental Bonded</h2>
                    <button >viewProduct  </button>
                </div>
            </div>
            <div className="products">
                <img src={p4} alt="" />
                <div className="prod">
                    <h2>0 rings and Gaskets</h2>
                    <button >viewProduct  </button>
                </div>
            </div>
            
        </div>
        <div className="productcontent2">
            <div className="products">
                <img src={p5} alt="" />
                <div className="prod">
                    <h2>Extruded Component</h2>
                    <button >viewProduct </button>
                </div>
            </div>
            <div className="products">
                <img src={p6} alt="" />
                <div className="prod">
                    <h2>Pharmaceutical Rubber Products</h2>
                    <button > viewProduct </button>
                </div>
            </div>
            <div className="products">
                <img src={p7} alt="" />
                <div className="prod">
                    <h2>Adhesives</h2>
                    <button >viewProduct </button>
                </div>
            </div>
            
        </div>
        </div>

        <div className="Indelcontainer">
            <div className="intelText">
               <h2>Indel quality Rubber moulders</h2>

               <p>
               We manufacture and supplies quality rubber products as per customers specification. The company is managed by a well qualified, experienced and dynamic managerial structure. In a short span of time we have established a recognized name in this field as a quality manufacturer and supplies of rubber products. Our client lists includes multinational companies, government organizations, industrial and other engineering establishments.
               </p>
            </div>
            <div className="intelImg">
                <img src={indel} alt="" />
            </div>
        </div>

        <Link to='/productlist' className='ProductListButton'>
      View All Products
    </Link>
    </div>
  )
}

export default Product