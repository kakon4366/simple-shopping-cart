import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocalLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Register = () => {
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const navigate = useNavigate();

	const handleRegiste = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		console.log(name, email, password, confirmPassword);

		if (password === confirmPassword) {
			await createUserWithEmailAndPassword(email, password);
			toast.success("Register Success!");
			navigate("/login");
		}
	};
	return (
		<div className="form-area">
			<div className="form">
				<h2>Register</h2>
				<form onSubmit={handleRegiste} action="">
					<div className="form-group">
						<label htmlFor="name">Full Name</label>
						<input type="name" name="name" placeholder="Full Name" />
					</div>
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
					<div className="form-group">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							type="confirm-password"
							name="confirmPassword"
							placeholder="Confirm Password"
						/>
					</div>
					<span className="error-message">
						{error ? error.message : ""}
					</span>
					<input
						className="user-btn"
						type="submit"
						value={loading ? "Loadding..." : "Register"}
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

export default Register;
