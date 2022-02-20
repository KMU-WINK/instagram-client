import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import ViewedBorder from '../../img/storyViewed.png';
// @ts-ignore
import testImg from "../../img/sea.jpg";
import { Font2_Light } from "../style/Font";

interface HighLightProps {
	name: string;
}

const StoryContainer = styled.div`
`;

const ImgProfileContainer = styled.div `
	
`;

const Border = styled.img`
	position: absolute;
	width: 80px;
	height: 80px;
  border-radius: 100%;
`;

const Img = styled.img`
	margin: 4px 0 0 4px;
  width: 72px;
  height: 72px;
  border-radius: 100%;
	
`;

const StoryName = styled(Font2_Light)`
	text-align: center;
	margin-top:5px;
`;

export default function Highlight(props: HighLightProps) {

	return <>
		<StoryContainer>
			<ImgProfileContainer>
				<Border src={ViewedBorder}/>
				<Img src={testImg}/>
			</ImgProfileContainer>
			<StoryName>{props.name}</StoryName>
		</StoryContainer>
	</>
}
