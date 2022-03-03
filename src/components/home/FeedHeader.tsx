import styled from "styled-components";
import React from "react";
import { Font1_Light, FontBold } from "../style/Font";
// @ts-ignore
import more from "../../img/more.png";
// @ts-ignore
import Border from "../../img/profileBorder.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
	height: 71px;
	display: flex;
	border: 1px solid #e0e0e0;
	border-radius: 3px 3px 0px 0px;
	align-items: center;
`;

const FeedProfile = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	margin: 0 0 0 16px;
	cursor:pointer;
`;

const ProfileRight = styled.div`
	margin-left: 11px;
	cursor:pointer;
`;
const More = styled.img`
	margin-left: auto;
	margin-right: 23px;
`;



export default function FeedHeader() {

	/* 
		need axios code (for get user's id)
	*/
	const navigate = useNavigate();
	return (
		<>
			<HeaderContainer>
				<FeedProfile src={Border} onClick={()=>{navigate("/feed/1")}}/>
				<ProfileRight>
					<FontBold onClick={()=>{navigate("/feed/1")}}>Insta_123</FontBold>
					<Font1_Light>place</Font1_Light>
				</ProfileRight>
				<More src={more} />
			</HeaderContainer>
		</>
	);
}
