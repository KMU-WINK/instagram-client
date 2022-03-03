import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";

const InnerContainer = styled.div`
  width: 100%;
  height: 44px;
  clear: both;
  padding-top: 20px;
`;

export default function StyleBox() {
	return (
		<>
			<BoxContainer style={{ height: "77px" }}>
				<Title content={"스타일"} />
				<InnerContainer>
				</InnerContainer>
			</BoxContainer>

		</>
	);
}
