import React from "react";
import styled from "styled-components";
// @ts-ignore
import contentImg from "../../../../img/ContentImg.png";
import CheckBox from "../CheckBox";

const Content = styled.img`
	width: 230px;
	height: 230px;  
`;


export default function ContentBox() {

	return (
		<>
			<Content src={contentImg}/>
			{/*<CheckBox value={""} checked={false} onChange={} label={} disabled={}*/}
		</>
	);
}
