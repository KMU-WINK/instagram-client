import styled from "styled-components";
import React, { useState } from "react";

interface ButtonProps {
	width: string;
	height: string;
};

const FeedButton = styled.div<ButtonProps>`
	display:flex;
	justify-content: center;
	width:${(props) => props.width ? props.width : '100%'};
	height:${(props) => props.height ? props.height : '100%'};
  border: 0.8px solid rgba(0, 0, 0, 0.6);
  border-radius: 4px;
	font-size: 16px;
	line-height:${(props) => props.height ? props.height : '100%'};
`;

export default FeedButton;