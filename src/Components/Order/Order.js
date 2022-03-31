import React from "react";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import Cart from "../Cart/Cart";
import ProductReview from "../ProductReview/ProductReview";

const Order = () => {
	const [products, setProducts] = useProduct([]);
	const [cart, setCart] = useCart(products);
	console.log(cart);
	return (
		<div className="shop-container">
			<div className="products-container">
				{cart.map((product) => (
					<ProductReview product={product}></ProductReview>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Order;
