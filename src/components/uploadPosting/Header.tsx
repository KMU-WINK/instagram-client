import styled from "styled-components";
import React from "react";
import { Font1_Light, FontBlue_Bold, FontBold } from "../style/Font";
// @ts-ignore
import more from "../../img/more.png";
// @ts-ignore
import Border from "../../img/profileBorder.png";
// @ts-ignore
import dot from "../../img/dot.svg";
// @ts-ignore
import leftArrow from "../../img/leftArrow.svg";
import ImgProfile from "../common/ImgProfile";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
	upload: any
}
const HeaderContainer = styled.div`
	height: 60px;
	display: flex;
	border: 1px solid #e0e0e0;
	border-radius: 3px 3px 0px 0px;
	padding: 0 30px;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	font-size: 21px;
	color: #000;
	font-weight: bold;
`;

const Upload = styled.div`
	font-size: 16px;
	color: #3796F0;
	font-weight: 500;
`;

const LeftArrow = styled.img`
	margin-right: 30px;
`;

export default function Header(props : HeaderProps) {
	return (
		<>
			<HeaderContainer>
				<LeftArrow src={leftArrow}/>
				<Title>새 게시물 만들기</Title>
				<Upload onClick={props.upload}>공유하기</Upload>
			</HeaderContainer>
		</>
	);
}
