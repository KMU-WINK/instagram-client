import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Container from "./Container";
import Title from "./Title";
import DetailInfo from "./DetailInfo";

const InputContainer = styled.div`
	width: 500px;
`;

export default function NameBox() {
	const [state, setState] = useState("2SoH/이소");
	const handleChange = (e: any) => {
		setState(e.target.value);
		console.log(state);
	};

	return (
		<>
			<Container topMargin={22} height={150}>
				<Title content="이름" />
				<InputContainer>
					<TextInput minHeight={44} value={state} onChange={handleChange} />
					<DetailInfo>
						사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을
						수 있도록 도와주세요.
						<br />
						<br />
						이름은 14일 안에 두 번만 변경할 수 있습니다.
					</DetailInfo>
				</InputContainer>
			</Container>
		</>
	);
}
