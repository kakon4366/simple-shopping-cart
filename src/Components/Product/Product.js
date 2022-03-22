import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings, ratingsCount} = props.product;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-details'>
                <h3>{name}</h3>
                <h4>Price: $<span>{price}</span></h4>
                <div className="seller-rating">
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} ({ratingsCount})</p>
                    <button className='cart-button'>
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;