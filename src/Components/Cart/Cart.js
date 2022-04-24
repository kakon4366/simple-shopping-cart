import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
	// console.log(cart);

	let totalPrice = 0;
	let totalShipping = 0;
	let quantity = 0;

	for (const product of cart) {
		// console.log(product);
		quantity = quantity + product.quantity;
		totalPrice += product.price * product.quantity;
		totalShipping += product.shipping;
	}

	const tax = (totalPrice * 10) / 100;
	const grandTotal = totalPrice + totalShipping + tax;

	return (
		<div className="cart">
			<h2>Order Summary</h2>
			<div className="cart-price">
				<p>Selected Items: {quantity}</p>
				<p>Total Price: $ {totalPrice}</p>
				<p>Total Shipping Charge: $ {totalShipping}</p>
				<p>Tax: {tax.toFixed(2)}</p>
				<hr />
				<h4>Grand Total: {grandTotal.toFixed(2)}</h4>
				{children}
			</div>
		</div>
	);
};

export default Cart;
