import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import ImgProfile from "../../components/common/ImgProfile";
import LeftProfile from "../../components/Feed/LeftProfile";
import RightFeed from "../../components/Feed/RightFeed";
import LeftProfileAnother from "../../components/Feed/LeftProfileAnother";
import { ThemeContext } from "../../contexts/ThemeContext";
const FeedContainer = styled.div`
	display: flex;
`;

export default function EasyBakingPage() {
	/*
		get id code please please...
	*/
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		setTheme("light-Orange-Orange");

		return () => {
			setTheme("light-Original-Original");
		};
	}, []);

	return (
		<>
			<Header></Header>
			<FeedContainer>
				<LeftProfileAnother />
				<RightFeed />
			</FeedContainer>
		</>
	);
}
