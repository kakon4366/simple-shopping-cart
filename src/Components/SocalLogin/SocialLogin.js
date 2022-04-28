import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (user) {
		navigate(from, { replace: true });
	}

	return (
		<div className="social-btn-area">
			<p>
				<span>or</span>
			</p>
			<button onClick={() => signInWithGoogle()} className="social-btn">
				<img width="30px" src={google} alt="" />
				<span>Login With Google</span>
			</button>
		</div>
	);
};

export default SocialLogin;
