import React from "react";
import styled from "styled-components";
// @ts-ignore
import BackImg from "../../img/BackBtn.png";
import FirstSubCard from "./FirstSubCard"
import SecondSubCard from "./SecondSubCard"
import ThirdSubCard from "./ThirdSubCard"

const SubCardContainer = styled.div`
    position:relative;
`;


export default function ModalHeader() {
	return (
		<>
			<SubCardContainer>
                <FirstSubCard />
                <SecondSubCard />
                <ThirdSubCard />
			</SubCardContainer>
		</>
	);
}
