import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import Border from "../../img/profileBorder.png";
// @ts-ignore
import ViewedBorder from "../../img/storyViewed.png";

interface StoryProps {
	id: string;
	//todo: profile도 props로 관리하기
}

const StoryContainer = styled.div``;
const StoryProfile = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 100%;
	display: block;
`;

const StoryName = styled.div`
	color: #000;
	font-size: 16px;
	text-align: center;
	margin-top: 5px;
`;

export default function Story(props: StoryProps) {
	const [isView, setIsView] = useState(false);

	const storyClick = () => {
		setIsView(true);
	};

	return (
		<>
			<StoryContainer>
				<StoryProfile src={isView ? ViewedBorder : Border} onClick={storyClick} />
				<StoryName>{props.id}</StoryName>
			</StoryContainer>
		</>
	);
}
