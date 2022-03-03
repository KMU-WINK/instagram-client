import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardButtonContainer = styled.div`
	width: 100%;
	height: 60px;
	border: 1px solid #8d8d8d;
	border-radius: 4px;
	color: #1a1a1a;
	font-weight: bold;
	font-size: 16px;
	margin-top: 20px;
	text-align: center;
	line-height: 60px;
	cursor:pointer;
`;
export default function CardButton() {
	const navigate = useNavigate();
	return (
		<>
			<CardButtonContainer onClick={()=>navigate("/businesscard/view")}>프로필 카드</CardButtonContainer>
		</>
	);
}
