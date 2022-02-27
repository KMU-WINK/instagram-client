import React, { useState } from "react";
import styled from "styled-components";
import Templates from "./Templates";
import ColorPalettes from "./ColorPalettes";

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
`;

const TabMenu = styled.li`
	display: inline-block;
	font-size: 18px;
	font-weight: bold;
	width: 200px;
	height: 70px;
	text-align: center;
	line-height: 4;
	&.active {
		border-bottom: 1px black solid;
	}
`;

const SideBarBottom = styled.div`
	width: 100%;
	height: 630px;
`;

export default function SideBar({ getPalette }: { getPalette: any }) {
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

	// const menuList = {
	// 	0: <Templates />,
	// 	1: <ColorPalettes onClickPalette={onClickPalette} />,
	// };

	const menuList = [<Templates />, <ColorPalettes onClickPalette={onClickPalette} />];

	return (
		<>
			<SideBarContainer>
				<SideBarTop>
					<TabMenu className={state.activeTab === 0 ? "active" : ""} onClick={() => onClickMenu(0)}>
						템플릿
					</TabMenu>
					<TabMenu className={state.activeTab === 1 ? "active" : ""} onClick={() => onClickMenu(1)}>
						배경 색
					</TabMenu>
				</SideBarTop>
				<SideBarBottom>
					{/*<Templates />*/}
					<ColorPalettes onClickPalette={onClickPalette} />
				</SideBarBottom>
			</SideBarContainer>
		</>
	);
}
