import React from "react";
import google from "../../images/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
	return (
		<div className="social-btn-area">
			<p>
				<span>or</span>
			</p>
			<button className="social-btn">
				<img width="30px" src={google} alt="" />
				<span>Login With Google</span>
			</button>
		</div>
	);
};

export default SocialLogin;
