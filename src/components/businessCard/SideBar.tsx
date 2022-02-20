import React, { useState } from "react";
import styled from "styled-components";
import Templates from "./Templates";
import ColorPalettes from "./ColorPalettes";

const SideBarContainer = styled.div`
	width: 400px;
	height: 100%;
`;

const SideBarTop = styled.div`
	width: 100%;
	height: 70px;
`;

const SideBarBottom = styled.div`
	width: 100%;
	height: 670px;
`;

export default function SideBar({ getPalette }: { getPalette: any }) {
	const [state, setState] = useState("");

	const onClickPalette = (color: string) => {
		console.log(color);
		setState(color);
		getPalette(color);
	};

	return (
		<>
			<SideBarContainer>
				<SideBarTop></SideBarTop>
				<SideBarBottom>
					{/*<Templates />*/}
					<ColorPalettes onClickPalette={onClickPalette} />
				</SideBarBottom>
			</SideBarContainer>
		</>
	);
}
