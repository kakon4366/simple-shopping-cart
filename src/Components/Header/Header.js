import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="logo" />
			<nav className="nav-bar">
				<a href="/shop">Shop</a>
				<a href="/order">Order</a>
				<a href="/order-review">Order Review</a>
				<a href="manage-inventory">Manage Inventory</a>
			</nav>
		</header>
	);
};

export default Header;
