import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeFromDB } from "../../utilities/myFakeDB";
import Cart from "../Cart/Cart";
import ProductReview from "../ProductReview/ProductReview";

const OrderReview = () => {
	const [products] = useProduct([]);
	const [cart, setCart] = useCart(products);

	const navigate = useNavigate();

	const removeItemHandler = (product) => {
		const restProduct = cart.filter((pd) => pd._id !== product._id);
		// setCart(restProduct);
		setCart(restProduct);
		removeFromDB(product._id);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{cart.map((product) => (
					<ProductReview
						key={product._id}
						product={product}
						removeItemHandler={removeItemHandler}
					></ProductReview>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<button onClick={() => navigate("/order")} className="order-btn">
						Proceed Checkout
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;
