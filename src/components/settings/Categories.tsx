import React from "react";
import styled from "styled-components";

import Category from "./Category";

const CategoriesContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	width: 267px;
`;
export default function Categories() {
	return (
		<>
			<CategoriesContainer>
				<Category></Category>
				<Category></Category>
				<Category></Category>
				<Category></Category>
				<Category></Category>
				<Category></Category>
				<Category></Category>
			</CategoriesContainer>
		</>
	);
}
