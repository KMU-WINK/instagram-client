import styled from "styled-components";
import React from "react";
import FeedHeader from "./FeedHeader";
// @ts-ignore
import profile from "../../img/sea.jpg";
// @ts-ignore
import StoryPrev from "../../img/Prev.svg";
// @ts-ignore
import StoryNext from "../../img/Next.svg";
import Story from "./Story";

const StorysContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 45px;
`;

const BorderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const MoreBtn = styled.img`
	width: 28px;
	height: 28px;
`;

export default function Storys() {
	return (
		<>
			<StorysContainer>
				<MoreBtn src={StoryPrev} />
				<BorderContainer>
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
					<Story id="insta_123" />
				</BorderContainer>
				<MoreBtn src={StoryNext} />
			</StorysContainer>
		</>
	);
}
