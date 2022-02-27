import React, { useState } from "react";
import styled from "styled-components";

interface TextInputProps {
	minHeight: number;
}

const TextInput = styled.input.attrs({
	type: "text",
})<TextInputProps>`
	border: 1px #858585 solid;
	border-radius: 5px;
	font-size: 20px;
	min-height: ${(props) => props.minHeight}px;
	width: 100%;
	padding-left: 15px;
`;

export default TextInput;
