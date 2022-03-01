import React, { useState } from "react";
import styled from "styled-components";
import Templates from "./Templates";
import ColorPalettes from "./ColorPalettes";
import EditCard from "./Edit/EditCard";

const SideBarContainer = styled.div`
  width: 400px;
  height: 100%;
`;

const SideBarTop = styled.ul`
  list-style: none;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  border-bottom: 1px #e9e9e9 solid;
	display: grid;
	grid-auto-flow: column;
`;

const TabMenu = styled.li`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  //width: 200px;
  height: 70px;
  text-align: center;
  line-height: 4.0;

  &.active {
    border-bottom: 1px black solid;
  }
`;

const SideBarBottom = styled.div`
  width: 100%;
  height: 630px;
`;

export default function SideBar({ getPalette, page }: { getPalette: any, page: string }) {
	const [state, setState] = useState({ activeTab: 0 });
	const [color, setColor] = useState("");

	const onClickMenu = (menuIndex: number) => {
		setState({ activeTab: menuIndex });
	};

	const onClickPalette = (color: string) => {
		console.log(color);
		setColor(color);
		getPalette(color);
	};

	const styleTab = [
		{
			id: "템플릿",
			component: <Templates />
		},
		{
			id: "배경 색",
			component: <ColorPalettes onClickPalette={onClickPalette} />
		}
	];

	const editTab = [
		{
			id: "수정하기",
			component: <EditCard />
		},
		{
			id: "템플릿",
			component: <Templates />
		},
		{
			id: "배경 색",
			component: <ColorPalettes onClickPalette={onClickPalette} />
		}
	];

	return (
		<>
			<SideBarContainer>
				<SideBarTop>
					{page === "스타일" ? styleTab.map((item, index) => <TabMenu className={state.activeTab === index ? "active" : ""}
																																	 onClick={() => onClickMenu(index)}>{item.id}</TabMenu>) : editTab.map((item, index) =>
						<TabMenu className={state.activeTab === index ? "active" : ""}
										 onClick={() => onClickMenu(index)}>{item.id}</TabMenu>)}
				</SideBarTop>
				<SideBarBottom>
					{page === "스타일" ? styleTab[state.activeTab].component : editTab[state.activeTab].component}
				</SideBarBottom>
			</SideBarContainer>
		</>
	);
}
