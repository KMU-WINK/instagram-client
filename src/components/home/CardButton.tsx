import styled from "styled-components";
import React from 'react';

const CardButtonContainer = styled.div`
	width:100%;
	height:60px;
  border: 1px solid #8D8D8D;
  border-radius: 4px;
  color: #1A1A1A;
  font-weight: bold;
  font-size: 16px;
	margin-top:20px;
	text-align: center;
	line-height: 60px;
`;
export default function CardButton() {
	return <>
		<CardButtonContainer>
			프로필 카드
		</CardButtonContainer>
	</>
}