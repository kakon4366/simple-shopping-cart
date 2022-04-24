import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="logo" />
			<nav className="nav-bar">
				<Link to="/home">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/order">Order</Link>
				<Link to="/order-review">Order Review</Link>
				<Link to="/manage-inventory">Manage Inventory</Link>
				<Link to="/login">Login</Link>
				<Link className="register-button" to="/register">
					Register
				</Link>
			</nav>
		</header>
	);
};

export default Header;
