import React, { useEffect, useState } from 'react';
import { addToDB, getStoredCart } from '../../utilities/myFakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {

        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect( () => {

        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];

        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

                console.log(addedProduct, quantity);
            }
        }
        setCart(savedCart);
        console.log(savedCart);
        
    }, [products])

    //add to cart handler func
    const addToCartHandler = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        //add to db
        addToDB(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h4>Total Products: {products.length}</h4>
               <div className='products'>
                   {
                       products.map(product => <Product addToCartHandler={addToCartHandler} product={product} key={product.id} ></Product>)
                   }
               </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;