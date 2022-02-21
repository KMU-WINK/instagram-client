import React, { useState } from "react";
import styled from "styled-components";

interface CategoryProps {
	children: any;
	id: string;
	color: string;
	index: number;
}

const CategoryContainer = styled.li`
	width: 100%;
	height: 60px;
`;


const CategoryLink = styled.a`
	width: 100%;
	height: 100%;
	display: block;
	font-size: 18px;
	&:visited,
	&:link,
	&:hover {
		text-decoration: none;
		outline: none;
	}
	&:hover {
		background-color: #f8f8f8;
	}
`;

const CategoryName = styled.div`
	position: relative;
	top: 17px;
	left: 41px;
`;

export default function Category(props: CategoryProps) {


	return (
		<>
			<CategoryContainer>
				<CategoryLink>
					<CategoryName style={{ color: props.color }}>{props.id}</CategoryName>
				</CategoryLink>
			</CategoryContainer>
		</>
	);
}
