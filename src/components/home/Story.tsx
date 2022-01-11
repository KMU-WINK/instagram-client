import styled from "styled-components";
import React from 'react';
import FeedHeader from "./FeedHeader";
import Profile from "../common/Profile";
// @ts-ignore
import profile from '../../img/sea.jpg';
// @ts-ignore
import Border from '../../img/profileBorder.png';
// @ts-ignore
import ViewedBorder from '../../img/storyViewed.png';
// @ts-ignore
import StoryPrev from '../../img/StoryPrev.png';
// @ts-ignore
import StoryNext from '../../img/StoryNext.png';

const StoryContainer = styled.div`
	display:flex;
  justify-content: space-between;
	height:80px;
	line-height: 80px;
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

export default function Story() {
	return <>
		<StoryContainer>
			<MoreBtn src={StoryPrev}/>
			<BorderContainer>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={Border}/>
				<Profile src={ViewedBorder}/>
			</BorderContainer>
			<MoreBtn src={StoryNext}/>
		</StoryContainer>
	</>
}