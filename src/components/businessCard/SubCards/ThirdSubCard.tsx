import React from "react";
import styled from "styled-components";
import CardBorder from "../CardBorder";
// @ts-ignore
import businessCardImg from "../../../img/businessCardImg.png";
// @ts-ignore
import Kakao from "../../../img/kakao.png";
// @ts-ignore
import Mobile from "../../../img/mobile.png";
// @ts-ignore
import Email from "../../../img/email.png";
// @ts-ignore
import Address from "../../../img/address.png";
import { useNavigate } from "react-router-dom";

interface CardFrontProps {
	color: string;
}


const CardContainer = styled.div`
	position:absolute;
	z-index:1;
	left:270px;
	display: inline-block;
	width: 300px;
	height: 518px;
	padding: 10px;
	margin: 20px;
	box-shadow:10px 0px 20px -10px rgba(0, 0, 0, 0.25);
	background: background: #FFFFFF;
	text-align: center;
	vertical-align: middle;
	cursor:pointer;
`;

const ImageContainer = styled.div`
	position: relative;
	top: 82px;
	left: 70px;
	width: 140px;
	height: 140px;
	border: 5px solid transparent;
	border-radius: 50%;
	background-image: linear-gradient(#fff, #fff), linear-gradient(45deg, #ff0000, #ff006b, #ffa927, #e1ff27);
	background-origin: border-box;
	background-clip: content-box, border-box;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const CenterContainer = styled.div`
	position: relative;
	top: 100px;
`;

const Name = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

const Position = styled.div`
	margin-top: 13px;
	font-size: 12px;
`;

const Line = styled.div`
	background-color: rgb(0, 0, 0, 0.2);
	height: 2px;
	width: 140px;
	margin-top: 5px;
	margin-left: 73px;
`;

const TagsContainer = styled.div``;

const Tag = styled.span`
	font-size: 8px;
	color: rgb(0, 0, 0, 0.4);
`;

const PersonalInfoContainer = styled.div`
	position: relative;
	top: 170px;
	left: 30px;
	display: grid;
	grid-template-columns: 25px 230px;
	grid-row-gap: 5px;
`;

const IconImage = styled.img`
	width: 15px;
	height: 14px;
`;

const PersonalInfo = styled.div`
	display: inline-block;
	font-size: 9px;
	text-align: left;
`;

export default function ThirdSubCard() {
	const name = "_2soh";
	const kakaoID = "2soh56";
	const mobile = "010-4739-3099";
	const email = "2sohing3@naver.com";
	const address = "서울시 송파구 잠실2동 89단지 1호";
	const position = "일러스터 / 대표";
	const tags = ["몽환적인", "여자일러", "메이크업", "외주"];

	const navigate = useNavigate();

	return (
		<>
			<CardContainer onClick={() => navigate("/businesscard/subcard")} className={"third"}>
				<CardBorder>
					<ImageContainer>
						<Image src={businessCardImg} />
					</ImageContainer>
					<CenterContainer>
						<Name>{name}</Name>
						<Position>{position}</Position>
						<Line />
						<TagsContainer>
							{tags.map((item) => (
								<Tag>{" #" + item}</Tag>
							))}
						</TagsContainer>
					</CenterContainer>
					<PersonalInfoContainer>
						<IconImage src={Kakao} />
						<PersonalInfo>{kakaoID}</PersonalInfo>
						<IconImage src={Mobile} />
						<PersonalInfo>{mobile}</PersonalInfo>
						<IconImage src={Email} />
						<PersonalInfo>{email}</PersonalInfo>
						<IconImage src={Address} />
						<PersonalInfo>{address}</PersonalInfo>
					</PersonalInfoContainer>
				</CardBorder>
			</CardContainer>
		</>
	);
}
