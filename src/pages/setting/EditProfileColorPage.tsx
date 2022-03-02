import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import LeftProfile from "../../components/Feed/LeftProfile";
import RightFeed from "../../components/Feed/RightFeed";
import ThemeModal from "../../components/settings/EditProfile/color/ThemeModal";
import { ThemeContext } from "../../contexts/ThemeContext";

const FeedContainer = styled.div`
	display: flex;
`;

const EditProfileColorPage = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	return (
		<>
			<Header></Header>
			<FeedContainer>
				<LeftProfile />
				<RightFeed />
			</FeedContainer>
			<ThemeModal />
		</>
	);
};

export default EditProfileColorPage;
