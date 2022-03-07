import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainFeed from "../components/home/MainFeed";
import Storys from "../components/home/Storys";
import Card from "../components/home/Card";
import Recommend from "../components/home/Recommend";
import { ThemeContext } from "../contexts/ThemeContext";
import apiClient from "../lib/apiClient";
import { useCookies } from "react-cookie";

const HomeContainer = styled.div`
	margin-left: 500px;
	margin-top: 122px;
	max-width: 828px;
	height: 1019px;
`;
export default function HomeView() {
	const [cookies, setCookie] = useCookies(["user"]);

	useEffect(() => {
		console.log(cookies.user);
		apiClient.get("/article/users/1").then((res) => console.log(res));
	}, []);

	return (
		<>
			<Header></Header>
			<Card />
			<Recommend />
			<HomeContainer>
				<Storys />
				<MainFeed></MainFeed>
			</HomeContainer>
		</>
	);
}
