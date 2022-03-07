import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

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
import CardEditView from "./pages/businessCard/CardEditView";
import CardSelectView from "./pages/businessCard/CardSelectView";

import CardView from "./pages/businessCard/CardView";
import CardWalletView from "./pages/businessCard/CardWalletView";
import SubCardView from "./pages/businessCard/SubCardView";

import CategoryEditPopupView from "./pages/setting/CategoryEditPopupView";
import HighlightView from "./pages/HighlightView";
import CategoryAddPopupView from "./pages/setting/CategoryAddPopupView";
import PostingView from "./pages/PostingView";
import useLocalStorage from "./hooks/useLocalStorage";
import apiClient from "./lib/apiClient";
import { CookiesProvider } from "react-cookie";
import StoryView from "./pages/StoryView";

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

	let location = useLocation();

	let state = location.state as { backgroundLocation?: Location };

	// @ts-ignore
	return (
		<CookiesProvider>
			<ThemeContext.Provider value={{ theme, setTheme: setThemeHandler }}>
				<GlobalStyles />
				{/* Show the modal when a `backgroundLocation` is set */}
				{state?.backgroundLocation && (
					<Routes>
						<Route path="/article/:id/" element={<PostingView />} />
					</Routes>
				)}

				<Routes location={state?.backgroundLocation || location}>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<HomeView />} />
					<Route path="/setting/category" element={<CategoryView />} />
					<Route path="/feed/:id" element={<ProfileFeedView />} />
					<Route path="/setting/category/editfeed" element={<EditFeedView />} />
					<Route path="/setting/category/editcategory" element={<CategoryEditPopupView />} />
					<Route path="/setting/category/addcategory" element={<CategoryAddPopupView />} />
					<Route path="/setting/category/editprofile" element={<EditProfileView />} />
					<Route path="/setting/category/editprofile/color" element={<EditProfileColorPage />} />
					<Route path="/businesscard/setting" element={<CardSettingView />} />
					<Route path="/businesscard/setting/edit" element={<CardEditView />} />
					<Route path="/businesscard/setting/upload" element={<CardSelectView />} />
					<Route path="/highlight" element={<HighlightView />} />
					<Route path="/story" element={<StoryView />} />
					<Route path="/businesscard/view" element={<CardView />} />
					<Route path="/businesscard/wallet" element={<CardWalletView />} />
					<Route path="/businesscard/subCard" element={<SubCardView />} />
				</Routes>
			</ThemeContext.Provider>
		</CookiesProvider>
	);
}
