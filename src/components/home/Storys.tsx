import styled from "styled-components";
import React from 'react';
import FeedHeader from "./FeedHeader";
import Profile from "../common/Profile";
// @ts-ignore
import profile from '../../img/sea.jpg';
// @ts-ignore
import StoryPrev from '../../img/StoryPrev.png';
// @ts-ignore
import StoryNext from '../../img/StoryNext.png';
import Story from "./Story";

const StorysContainer = styled.div`
	display:flex;
  justify-content: space-between;
	align-items: center;
	margin-bottom:45px;
`;

const BorderContainer = styled.div`
	display:flex;
	justify-content: space-between;
	width:100%;
`;

const MoreBtn = styled.img`
	width:28px;
	height:28px;
`;

export default function Storys() {
	return <>
		<StorysContainer>
			<MoreBtn src={StoryPrev}/>
			<BorderContainer>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
				<Story/>
			</BorderContainer>
			<MoreBtn src={StoryNext}/>
		</StorysContainer>
	</>
}