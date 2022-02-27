import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "./CheckIcon";

interface CheckBoxProps {
	className: string;
	checked: boolean;
	label: string;
	onChange: () => void;
}

const CategoryBoxContainer = styled.div`
  width: 150px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckBox = styled.div<{checked: boolean}>`
  display: inline-block;
  border: 1px #858585 solid;
  background-color: #ffffff;
  border-radius: 5px;
  width: 22px;
  height: 22px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled.span`
  font-size: 16px;
`;

export default function CheckBox(props:CheckBoxProps) {

	return (
		<CategoryBoxContainer className={props.className}>
			<HiddenCheckbox checked={props.checked} onChange={() => props.onChange} />
			<StyledCheckBox checked={props.checked}/>
			<CheckIcon checked={props.checked} />
			<Label>{props.label}</Label>
		</CategoryBoxContainer>

	);
}



