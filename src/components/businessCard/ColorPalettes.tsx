import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";

const Container = styled.div`
	width: 340px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 15px 30px 15px 30px;
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
