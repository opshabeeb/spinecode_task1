import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductList.css'
function Productlist() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts = async () => {
            
              const response = await axios.get('https://fakestoreapi.com/products');

              const data = response.data 
              console.log(data, "data from fethng ...............")
              setProducts(data); 
              console.log(products, "productas...........")
            
          };
      
          fetchProducts();
    })
  return (
    <div className="plist-container">
        {
        products.map((product)=>(
        <div className="plistContent" key={product.id}>
            <div className="plistImage">
              <img src={product.image} alt=""  className='plistImage'/>
            </div>
            <div className="PlistText">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            </div>
        
        </div>
        ))
}
    </div>
    
  )
}

export default Productlist