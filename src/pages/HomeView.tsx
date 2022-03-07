import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainFeed from "../components/home/MainFeed";
import Storys from "../components/home/Storys";
import Card from "../components/home/Card";
import Recommend from "../components/home/Recommend";
import { ThemeContext } from "../contexts/ThemeContext";
import apiClient from "../lib/apiClient";
import { useCookies } from "react-cookie";

interface MyDataProps {
	id: number,
	email: string,
	password: string,
	userName: string,
	profileImg: string,
	nickName: string,
	description: string,
	private: boolean,
	backgroundImage: string,
	themaColor: string,
	selectedCategory: null,
	createdAt: string,
	updatedAt: string
};

const HomeContainer = styled.div`
	margin-left: 500px;
	margin-top: 122px;
	max-width: 828px;
	height: 1019px;
`;
export default function HomeView() {
	const [cookies, setCookie] = useCookies(["user"]);
	const [articlesAll, setArticlesAll] = useState([]);
	const [myData, setMyData] = useState<MyDataProps | null>(null);

	// useEffect(() => {
	// 	apiClient.get("/article/users/1").then((res) => console.log(res));
	// }, []);


	useEffect(()=> {
		apiClient.get("/article").then((res)=> setArticlesAll(res.data.articles));
		apiClient.get("/auth/get/me").then((res)=> setMyData(res.data.user));
	},[])

	return (
		<>
			<Header profileImg={myData?.profileImg} userId={myData?.id}></Header>
			<Card userName={myData?.userName} userId={myData?.id} profileImg={myData?.profileImg} description={myData?.description} nickName={myData?.nickName}/>
			<Recommend />
			<HomeContainer>
				<Storys />
				{articlesAll.map(article => <MainFeed article={article}></MainFeed>)}
			</HomeContainer>
		</>
	);
}
