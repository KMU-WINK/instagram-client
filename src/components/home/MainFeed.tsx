import React from 'react';
import FeedHeader from "./FeedHeader";
import styled from "styled-components";
import FeedFooter from "./FeedFooter";

const FeedContainer = styled.div`
	width:828px;
`;

const FeedImg = styled.img`
  background: #C4C4C4;
	width:100%;
	height:828px;
`;

export default function MainFeed() {
	return <>
		<FeedContainer>
			<FeedHeader/>
			<FeedImg/>
			<FeedFooter/>
		</FeedContainer>

		</>
}