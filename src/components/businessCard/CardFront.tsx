import React from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import CardBorder from "./CardBorder";
// @ts-ignore
import businessCardImg from "../../img/businessCardImg.png";
// @ts-ignore
import kakao from "../../img/kakao.png";

interface CardFrontProps {
	color: string;
}

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
	top: 200px;
`;

const IconImage = styled.img`
	width: 15px;
	height: 14px;
`;

const PersonalInfo = styled.div`
	display: inline-block;
	font-size: 9px;
`;

export default function CardFront(props: CardFrontProps) {
	const name = "_2soh";
	const kakaoID = "2soh56";
	const position = "일러스터 / 대표";
	const tags = ["몽환적인", "여자일러", "메이크업", "외주"];

	return (
		<>
			<CardContainer color={props.color}>
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
						<IconImage src={kakao} />
						<PersonalInfo>{kakaoID}</PersonalInfo>
					</PersonalInfoContainer>
				</CardBorder>
			</CardContainer>
		</>
	);
}
