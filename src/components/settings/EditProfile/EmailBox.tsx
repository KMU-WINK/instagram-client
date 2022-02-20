import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Container from "./Container";
import Title from "./Title";

const InputContainer = styled.div`
	width: 500px;
`;

export default function EmailBox() {
	const [state, setState] = useState("");
	const handleChange = (e:any) => {
		setState(e.target.value);
		console.log(state);
	}

	return (
		<>
			<Container topMargin={22} height={50}>
				<Title content="이메일" />
				<InputContainer>
					<TextInput minHeight={44} placeholder="이메일" value={state} onChange={handleChange}/>
				</InputContainer>
			</Container>
		</>
	);
}
