import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Container from "./Container";
import Title from "./Title";

const InputContainer = styled.div`
	width: 500px;
`;

export default function PhoneBox() {
	const [state, setState] = useState("+82 10-3747-1003");
	const handleChange = (e:any) => {
		setState(e.target.value);
		console.log(state);
	}

	return (
		<>
			<Container topMargin={22} height={50}>
				<Title content="전화번호" />
				<InputContainer>
					<TextInput minHeight={44} value={state} onChange={handleChange}/>
				</InputContainer>
			</Container>
		</>
	);
}
