import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 60px 60px 60px 60px;
	grid-column-gap: 36px;
	grid-row-gap: 36px;
	padding: 30px 40px 0px 40px;
	justify-content: center;
	align-content: center;
`;

export default function ColorPalettes({ onClickPalette }: { onClickPalette: any }) {
	const colorArr = [
		"#F5F5F5",
		"#EFE7E7",
		"#EFE7E1",
		"#F2F1E4",
		"#E4ECE8",
		"#E3E9EA",
		"#E1DDE2",
		"#DFDFDF",
		"#000000",
		"#270202",
		"#321F14",
		"#221A00",
		"#001409",
		"#001121",
		"#17091D",
		"#282828",
	];

	const handleChange = (e: any) => {
		onClickPalette(e.target.id);
	};

	return (
		<>
			<Container>
				{colorArr.map((color) => (
					<Palette color={color} id={color} onClick={handleChange} />
				))}
			</Container>
		</>
	);
}
