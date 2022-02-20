import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import testImg from '../../img/sea.jpg';

const FeedMainContainer = styled.div`
	display:grid;
	gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

const ImgContainer = styled.div`
  position: relative;
	width:100%;
	padding-bottom: 100%;
	overflow: hidden;
`;

const FeedImg = styled.img`
	position: absolute;
`;
export default function FeedMain() {
	return <>
		<FeedMainContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
			<ImgContainer>
				<FeedImg src={testImg}/>
			</ImgContainer>
		</FeedMainContainer>
	</>
}