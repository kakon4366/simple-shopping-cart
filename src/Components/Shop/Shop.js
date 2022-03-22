import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {

        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h4>Total Products: {products.length}</h4>
               <div className='products'>
                   {
                       products.map(product => <Product product={product} key={product.id} ></Product>)
                   }
               </div>
            </div>
            <div className='cart-container'>
                <h2>this is cart container</h2>
            </div>
        </div>
    );
};

export default Shop;