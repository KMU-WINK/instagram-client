import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import StoryDetail from "../components/home/StoryDetail";

const HomeContainer = styled.div``;

export default function StoryView() {
	return (
		<HomeContainer>
			<StoryDetail />
		</HomeContainer>
	);
}
