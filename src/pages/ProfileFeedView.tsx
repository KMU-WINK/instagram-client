import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";
import ImgProfile from "../components/common/ImgProfile";
import LeftProfile from "../components/Feed/LeftProfile";
import RightFeed from "../components/Feed/RightFeed";

const FeedContainer = styled.div`
	display: flex;
`;

export default function ProfileFeedView() {
	return <>
		<Header></Header>
		<FeedContainer>
			<LeftProfile/>
			<RightFeed/>
		</FeedContainer>
	</>
};