import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";
import BlueButton from "../../common/BlueButton";
// @ts-ignore
import None from "../../../img/None.png";

const InnerContainer = styled.div`
	width: 100%;
`;

const PreviewBtn = styled.button`
	margin-left: 645px;
	color: #0095f6;
	font-size: 16px;
	line-height: 28px;
	background-color: #ffffff;
	border: none;
`;

const PaletteBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 500px;
	margin-top: 35px;
	margin-bottom: 50px;
`;

const Default = styled.img`
	width: 48px;
	height: 48px;
	margin-right: 22px;
	margin-bottom: 10px;
`;

const Palette = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-right: 22px;
	margin-bottom: 10px;
`;

export default function ColorBox() {
	return (
		<>
			<Container style={{ borderBottom: "#C4C4C4 1px solid" }} topMargin={30} height={490}>
				<InnerContainer>
					<Title content="배경" />
					<PreviewBtn>미리보기</PreviewBtn>
					<PaletteBox>
						<Default src={None} />
						<Palette style={{ backgroundColor: "#FF9090" }} />
						<Palette style={{ backgroundColor: "#FFAD7C" }} />
						<Palette style={{ backgroundColor: "#FFF89A" }} />
						<Palette style={{ backgroundColor: "#8DFFB8" }} />
						<Palette style={{ backgroundColor: "#A3F1FF" }} />
						<Palette style={{ backgroundColor: "#DF81FF" }} />
					</PaletteBox>
				</InnerContainer>
				<InnerContainer>
					<Title content="심볼 색상" />
					<PaletteBox style={{ marginTop: "60px" }}>
						<Default src={None} />
						<Palette style={{ backgroundColor: "#FF34EB" }} />
						<Palette style={{ backgroundColor: "#E91E2A" }} />
						<Palette style={{ backgroundColor: "#FF6A2A" }} />
						<Palette style={{ backgroundColor: "#EFAF0B" }} />
						<Palette style={{ backgroundColor: "#317A0E" }} />
						<Palette style={{ backgroundColor: "#0CA6A6" }} />
						<Palette style={{ backgroundColor: "#00D3E0", marginLeft: "32px" }} />
						<Palette style={{ backgroundColor: "#1C00CB" }} />
						<Palette style={{ backgroundColor: "#086DA6" }} />
						<Palette style={{ backgroundColor: "#8F0851" }} />
						<Palette style={{ backgroundColor: "#A047CE" }} />
						<Palette style={{ backgroundColor: "#8400EA" }} />
					</PaletteBox>
				</InnerContainer>
				<BlueButton height={36} width={115} style={{ marginLeft: "625px" }}>
					적용하기
				</BlueButton>
			</Container>
		</>
	);
}
