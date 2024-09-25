import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Step 1: Create a loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const data = response.data;
                console.log(data, "data from fetching ...............")
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); 
            }
        };
        fetchProducts();
    }, []); 

    return (
        <div className="plist-container">
            {loading ? ( 
                <div className='loading'><h1>Loading......</h1></div>
            ) : (
                products.map((product) => (
                    <div className="plistContent" key={product.id}>
                        <div className="plistImage">
                            <img src={product.image} alt="" className='plistImage' />
                        </div>
                        <div className="PlistText">
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ProductList;
