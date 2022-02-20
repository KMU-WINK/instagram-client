import React from "react";
import styled from "styled-components";

interface Title {
	content: string;
}

const Text = styled.div`
	font-size: 18px;
	font-weight: bold;
  float: left;
`;

export default function Title(props: Title) {
	return(
		<>
				<Text>{props.content}</Text>
		</>
	)
}