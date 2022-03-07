import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/common/Slider";
// @ts-ignore
import exit from "../img/x.svg";
import CommentInput from "../components/common/CommentInput";
import PostingIcons from "../components/common/PostingIcons";
import { FontBold, FontNormal } from "../components/style/Font";
import FeedHeader from "../components/home/FeedHeader";
import Comment from "../components/Posting/Comment";
import apiClient from "../lib/apiClient";
import {remakeDate} from "../hooks/useRegex";

interface PostingDataProps {
	id: number,
	thumbnail: string,
	location: string,
	content: string,
	createdAt: string,
	updatedAt: string,
	user_id: number,
}

interface UserDataProps {
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

const PostingContainer = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
`;

const LeftContainer = styled.div`
	width: 75vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
`;

const Exit = styled.img`
	position: absolute;
	left: 72%;
	top: 21px;
`;

const ImgContainer = styled.div`
	width: 40vw;
	height: 40vw;
	margin: 0 auto;
	margin-top: calc((100vh - 40vw) / 2);
`;

const RightContainer = styled.div`
	width: 25vw;
	height: 100vh;
	background: #fff;
`;

const RightFooter = styled.div`
	padding: 20px;
`;

const LikeDescription = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Date = styled.div`
	font-size: 10px;
	color: #9c9c9c;
	margin-top: 12px;
`;

export default function PostingView() {
	const params = useParams();
	let navigate = useNavigate();

	function onDismiss() {
		navigate(-1);
	}

	const [postingData, setPostingData] = useState<PostingDataProps | null>(null);
	const [userData, setUserData] = useState<UserDataProps | null>(null);

	const getUserDataById = (userId : number | undefined) => {
		apiClient.get(`/auth/${userId}`, ).then(response => {
			if(response.data.user) {
				setUserData(response.data.user);
			};
		});
	}

	const getPostingByPostingId = (postingId : string | undefined) => {
		apiClient.get(`/article/${postingId}`).then(response => {
			setPostingData(response.data);
			getUserDataById(response.data?.user_id);
		});
	};

	useEffect(()=> {
		getPostingByPostingId(params.id);
	},[])

	const postingDate = remakeDate(postingData?.createdAt);

	return (
		<PostingContainer>
			<LeftContainer>
				<Exit src={exit} onClick={onDismiss} />
				<ImgContainer>
					<Slider width="40vw" height="40vw" />
				</ImgContainer>
			</LeftContainer>
			<RightContainer>
				<FeedHeader isFollowingBtn={true} userId={postingData?.user_id} profileImg={userData?.profileImg} userName={userData?.userName} />
				<Comment isMainContent={true} content={postingData?.content} user={userData?.userName} date={postingDate ? postingDate : ''} />
				{/*<Comment />*/}
				{/*<Comment />*/}
				<RightFooter>
					<PostingIcons bookmark={true} />
					<LikeDescription>
						<FontBold>insta_123</FontBold>
						<FontNormal>님 외 여러명이 좋아합니다</FontNormal>
					</LikeDescription>
					<Date>{postingDate ? postingDate : ''}</Date>
				</RightFooter>
				<CommentInput />
			</RightContainer>
		</PostingContainer>
	);
}
