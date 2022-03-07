import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import ViewedBorder from "../../img/storyViewed.png";
// @ts-ignore
import border from "../../img/storyBorder.svg";
// @ts-ignore
import testImg from "../../img/sea.jpg";
import { useNavigate } from "react-router-dom";

interface StoryProps {
	id: string;
	//todo: profile도 props로 관리하기
}

const StoryContainer = styled.div``;

const ImgProfileContainer = styled.div``;

const StoryName = styled.div`
	color: #000;
	font-size: 16px;
	text-align: center;
	margin-top: 5px;
`;

const Border = styled.img`
	position: absolute;
	width: 80px;
	height: 80px;
	border-radius: 100%;
`;

const Img = styled.img`
	margin: 6px 0 0 6px;
	width: 68px;
	height: 68px;
	border-radius: 100%;
`;

export default function Story(props: StoryProps) {
	const navigate = useNavigate();
	const [isView, setIsView] = useState(false);

	const storyClick = () => {
		setIsView(true);
		navigate("/story");
	};

	return (
		<>
			<StoryContainer >
				<ImgProfileContainer onClick={storyClick}>
					<Border src={isView ? ViewedBorder : border} />
					<Img src={testImg} />
				</ImgProfileContainer>

				<StoryName>{props.id}</StoryName>
			</StoryContainer>
		</>
	);
}
