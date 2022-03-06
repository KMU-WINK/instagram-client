import React, { useRef, useState } from "react";
import styled from "styled-components";
import RangeSlider from "../../common/RangeSlider";
// @ts-ignore
import Zoom from "../../../img/zoom.png"

const AfterContainer = styled.div`
	margin-top: 40px;
	height: 60px;
	width: 350px;
	margin-left: -20px;
`;

const ZoomImg = styled.img`
	display: inline-block;
	margin-bottom: 25px;
	width: 22px;
	height: 22px;
`;

export default function AfterInput() {
	return (
		<>
			<AfterContainer>
				<ZoomImg src={Zoom} />
				<RangeSlider />
			</AfterContainer>
		</>
	);
}
