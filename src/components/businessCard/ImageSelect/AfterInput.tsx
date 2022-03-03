import React, { useRef, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const AfterContainer = styled.div`
	margin-top: 40px;
`;

export default function AfterInput() {
	return (
		<>
			<AfterContainer>
				{/*<Box sx={{ width: 300 }}>*/}
				{/*	<Slider aria-label="zoom" defaultValue={30} color="secondary" />*/}
				{/*</Box>*/}
			</AfterContainer>
		</>
	);
}
