import React from "react";
import "./ProductReview.css";

const ProductReview = ({ product }) => {
	const { name, img, price, shipping, quantity } = product;
	return (
		<div className="review-product">
			<div className="product-thumbnail">
				<img src={img} alt="" />
			</div>
			<div className="product-detail-container">
				<div className="product-details">
					<h3>{name}</h3>
					<p className="product-price">
						Price: $<span>{price}</span>
					</p>
					<p>
						<small>
							Shipping: $<span>{shipping}</span>
						</small>
					</p>
					<p>
						<small>Quantity: {quantity}</small>
					</p>
				</div>
				<div className="delete-button">
					<button>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default ProductReview;
