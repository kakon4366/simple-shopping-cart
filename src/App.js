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
import OrderReview from "./Components/OrderReview/OrderReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/shop" element={<Shop></Shop>}></Route>
				<Route
					path="/order"
					element={
						<RequireAuth>
							<Order></Order>
						</RequireAuth>
					}
				></Route>
				<Route
					path="/order-review"
					element={
						<RequireAuth>
							<OrderReview />
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound404></NotFound404>}></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
