import React, { useEffect } from "react";
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

import axios from "axios";

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

	const testUrl = async () => {
		const res = await apiClient.get("/auth/test");
		return res;
	};

	const res = testUrl();
	console.log(res);

	// todo: apiClient baseURL 적용, accessToken 인증

	const getPostingByPostingId = async (postingId: string | undefined) => {
		// apiClient.defaults.headers.common['Authorization'] = accessToken;
		const res = await apiClient.get(`/article/${postingId}`);
		console.log(res);
		return res;
	};
	const posting = getPostingByPostingId(params.id);

	// const posting = {
	// 	"id": 1,
	// 	"thumbnail": "string",
	// 	"location": "string",
	// 	"content": "test content",
	// 	"createdAt": "20220307",
	// 	"updatedAt": "string",
	// 	"user_id": 1
	// }

	return (
		<PostingContainer>
			<LeftContainer>
				<Exit src={exit} onClick={onDismiss} />
				<ImgContainer>
					<Slider width="40vw" height="40vw" />
				</ImgContainer>
			</LeftContainer>
			<RightContainer>
				<FeedHeader isFollowingBtn={true} />
				{/*<Comment isMainContent={true} content={posting.content} user={"insta_123"} date={posting.createdAt} />*/}
				{/*<Comment />*/}
				{/*<Comment />*/}
				<RightFooter>
					<PostingIcons bookmark={true} />
					<LikeDescription>
						<FontBold>insta_123</FontBold>
						<FontNormal>님 외 여러명이 좋아합니다</FontNormal>
					</LikeDescription>
					<Date>2월22일</Date>
				</RightFooter>
				<CommentInput />
			</RightContainer>
		</PostingContainer>
	);
}
