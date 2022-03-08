import styled from "styled-components";
import React, { useEffect, useState } from "react";
// @ts-ignore
import testImg from "../../img/sea.jpg";
import apiClient from "../../lib/apiClient";

const FeedMainContainer = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
`;

const ImgContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	overflow: hidden;
`;

const FeedImg = styled.img`
	position: absolute;
`;
var img = "";
export default function FeedMain() {

	const [myInfo, setMyinfo] = useState({
		id:1,
		nickName:"kimkim",
		userName:"김찬호",
		descrtipion:"설명설명",

	});

	const [articles, setArticles] = useState<any[]>([]);
	
	const getThumbnail = async (id: number)=>{
		var location = "aa";
		console.log(id)
		await apiClient.get("/image/7").then(image=>{
			return image.data.images[0].url;
		})
		
		
	}

	useEffect(()=>{

		apiClient.get("/auth/get/me").then((user) => {

			setMyinfo(user.data.user);

			apiClient.get("/article/users/" + user.data.user.id).then((articles) => {

				setArticles(articles.data.articles);
				
			});
		})
	}, [])

	return (
		<>
			<FeedMainContainer>
				{articles.map((article) => (
					<ImgContainer>
						<FeedImg src={"http://api.redesigninsta.kro.kr/" + getThumbnail(article.id).then(url => url)} />
					</ImgContainer>
				))}
			</FeedMainContainer>
		</>
	);
}
