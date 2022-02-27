import styled from "styled-components";
import React from "react";
// @ts-ignore
import Post from "../../img/post.svg";
// @ts-ignore
import Video from "../../img/video.svg";
// @ts-ignore
import Tag from "../../img/tag.svg";
import { Font2_16px_Bold, FontBold_16px } from "../style/Font";

const RightNavContainer = styled.div`
	display: flex;
	margin-top: 24px;
	justify-content: space-around;
	margin-bottom: 64px;
`;
const Border = styled.div`
	height: 0px;
	border: 2px solid #bcbcbc;
`;

const TitleContainer = styled.div``;

const Title = styled.div`
	display: flex;
	width: 100px;
	justify-content: center;
`;

const Bar = styled.div`
	position: relative;
	border: 2px solid #000000;
	height: 0px;
	width: inherit;
	top: -28px;
`;

const RightFeedImg = styled.img`
	height: 18px;
	margin-right: 8px;
`;

export default function RightNav() {
	return (
		<>
			<Border />
			<RightNavContainer>
				<TitleContainer>
					<Bar></Bar>
					<Title>
						<RightFeedImg src={Post} />
						<FontBold_16px>게시물</FontBold_16px>
					</Title>
				</TitleContainer>
				<TitleContainer>
					{/*<Bar></Bar>*/}
					<Title>
						<RightFeedImg src={Video} />
						<Font2_16px_Bold>동영상</Font2_16px_Bold>
					</Title>
				</TitleContainer>
				<TitleContainer>
					{/*<Bar></Bar>*/}
					<Title>
						<RightFeedImg src={Tag} />
						<Font2_16px_Bold>태그됨</Font2_16px_Bold>
					</Title>
				</TitleContainer>
				<TitleContainer>
					{/*<Bar></Bar>*/}
					<Title>
						<RightFeedImg src={Tag} />
						<Font2_16px_Bold>저장됨</Font2_16px_Bold>
					</Title>
				</TitleContainer>
			</RightNavContainer>
		</>
	);
}
