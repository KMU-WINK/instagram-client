import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";


export default function TestBox() {
	const [item, setItem] = useState([
			{
				label: "화이트 모드",
				value: true
			},
			{
				label: "다크 모드",
				value: false
			}
		]
	);
	const [value, setCheckbox] = useState(true);

	return (
		<>
			{/*{item.map((v, i) => <CheckBox value={v.value} checked={v.value} onChange={({ target: any}) => {...v, value:  }} label={} disabled={})}*/}
			<CheckBox
				label="value"
				value={value}
				checked={value}
				onChange={({ target: any }) => setCheckbox(!value)}
				disabled={false}
			/>
			<CheckBox
				label="!value"
				value={!value}
				checked={!value}
				onChange={({ target: any }) => setCheckbox(!value)}
				disabled={false}
			/>
		</>

	);
}