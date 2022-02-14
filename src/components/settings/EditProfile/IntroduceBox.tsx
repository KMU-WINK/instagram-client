import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";

const InputContainer = styled.div`
	width: 500px;
`;

const InputArea = styled.textarea`
	min-height: 94px;
  border: 1px #858585 solid;
	resize: vertical;
  border-radius: 5px;
  font-size: 20px;
  width: 100%;
  padding-left: 15px;
`

export default function IntroduceBox() {
	const [state, setState] = useState("");
	const handleChange = (e:any) => {
		setState(e.target.value);
		console.log(state);
	}

	return (
		<>
			<Container topMargin={22} height={100}>
				<Title content="소개" />
				<InputContainer>
					<InputArea value={state} onChange={handleChange}/>
				</InputContainer>
			</Container>
		</>
	);
}
