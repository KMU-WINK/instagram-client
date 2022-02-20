import React from "react";
import styled from "styled-components";

interface CardContainerProps {
	color: string;
}

const CardContainer = styled.div<CardContainerProps>`
	display: inline-block;
	width: 295px;
	height: 518px;
	padding: 12px;
	margin: 20px;
	//background-color: #f2e8e8;
	background-color: ${(props) => props.color || "#f2e8e8"};
	text-align: center;
	vertical-align: middle;
`;

export default CardContainer;
