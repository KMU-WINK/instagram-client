import React from "react";
import styled from "styled-components";

interface CardContainerProps {
	color: string;
}

const isAlpha = function (ch: string) {
	return /^[A-Z]$/i.test(ch);
};

const CardContainer = styled.div<CardContainerProps>`
	display: inline-block;
	width: 300px;
	height: 518px;
	margin: 20px;
	//background-color: #f2e8e8;
	background-color: ${(props) => props.color || "#f2e8e8"};
	color: ${(props) => (isAlpha(props.color[1]) ? "#000000" : "#FFFFFF")};
	text-align: center;
	vertical-align: middle;
`;

export default CardContainer;
