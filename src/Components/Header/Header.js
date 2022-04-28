import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
	const [user] = useAuthState(auth);
	return (
		<header className="header">
			<img src={logo} alt="logo" />
			<nav className="nav-bar">
				<Link to="/home">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/order-review">Order Review</Link>
				<Link to="/order">Order</Link>
				<Link to="/manage-inventory">Manage Inventory</Link>
				{user ? (
					<button className="singout-btn" onClick={() => signOut(auth)}>
						Logout
					</button>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link className="register-button" to="/register">
							Register
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
