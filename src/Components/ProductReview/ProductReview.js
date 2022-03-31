import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductReview.css";

const ProductReview = ({ product, removeItemHandler }) => {
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
				<div>
					<button
						onClick={() => removeItemHandler(product)}
						className="delete-button"
					>
						<FontAwesomeIcon
							className="delete-icon"
							icon={faTrashAlt}
						></FontAwesomeIcon>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductReview;
