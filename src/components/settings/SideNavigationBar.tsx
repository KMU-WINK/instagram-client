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

export default function SideNavigationBar({getMenuId} : {getMenuId : any}) {
	const getMenu = (index:number) => {
		getMenuId(index);
	}

	return (
		<>
			<NavigationBarContainer>
				<NavigationBarTop>
					<Categories getMenu={getMenu}/>
				</NavigationBarTop>
				<NavigationBarBottom></NavigationBarBottom>
			</NavigationBarContainer>
		</>
	);
}
