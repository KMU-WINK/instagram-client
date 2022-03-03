import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";

const InnerContainer = styled.div`
  width: 100%;
  height: 24px;
  clear: both;
  padding-top: 20px;
`;

export default function ColorBox() {
	return (
		<>
			<BoxContainer style={{ height: "57px" }}>
				<Title content={"색상"} />
				<InnerContainer>
				</InnerContainer>
			</BoxContainer>
		</>
	);
}
