import React from "react";
import styled from "styled-components";
import BlueButton from "../../../common/BlueButton";

const Container = styled.div`
  width: 750px;
`;
const Header = styled.div`
  width: 600px;
  height: 40px;
  background-color: #DCDBDB;
  border-radius: 8px;
  margin-left: 100px;
  font-size: 18px;
  line-height: 35px;
`;

export default function HeadSection() {

	return (
		<>
			<Container>
				<Header>UX 디자인</Header>
				<BlueButton height={36} width={86}>완료</BlueButton>
			</Container>
		</>
	);
}
