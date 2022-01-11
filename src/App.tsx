import React from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import { BrowserRouter, Route, Routes
	,Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import MainView from "./views/MainView";
import CategoryView from "./views/setting/CategoryView";
import GlobalStyles from "./global";

export default function App() {
	return <>
		<BrowserRouter>
			<nav>
				<Link to="/">Main</Link>
				<Link to="/home">Home</Link>
				<Link to="/setting/category">Category</Link>
			</nav>
			<Routes>
				<Route path="/" element={<MainView/>} />
				<Route path="/home" element={<HomeView/>} />
				<Route path="/setting/category" element={<CategoryView/>} />
			</Routes>
		</BrowserRouter>
		<GlobalStyles />
		</>
		// <div>
		// 	<Input defaultValue="@probablyup" type="text" />
		// 	<Button primary>Button</Button>
		// </div>
	;
}
