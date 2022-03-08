import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import ImgProfile from "../../components/common/ImgProfile";
import LeftProfile from "../../components/Feed/LeftProfile";
import RightFeed from "../../components/Feed/RightFeed";
import LeftProfileAnother from "../../components/Feed/LeftProfileAnother";
const FeedContainer = styled.div`
	display: flex;
`;

export default function SomPhotoPage() {
	/*
		get id code please please...
	*/

	return (
		<>
			<Header></Header>
			<FeedContainer>
				{true ? <LeftProfile /> : <LeftProfileAnother />}
				<RightFeed />
			</FeedContainer>
		</>
	);
}
