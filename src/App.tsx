import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import CategoryView from "./pages/setting/CategoryView";
import ProfileFeedView from "./pages/ProfileFeedView";
import EditFeedView from "./pages/setting/EditFeedView";
import EditProfileView from "./pages/setting/EditProfileView";
import CardSettingView from "./pages/businessCard/CardSettingVeiw";
import LoginPage from "./pages/auth/LoginPage";
import GlobalStyles from "./global";
import RegisterPage from "./pages/auth/RegisterPage";

export default function App() {
	return (
		// <div>
		// 	<Input defaultValue="@probablyup" type="text" />
		// 	<Button primary>Button</Button>
		// 	<SettingsWrapper></SettingsWrapper>
		// </div>
		<>
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
					<Route path="/businesscard/setting" element={<CardSettingView />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
