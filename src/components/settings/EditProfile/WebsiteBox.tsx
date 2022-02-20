import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Container from "./Container";
import Title from "./Title";

const InputContainer = styled.div`
	width: 500px;
`;

export default function WebSiteBox() {
	const [state, setState] = useState("");
	const handleChange = (e: any) => {
		setState(e.target.value);
		console.log(state);
	};

	return (
		<>
			<Container topMargin={22} height={50}>
				<Title content="웹사이트" />
				<InputContainer>
					<TextInput minHeight={44} placeholder="웹사이트" value={state} onChange={handleChange} />
				</InputContainer>
			</Container>
		</>
	);
}
