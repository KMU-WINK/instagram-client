import styled from "styled-components";
import React from 'react';
// @ts-ignore
import Border from '../../img/profileBorder.png';

const CardContainer = styled.div`
	position:fixed;
	width:360px;
	top:120px;
	left:6.25vw;
  border: 1px solid #DCDBDB;
  border-radius: 8px;
	padding:20px;
`;

const CardTop = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom:21px;
	
`;

const CardProfile = styled.img`
	width:100px;
	height:100px;
`;

const CardInfo = styled.div`
	
`;

const CardId = styled.div`
	font-size: 24px;
	color:#000;
	margin-bottom:8px;
`;

const CardFont = styled.div`
	font-size: 14px;
	color:${props => props.color || 'black'};
`;

const CardCenter = styled.div`
	display:flex;
	justify-content: space-between;
`;

const CardCount = styled.div`
	display:flex;
	width:76px;
	justify-content: space-between;
`;

export default function Card() {
	return <>
		<CardContainer>
			<CardTop>
				<CardProfile src={Border}/>
				<CardInfo>
					<CardId>insta_123</CardId>
					<CardFont>김선호</CardFont>
					<CardFont>예술가</CardFont>
				</CardInfo>
				<CardFont>전환</CardFont>
			</CardTop>
			<CardCenter>
				<CardCount>
					<CardFont>게시물</CardFont>
					<CardFont>0,000</CardFont>
				</CardCount>
				<CardCount>
					<CardFont>게시물</CardFont>
					<CardFont>0,000</CardFont>
				</CardCount>
				<CardCount>
					<CardFont>게시물</CardFont>
					<CardFont>0,000</CardFont>
				</CardCount>
			</CardCenter>
		</CardContainer>
	</>
}