import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import NotFound404 from "./Components/NotFound404/NotFound404";
import Order from "./Components/Order/Order";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="shop" element={<Shop></Shop>}></Route>
				<Route path="order" element={<Order></Order>}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound404></NotFound404>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
