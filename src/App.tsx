import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import CategoryView from "./pages/setting/CategoryView";
import ProfileFeedView from "./pages/ProfileFeedView";
import EditFeedView from "./pages/setting/EditFeedView";
import EditProfileView from "./pages/setting/EditProfileView";
import CardSettingView from "./pages/businessCard/CardSettingVeiw";
import ImageSettingView from "./pages/businessCard/CardEditView";
import LoginPage from "./pages/auth/LoginPage";
import GlobalStyles from "./global";
import RegisterPage from "./pages/auth/RegisterPage";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import EditProfileColorPage from "./pages/setting/EditProfileColorPage";
import HighlightView from "./pages/HighlightView";
import CardEditView from "./pages/businessCard/CardEditView";
import CardSelectView from "./pages/businessCard/CardSelectView";

type Mode = "light" | "dark";

type BgColor = "Original" | "Red" | "Orange" | "Yellow" | "Green" | "Blue" | "Purple";

type PointColor =
	| "Original"
	| "Pink"
	| "Red"
	| "Orange"
	| "Yellow"
	| "Green"
	| "Aqua Green"
	| "Mint"
	| "Blue"
	| "Navy"
	| "Rose"
	| "Purple"
	| "Light Purple";

export default function App() {
	const [theme, setTheme] = useState(themes["light-Original-Original"]);

	const setThemeHandler = (name: `${Mode}-${BgColor}-${PointColor}`) => setTheme(themes[name]);

	console.log(theme);
	return (
		// <div>
		// 	<Input defaultValue="@probablyup" type="text" />
		// 	<Button primary>Button</Button>
		// 	<SettingsWrapper></SettingsWrapper>
		// </div>

		<ThemeContext.Provider value={{ theme, setTheme: setThemeHandler }}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<HomeView />} />
					<Route path="/setting/category" element={<CategoryView />} />
					<Route path="/feed/:id" element={<ProfileFeedView />} />
					<Route path="/setting/category/editfeed" element={<EditFeedView />} />
					<Route path="/setting/category/editprofile" element={<EditProfileView />} />
					<Route path="/setting/category/editprofile/color" element={<EditProfileColorPage />} />
					<Route path="/businesscard/setting" element={<CardSettingView />} />
					<Route path="/businesscard/setting/image" element={<CardEditView />} />
					<Route path="/businesscard/setting/upload" element={<CardSelectView />} />
					<Route path="/highlight" element={<HighlightView />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}
