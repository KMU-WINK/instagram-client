import React from "react";
import styled from "styled-components";
import AlignBox from "./AlignBox";
import SizeBox from "./SizeBox";
import StyleBox from "./StyleBox";
import ColorBox from "./ColorBox";

const EditCardContaienr = styled.div`
	width: 360px;
	height: 100%;
	margin-right: 20px;
	margin-left: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export default function EditCard() {
	return (
		<>
			<EditCardContaienr>
				<AlignBox />
				<SizeBox />
				<StyleBox />
				<ColorBox />
			</EditCardContaienr>
		</>
	);
}
