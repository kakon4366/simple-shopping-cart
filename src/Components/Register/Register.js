import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocalLogin/SocialLogin";

const Register = () => {
	return (
		<div className="form-area">
			<div className="form">
				<h2>Register</h2>
				<form action="">
					<div className="form-group">
						<label htmlFor="name">Full Name</label>
						<input type="name" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Eamil Address</label>
						<input type="email" placeholder="Email Address" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="Password" />
					</div>
					<div className="form-group">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							type="confirm-password"
							placeholder="Confirm Password"
						/>
					</div>
					<input className="user-btn" type="submit" value="Login" />
					<span className="toggle-form">
						Not a member? <Link to="/register">Register</Link>
					</span>
				</form>
				<SocialLogin></SocialLogin>
			</div>
		</div>
	);
};

export default Register;
