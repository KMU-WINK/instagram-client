import styled from "styled-components";
import React from 'react';
import Storys from "../home/Storys";
// @ts-ignore
import Post from '../../img/post.svg';
import Highlights from "./Highlights";
import RightNav from "./RightNav";
import FeedMain from "./FeedMain";
import RightCategory from "./RightCategory";

const RightContainer = styled.div`
  width:90%;
	padding: 0 120px;
	margin-top:131px;
`;

export default function RightFeed() {
	return <>
		<RightContainer>
			<Highlights/>
			<RightNav/>
			<RightCategory/>
			<FeedMain/>
		</RightContainer>
	</>
}