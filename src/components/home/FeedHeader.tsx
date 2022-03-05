import styled from "styled-components";
import React from "react";
import { Font1_Light,FontBlue_Bold, FontBold } from "../style/Font";
// @ts-ignore
import more from "../../img/more.png";
// @ts-ignore
import Border from "../../img/profileBorder.png";
// @ts-ignore
import dot from "../../img/dot.svg";
import ImgProfile from "../common/ImgProfile";
import { useNavigate } from "react-router-dom";

interface FeedHeaderProps {
	isFollowingBtn?: boolean;
};

const HeaderContainer = styled.div`
	height: 60px;
	display: flex;
	border: 1px solid #e0e0e0;
	border-radius: 3px 3px 0px 0px;
	padding: 0 20px;
	align-items: center;
`;

const ProfileRight = styled.div`
	margin-left: 11px;
	cursor:pointer;
`;
const More = styled.img`
	margin-left: auto;
`;

const Dot = styled.img`
	margin: 0 8px;
`;


export default function FeedHeader(props : FeedHeaderProps) {

	const FollowingBtn = styled.div`
	display:${props.isFollowingBtn ? 'flex' : 'none'};
	`;

	/* 
		need axios code (for get user's id)
	*/

	const navigate = useNavigate();
	return (
		<>
			<HeaderContainer>
				<ImgProfile width={40} height={40} margin={4} url={"/feed/1"}/>
				<ProfileRight>
					<FontBold onClick={()=>{navigate("/feed/1")}}>Insta_123</FontBold>
					{/*<Font1_Light>place</Font1_Light>*/}
				</ProfileRight>
				<FollowingBtn>
					<Dot src={dot}/>
					<FontBlue_Bold>팔로우</FontBlue_Bold>
				</FollowingBtn>
				<More src={more} />
			</HeaderContainer>
		</>
	);
}
