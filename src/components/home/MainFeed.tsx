import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
import Slider from "../common/Slider";
// @ts-ignore
import Sea from "../../img/sea.jpg";
import apiClient from "../../lib/apiClient";

interface MainFeedProps {
	article: {
		id: number;
		thumbnail: string;
		location: string;
		content: string;
		createdAt: string;
		updatedAt: string;
		user_id: number;
	};
}

interface UserDataProps {
	id: number;
	email: string;
	password: string;
	userName: string;
	profileImg: string;
	nickName: string;
	description: string;
	private: boolean;
	backgroundImage: string;
	themaColor: string;
	selectedCategory: null;
	createdAt: string;
	updatedAt: string;
}

const FeedContainer = styled.div`
	width: 828px;
	margin-bottom: 128px;
`;

const FeedImg = styled.img`
	background: #c4c4c4;
	width: 100%;
	height: 828px;
`;

export default function MainFeed(props: MainFeedProps) {
	const [userData, setUserData] = useState<UserDataProps | null>(null);
	const [image, setImage] = useState("");

	const getUserDataById = (userId: number | undefined) => {
		apiClient.get(`/auth/${userId}`).then((response) => {
			if (response.data.user) {
				setUserData(response.data.user);
			}
		});
	};

	const getImgById = (articleId: number | undefined) => {
		apiClient.get(`/image/${articleId}`).then(async (res) => {
			if (res.data.images[0]) {
				setImage(res.data.images[0].url);
				console.log(res.data.images[0]);
			}
			// const fileReader = new FileReader();
			// fileReader.readAsDataURL(res.data.image);
			// fileReader.onload = function (e: any) {
			// 	console.log(e.target.result);
			// 	setImages(e.target.result);
			// };
		});
	};

	useEffect(() => {
		getUserDataById(props.article.user_id);
	}, []);

	getImgById(props.article.id);

	if (userData) {
		return (
			<>
				<FeedContainer>
					<FeedHeader userId={userData?.id} userName={userData?.userName} profileImg={userData?.profileImg} />
					<Slider width="828px" height="828px" imageUrl={image ? "http://api.redesigninsta.kro.kr/" + image : null} />
					<FeedFooter
						userName={userData.userName}
						content={props.article.content}
						createAt={props.article.createdAt}
						articleId={props.article.id}
					/>
				</FeedContainer>
			</>
		);
	} else {
		return null;
	}
}
