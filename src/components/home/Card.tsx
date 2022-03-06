import styled from "styled-components";
import React from "react";
// @ts-ignore
import Border from "../../img/profileBorder.png";
import CardButton from "./CardButton";
import { FontBlue, Font2_Light, Font1_Light, FontNormal } from "../style/Font";
import {useNavigate} from "react-router-dom";
import ImgProfile from "../common/ImgProfile";

const CardContainer = styled.div`
	position: fixed;
	width: 320px;
	top: 120px;
	left: 6.25vw;
	border: 1px solid #dcdbdb;
	border-radius: 8px;
	padding: 20px;
`;

const CardTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 21px;
`;

const CardProfile = styled.img`
	width: 100px;
	height: 100px;
	cursor:pointer;
`;

const CardInfo = styled.div``;

const CardId = styled(FontNormal)`
	margin-bottom: 8px;
	font-size: 24px;
	cursor:pointer;
`;

const CardFont = styled.div`
	font-size: 14px;
	color: ${(props) => props.color || "black"};
`;

const CardCenter = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CardCount = styled.div`
	display: flex;
	width: 76px;
	justify-content: space-between;
`;

export default function Card() {
	
	/*
		need axios code (get my id)
	*/
	
	const navigate = useNavigate();

	return (
		<>
			<CardContainer>
				<CardTop>
					<ImgProfile width={100} height={100} margin={8} url={"/feed/1"}/>
					<CardInfo>
						<CardId onClick={()=>{navigate("/feed/1")}}>insta_123</CardId>
						<FontNormal>김선호</FontNormal>
						<Font2_Light>예술가</Font2_Light>
					</CardInfo>
					<FontBlue>전환</FontBlue>
				</CardTop>
				<CardCenter>
					<CardCount>
						<Font2_Light>게시물</Font2_Light>
						<Font1_Light>0,000</Font1_Light>
					</CardCount>
					<CardCount>
						<Font2_Light>팔로워</Font2_Light>
						<Font1_Light>0,000</Font1_Light>
					</CardCount>
					<CardCount>
						<Font2_Light>팔로우</Font2_Light>
						<Font1_Light>0,000</Font1_Light>
					</CardCount>
				</CardCenter>
				<CardButton></CardButton>
			</CardContainer>
		</>
	);
}
