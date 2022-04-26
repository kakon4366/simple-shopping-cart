import React, { useEffect, useState } from "react";
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
	const [pageCount, setPageCount] = useState();
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	//get page count
	useEffect(() => {
		fetch("http://localhost:5000/productCount")
			.then((res) => res.json())
			.then((data) => {
				const count = data.count;
				const pages = Math.ceil(count / 10);
				setPageCount(pages);
			});
	}, []);

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
				<div className="pagination">
					{[...Array(pageCount).keys()].map((number) => (
						<button
							className={page === number ? "selected" : ""}
							onClick={() => setPage(number)}
							key={number}
						>
							{number}
						</button>
					))}
					<select name="" id="">
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
					</select>
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
