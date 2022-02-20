import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Container from "./Container";
import Title from "./Title";
import DetailInfo from "./DetailInfo";

const InputContainer = styled.div`
	width: 500px;
`;

const MoreInfo = styled.span`
	margin-left: 10px;
	color: #0095f6;
	font-size: 16px;
`;

export default function UserNameBox() {
	const [state, setState] = useState("_2soh");
	const handleChange = (e: any) => {
		setState(e.target.value);
		console.log(state);
	};

	return (
		<>
			<Container topMargin={20} height={110}>
				<Title content="사용자 이름" />
				<InputContainer>
					<TextInput minHeight={44} value={state} onChange={handleChange} />
					<DetailInfo>
						대부분의 경우 14일 이내에 사용자 이름을 다시 {state}(으)로 변경할 수 있습니다.
						<MoreInfo>더 알아보기</MoreInfo>
					</DetailInfo>
				</InputContainer>
			</Container>
		</>
	);
}
