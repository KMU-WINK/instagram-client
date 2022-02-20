import styled from "styled-components";
import React from 'react';
// @ts-ignore
import profile from '../../img/sea.jpg';
// @ts-ignore
import StoryPrev from '../../img/StoryPrev.png';
// @ts-ignore
import StoryNext from '../../img/StoryNext.png';
import Highlight from "./Highlight";

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

export default function Highlights() {
	return <>
		<StorysContainer>
			{/*<MoreBtn src={StoryPrev}/>*/}
			<BorderContainer>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
				<Highlight name="Album Cover"/>
			</BorderContainer>
			{/*<MoreBtn src={StoryNext}/>*/}
		</StorysContainer>
	</>
}