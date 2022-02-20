import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import NavigationBarBottom from "./NavigationBarBottom";

const NavigationBarContainer = styled.div`
	width: 280px;
	height: 900px;
	border-right: #b4b4b4 1px solid;
`;

const NavigationBarTop = styled.div`
	width: 100%;
	height: 663px;
	border-bottom: #b4b4b4 1px solid;
`;

export default function SideNavigationBar(props: any) {
	const parentFunction = (data: number) => {
		console.log(data);
	}

	return (
		<>
			<NavigationBarContainer>
				<NavigationBarTop>
					<Categories />
				</NavigationBarTop>
				<NavigationBarBottom></NavigationBarBottom>
			</NavigationBarContainer>
		</>
	);
}
