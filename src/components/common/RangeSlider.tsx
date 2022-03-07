import React, { useState } from "react";
import styled from "styled-components";

const Slider = styled.input.attrs({
	type: "range",
})`
	width: 350px;
	-webkit-appearance: none;
	&:focus {
		outline: none;
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 3px;
		cursor: pointer;
		animate: 0.2s;
		background: #dcdbdb;
	}
	&::-webkit-slider-thumb {
		border-radius: 50%;
		background: #000000;
		height: 20px;
		width: 20px;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -10px;
	}
`;

export default function RangeSlider() {
	return (
		<>
			<Slider />
		</>
	);
}
