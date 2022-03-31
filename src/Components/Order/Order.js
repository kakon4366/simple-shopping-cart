import React from "react";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeFromDB } from "../../utilities/myFakeDB";
import Cart from "../Cart/Cart";
import ProductReview from "../ProductReview/ProductReview";

const Order = () => {
	const [products, setProducts] = useProduct([]);
	const [cart, setCart] = useCart(products);

	const removeItemHandler = (product) => {
		const restProduct = cart.filter((pd) => pd.id !== product.id);
		// setCart(restProduct);
		setCart(restProduct);
		removeFromDB(product.id);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{cart.map((product) => (
					<ProductReview
						key={product.id}
						product={product}
						removeItemHandler={removeItemHandler}
					></ProductReview>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Order;
