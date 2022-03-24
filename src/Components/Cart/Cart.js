import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        console.log(product);
        totalPrice += product.price;
        totalShipping += product.shipping;
        
    }
    const tax = totalPrice * 10 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    // console.log(totalPrice);
    // console.log(totalShipping);
    // console.log(tax);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className='cart-price'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $ {totalPrice}</p>
                <p>Total Shipping Charge: $ {totalShipping}</p>
                <p>Tax: {tax}</p>
                <hr />
                <h4>Grand Total: {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;