import React, { useEffect, useState } from 'react';
import './GetProducts.css';

function GetProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://203.159.30.224:3000/getProducts")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className="card_container">

        
            {products.map(product => (
                <div key={product.product_id} className="card">
                    <img src={product.product_image_url} alt={product.product_name} />
                    <h3>{product.product_name}</h3>
                    <p>Price: {product.product_price}</p>
                    <p>Quantity: {product.product_quantity}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default GetProducts;