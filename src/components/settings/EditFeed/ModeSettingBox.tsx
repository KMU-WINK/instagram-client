import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Title from "./Title";
import BlueButton from "../../common/BlueButton";
import CheckBox from "./CheckBox";

const CheckBoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 33px;
`;

export default function ModeSettingBox() {
	const [item, setItem] = useState([
		{
			label: "화이트 모드",
			value: true,
		},
		{
			label: "다크 모드",
			value: false,
		},
	]);

	const handleOnClick = (e: any) => {
		console.log(e.target.id);
		const newArr: { label: string; value: boolean }[] = [];
		item.map((i, index) => {
			e.target.id === i.label
				? newArr.push({ label: i.label, value: true })
				: newArr.push({ label: i.label, value: false });
		});
		setItem(newArr);
	};

	return (
		<>
			<Container style={{ borderBottom: "#C4C4C4 1px solid" }} topMargin={55} height={170}>
				<Title content="모드 변경" />
				<CheckBoxContainer>
					{item.map((v, i) => (
						<CheckBox
							id={v.label}
							value={v.value}
							checked={v.value}
							onChange={handleOnClick}
							label={v.label}
							disabled={false}
						/>
					))}
				</CheckBoxContainer>
				<BlueButton style={{ marginLeft: "625px" }} height={36} width={115}>
					적용하기
				</BlueButton>
			</Container>
		</>
	);
}
