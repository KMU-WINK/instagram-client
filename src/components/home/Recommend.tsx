import styled from "styled-components";
import React from 'react';
import { Font2_Light, FontBold} from "../style/Font";
import RecommendProfile from "./RecommendProfile";

const RecommendContainer = styled.div`
	width:320px;
	padding:20px;
	position: fixed;
	left:6.25vw;
	top:420px;
  border: 1px solid #DCDBDB;
  border-radius: 8px;
	margin-top:20px;
`;

const RecommendHeader = styled.div`
	display:flex;
	justify-content: space-between;
`;
export default function Recommend() {
	return <>
		<RecommendContainer>
			<RecommendHeader>
				<Font2_Light>회원님을 위한 추천</Font2_Light>
				<FontBold>모두 보기</FontBold>
			</RecommendHeader>
			<RecommendProfile id="insta_111"/>
			<RecommendProfile id="insta_222"/>
			<RecommendProfile id="insta_333"/>
			<RecommendProfile id="insta_444"/>
			<RecommendProfile id="insta_555"/>
		</RecommendContainer>
	</>
}