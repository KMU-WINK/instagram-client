import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.li`
	margin: 0;
	margin-left: 30px;
	padding: 0;
	border: 0;
`;

const CategoryLink = styled.a`
	border-left: 2px solid transparent;
	display: block;
	font-size: 16px;
	height: inherit;
	line-height: 20px;
	padding: 16px 16px 16px 30px;
	color: black;
	font-size: 20px;
	&:visited,
	&:link,
	&:hover {
		text-decoration: none;
		outline: none;
	}
	&:hover {
		background-color: lightgray;
	}
`;

export default function Category() {
	return (
		<>
			<CategoryContainer>
				<CategoryLink href="#">피드 편집</CategoryLink>
			</CategoryContainer>
		</>
	);
}
