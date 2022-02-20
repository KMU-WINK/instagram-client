import React from "react";
import styled from "styled-components";

interface Title {
	content: string;
}

const BoxContainer = styled.div`
	width: 200px;
  position: relative;
  top: 0;
  left: 60px;
	margin-right: 40px;
`;

const Text = styled.div`
  float: left;
	font-size: 18px;
	font-weight: 600;
	
`;
export default function Title(props: Title) {
	return(
		<>
			<BoxContainer>
				<Text>{props.content}</Text>
			</BoxContainer>
		</>
	)
}