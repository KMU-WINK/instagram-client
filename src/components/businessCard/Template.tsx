import React from "react";
import styled from "styled-components";

interface TemplateProps{
	label: string;
}

const TemplateCardContainer = styled.div`
  width: 136px;
	height: 255px;
	text-align: center;
	margin: 10px 20px 10px 20px;
`;

const TemplateCard = styled.div`
	width: 136px;
	height: 224px;
	background-color: #e9e9e9;
	border-radius: 5px;
`;

const TemplateLabel = styled.label`
	font-size: 14px;
	color: #000000;
`;

export default function Template(props:TemplateProps) {
	return(
		<>
			<TemplateCardContainer>
				<TemplateCard />
				<TemplateLabel>{props.label}</TemplateLabel>
			</TemplateCardContainer>
		</>
	)

};
