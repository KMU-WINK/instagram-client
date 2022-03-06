import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";

const InnerContainer = styled.div`
  width: 100%;
  height: 30px;
  clear: both;
  padding-top: 20px;
`;

const ColorContainer = styled.div`
  width: 388px;
  height: 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Color = styled.div<{color: string}>`
	background-color: ${(props) => props.color};
  width: 25px;
	height: 25px;
	border-radius: 50%;
`;


export default function ColorBox() {
	const [colors, setColors] = useState([
		{
			id: "#000000",
			state: false,
		},
		{
			id: "#ff34eb",
			state: false,
		},
		{
			id: "#e91e2a",
			state: false,
		},
		{
			id: "#ff6a2b",
			state: false,
		},
		{
			id: "#efaf0b",
			state: false,
		},
		{
			id: "#317a0e",
			state: false,
		},
		{
			id: "#0ca6a6",
			state: false,
		},
		{
			id: "#086da6",
			state: false,
		},
		{
			id: "#1c00cb",
			state: false,
		},
		{
			id: "#8f0851",
			state: false,
		},
		{
			id: "#b4b4b4",
			state: false,
		},
	])
	console.log(colors)
	return (
		<>
			<BoxContainer style={{ height: "57px" }}>
				<Title content={"색상"} />
				<InnerContainer>
					<ColorContainer>
						{colors.map((item, index) => {
							return <Color color={item.id} />
						})}
					</ColorContainer>
				</InnerContainer>
			</BoxContainer>
		</>
	);
}
