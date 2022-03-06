import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";
import Add from "./Add";

const InnerContainer = styled.div`
  width: 100%;
  clear: both;
  display: flex;
  padding-top: 20px;
`;

const AddContainer = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 14px;
	grid-row-gap: 14px;
`;


export default function AddBox() {

	return (
		<>
			<BoxContainer style={{ height: "80px" }}>
				<Title content={"추가하기"} />
				<InnerContainer>
					<AddContainer>
						<Add />
						<Add />
						<Add />
						<Add />
						<Add />
						<Add />
					</AddContainer>
				</InnerContainer>
			</BoxContainer>

		</>
	);
}
