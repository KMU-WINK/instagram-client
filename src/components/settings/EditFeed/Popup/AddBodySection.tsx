import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";

const Container = styled.div`
  width: 100%;
	margin-top: 38px;
	padding-left: 55px;
	display: grid;
	grid-template-columns: 230px 230px 230px;
	grid-column-gap: 18px;
`;


export default function AddBodySection() {

	return (
		<>
			<Container>
				<ContentBox />
				<ContentBox />
				<ContentBox />
			</Container>
		</>
	);
}
