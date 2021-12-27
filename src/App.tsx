import React from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import SettingsWrapper from "./components/Settings/SettingsWrapper";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SettingsModal from "./components/Settings/SettingsModal";

export default function App() {
	return (
		// <div>
		// 	<Input defaultValue="@probablyup" type="text" />
		// 	<Button primary>Button</Button>
		// 	<SettingsWrapper></SettingsWrapper>
		// </div>
		<BrowserRouter>
			<nav>
				<Link to="/">Main</Link>
				<Link to="/settings">Setting</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/settings" element={<SettingsModal />} />
			</Routes>
		</BrowserRouter>
	);
}
