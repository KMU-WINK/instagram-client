import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";


export default function TestBox() {
	const [options, setOptions] = useState([
			{id: '라이트모드', state: true},
			{id: '다크모드', state: false}
		]);
	const [checked, setChecked] = useState(0);

	const array = ['라이트모드', '다크모드'	];
	const [checkedState, setCheckedState] = useState(
		new Array(array.length).fill(false)
	);

	const handleOnChange = (position:number) => {
		console.log('왜 안되 씨발라마')
		// const updatedCheckedState = checkedState.map((item, index) =>
		// 	index === position ? !item : item
		// const updateOptions = options.map((item, i) => {
		// 	(i === position ? { ...options, state: true } : { ...options, state: false });
		// })
		// console.log(updateOptions)
	}


	return (
		<>

			{array.map((item, index) => {
				return <CheckBox className={`checkbox_${index}`} onChange={() => handleOnChange(index)} checked={checkedState[index]} label={item}/>})}
		</>
	);
}