import React from "react";
import styled from "styled-components";
// @ts-ignore
import TestImg from "../../../img/CateTestImg.png";

const CategoryBoxContainer = styled.div`
  width: 170px;
  height: 200px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 40px;
`;

const CategoryLabel = styled.label`
  font-size: 14px;
  margin-bottom: 9px;
`;

const Box = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 8px;
  background-color: #F2F2F2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  place-items: center;
  padding: 10px;
`;

const CategoryImg = styled.img`
  width: 72px;
  height: 72px;
`;

export default function CategoryBox() {
	return (
		<>
			<CategoryBoxContainer>
				<CategoryLabel>제목</CategoryLabel>
				<Box>
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
					<CategoryImg src={TestImg} />
				</Box>
			</CategoryBoxContainer>
		</>
	);
}