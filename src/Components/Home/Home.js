import React from "react";
import "./Home.css";
import homePhoto from "../../images/home-photo.PNG";

const Home = () => {
	return (
		<div className="home-area">
			<div className="home-content">
				<h6>Sale up to 70% off</h6>
				<h1>New Collection For Fall</h1>
				<p>Discover all the new arrivals of ready-to-wear collection.</p>
				<button>Shop Now</button>
			</div>
			<div className="home-image">
				<img width="450px" src={homePhoto} alt="" />
			</div>
		</div>
	);
};

export default Home;
