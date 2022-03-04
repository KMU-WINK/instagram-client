import styled from "styled-components";
import React, { useState } from "react";
import { FontBold, FontNormal } from "../style/Font";
// @ts-ignore
import profile from "../../img/profile.svg";
// @ts-ignore
import Heart_on from "../../img/Heart_on.png";
// @ts-ignore
import Heart_off from "../../img/Heart_off.svg";

const Container = styled.div`
	display:flex;
	padding:20px;
`;

const Profile = styled.img`
	height:32px;
	margin-right: 20px;
`;

const MiddleContainer = styled.div`

`;

const CommentContainer = styled.div`
	display:flex;
	gap: 5px;
`;

const SubDiscriptionContainer = styled.div`
	display:flex;
	gap: 20px;
	margin-top:16px;
`;

const SubDiscription = styled.div`
	font-size: 12px;
	color: #8F8F8F;
`;

const Heart = styled.img`
	height:14px;
	margin-left: auto;
`;

export default function Comment() {
	const [heart, setHeart] = useState(false);

	const heartClick = () => {
		if (heart) setHeart(false);
		else setHeart(true);
	};

	return <>
		<Container>
			<Profile src={profile}/>
			<MiddleContainer>
				<CommentContainer>
					<FontBold>insta_123</FontBold>
					<FontNormal>오오 괜찮은데?</FontNormal>
				</CommentContainer>
				<SubDiscriptionContainer>
					<SubDiscription>1주</SubDiscription>
					<SubDiscription>좋아요{1}개</SubDiscription>
					<SubDiscription>답글달기</SubDiscription>
				</SubDiscriptionContainer>
				<SubDiscriptionContainer>
					<SubDiscription>---</SubDiscription>
					<SubDiscription>답글보기({1}개)</SubDiscription>
				</SubDiscriptionContainer>
			</MiddleContainer>
			<Heart src={heart ? Heart_on : Heart_off} onClick={heartClick}/>
		</Container>
	</>
};