import styled from "styled-components";
import React, { useState, useEffect } from "react";
import HighlightCardContainer from "./HighlightCardContainer";

const HighlightDetailBackground = styled.div`
	width: 100wh;
	height: 100vh;
	z-index: 100;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(10px);
`;

const CloseBox = styled.div`
	background: black;
`;

export default function HighlightDetail() {
	return (
		<HighlightDetailBackground>
			<HighlightCardContainer />
		</HighlightDetailBackground>
	);
}
