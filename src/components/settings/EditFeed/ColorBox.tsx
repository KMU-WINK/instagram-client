import React, { useState } from "react";
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
  color: #0095F6;
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

const Default = styled.img<{ state: boolean }>`
  width: 48px;
  height: 48px;
  margin-right: 22px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: ${(props) => (props.state ? "5px #3796F0 solid" : "0")};
`;

const Palette = styled.div<{ state: boolean, index:number }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 22px;
  margin-bottom: 10px;
  border: ${(props) => (props.state ? "5px #3796F0 solid" : "0")};
	margin-left: ${(props) => (props.index === 7 ? "32px" : "0")};
`;

export default function ColorBox() {
	const [backgroundColor, setBackgroundColor] = useState([
		{
			color: "None",
			state: true
		},
		{
			color: "#FF9090",
			state: false
		},
		{
			color: "#FFAD7C",
			state: false
		},
		{
			color: "#FFF89A",
			state: false
		},
		{
			color: "#8DFFB8",
			state: false
		},
		{
			color: "#A3F1FF",
			state: false
		},
		{
			color: "#DF81FF",
			state: false
		}]);

	const [symbolColor, setSymbolColor] = useState([
		{
			color: "None",
			state: true
		},
		{
			color: "#FF34EB",
			state: false
		},
		{
			color: "#E91E2A",
			state: false
		},
		{
			color: "#FF6A2A",
			state: false
		},
		{
			color: "#EFAF0B",
			state: false
		},
		{
			color: "#317A0E",
			state: false
		},
		{
			color: "#0CA6A6",
			state: false
		},
		{
			color: "#00D3E0",
			state: false
		},
		{
			color: "#1C00CB",
			state: false
		},
		{
			color: "#086DA6",
			state: false
		},
		{
			color: "#8F0851",
			state: false
		},
		{
			color: "#A047CE",
			state: false
		},
		{
			color: "#8400EA",
			state: false
		},
	])

	const handleBackgroundOnChange = (pos: number) => {
		const newArr: { color: string; state: boolean; }[] = [];
		backgroundColor.map((item, index) => {
			pos === index ?
				newArr.push({ color: item.color, state: true }) :
				newArr.push({ color: item.color, state: false });
		});

		setBackgroundColor(newArr);
	};

	const handleSymbolOnChange = (pos: number) => {
		const newArr: { color: string; state: boolean; }[] = [];
		symbolColor.map((item, index) => {
			pos === index ?
				newArr.push({ color: item.color, state: true }) :
				newArr.push({ color: item.color, state: false });
		});
		console.log(newArr)

		setSymbolColor(newArr);
	};

	return (
		<>
			<Container style={{ borderBottom: "#C4C4C4 1px solid" }} topMargin={30} height={490}>
				<InnerContainer>
					<Title content="배경" />
					<PreviewBtn>미리보기</PreviewBtn>
					<PaletteBox>
						{backgroundColor.map((item, index) => {
							return index >= 1 ? <Palette onClick={() => handleBackgroundOnChange(index)} style={{ backgroundColor: item.color }}
																					 state={item.state} index={index} /> :
								<Default onClick={() => handleBackgroundOnChange(index)} src={None} state={item.state} />;
						})}
					</PaletteBox>
				</InnerContainer>
				<InnerContainer>
					<Title content="심볼 색상" />
					<PaletteBox style={{ marginTop: "60px" }}>
						{symbolColor.map((item, index) => {
							return index >= 1 ? <Palette onClick={() => handleSymbolOnChange(index)} style={{ backgroundColor: item.color }}
																					 state={item.state} index={index}/> :
								<Default onClick={() => handleSymbolOnChange(index)} src={None} state={item.state} />;
						})}
					</PaletteBox>
				</InnerContainer>
				<BlueButton height={36} width={115} style={{ marginLeft: "625px" }}>적용하기</BlueButton>
			</Container>
		</>
	);
}