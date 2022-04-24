import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="form-area">
			<div className="form">
				<h2>Login</h2>
				<form action="">
					<div className="form-group">
						<label htmlFor="email">Eamil Address</label>
						<input type="email" placeholder="Email Address" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="Password" />
					</div>
					<input className="user-btn" type="submit" value="Login" />
					<span>
						Not a member? <Link to="/register">Register</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
