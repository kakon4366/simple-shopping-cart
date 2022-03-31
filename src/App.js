import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="shop" element={<Shop></Shop>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
