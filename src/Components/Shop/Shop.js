import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { addToDB } from "../../utilities/myFakeDB";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products] = useProduct([]);
	const [cart, setCart] = useCart(products);

	const navigate = useNavigate();

	//add to cart handler func
	const addToCartHandler = (selectedProduct) => {
		console.log(selectedProduct);
		let newCart = [];
		const exists = cart.find(
			(product) => product._id === selectedProduct._id
		);
		console.log("Exists success", exists);
		if (!exists) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			const restProduct = cart.filter(
				(product) => product._id !== selectedProduct._id
			);
			exists.quantity += 1;
			newCart = [...restProduct, exists];
		}

		setCart(newCart);
		//add to db
		addToDB(selectedProduct._id);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				<h4>Total Products: {products.length}</h4>
				<div className="products">
					{products.map((product) => (
						<Product
							addToCartHandler={addToCartHandler}
							product={product}
							key={product._id}
						></Product>
					))}
				</div>
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<button
						className="order-btn"
						onClick={() => navigate("/order-review")}
					>
						Order Review
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
