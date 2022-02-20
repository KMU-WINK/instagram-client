import React from "react";
import styled from "styled-components";

import Template from "./Template";

const TemplatesContaienr = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 360px;
	height: 100%;
	margin-right: 20px;
	margin-left: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export default function Templates() {
	return (
		<>
			<TemplatesContaienr>
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
				<Template label="세련된" />
			</TemplatesContaienr>
		</>
	);
}
