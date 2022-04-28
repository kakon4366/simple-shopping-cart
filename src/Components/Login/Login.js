import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocalLogin/SocialLogin";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();

	if (user) {
		navigate("/home");
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		await signInWithEmailAndPassword(email, password);
		toast.success("Login Success!");
	};

	return (
		<div className="form-area">
			<div className="form">
				<h2>Login</h2>
				<form onSubmit={handleLogin} action="">
					<div className="form-group">
						<label htmlFor="email">Eamil Address</label>
						<input
							type="email"
							name="email"
							placeholder="Email Address"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
					<span className="error-message">
						{error ? error.message : ""}
					</span>
					<input
						className="user-btn"
						type="submit"
						value={loading ? "Loadding..." : "Login"}
					/>
					<span className="toggle-form">
						Not a member? <Link to="/register">Register</Link>
					</span>
				</form>
				<SocialLogin></SocialLogin>
			</div>
		</div>
	);
};

export default Login;
