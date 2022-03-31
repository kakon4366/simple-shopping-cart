import React from "react";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { addToDB } from "../../utilities/myFakeDB";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useProduct([]);
	const [cart, setCart] = useCart(products);

	//add to cart handler func
	const addToCartHandler = (selectedProduct) => {
		console.log(selectedProduct);
		let newCart = [];
		const exists = cart.find((product) => product.id === selectedProduct.id);
		console.log("Exists success", exists);
		if (!exists) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			const restProduct = cart.filter(
				(product) => product.id !== selectedProduct.id
			);
			exists.quantity += 1;
			newCart = [...restProduct, exists];
		}

		setCart(newCart);
		//add to db
		addToDB(selectedProduct.id);
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
							key={product.id}
						></Product>
					))}
				</div>
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
