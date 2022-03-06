import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";
import RangeSlider from "../../common/RangeSlider";

const InnerContainer = styled.div`
	width: 100%;
	height: 20px;
	clear: both;
	padding-top: 20px;
`;

export default function SizeBox() {
	return (
		<>
			<BoxContainer style={{ height: "53px" }}>
				<Title content={"크기"} />
				<InnerContainer>
					<RangeSlider />
				</InnerContainer>
			</BoxContainer>
		</>
	);
}
