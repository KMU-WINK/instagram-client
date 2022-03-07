import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import HighlightDetail from "../components/home/StoryDetail";
const HomeContainer = styled.div``;
export default function HighlightView() {
	return (
		<HomeContainer>
			<HighlightDetail />
		</HomeContainer>
	);
}
