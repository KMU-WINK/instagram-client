import React from "react";
import styled from "styled-components";
import Slider from "../components/common/Slider";
// @ts-ignore
import exit from "../img/x.svg";
import CommentInput from "../components/common/CommentInput";
import PostingIcons from "../components/common/PostingIcons";
import { FontBold, FontNormal } from "../components/style/Font";
import FeedHeader from "../components/home/FeedHeader";
import Comment from "../components/Posting/Comment";

const PostingContainer = styled.div`
	display: flex;
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
	return (
		<PostingContainer>
			<LeftContainer>
				<Exit src={exit} />
				<ImgContainer>
					<Slider width="40vw" height="40vw" />
				</ImgContainer>
			</LeftContainer>
			<RightContainer>
				<FeedHeader isFollowingBtn={true} />
				<Comment />
				<Comment />
				<Comment />
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
