import styled from "styled-components";
import React from "react";
import { FontBold, FontNormal } from "../style/Font";

interface CommentProps {
	id: string;
	content: string;
}
const FooterComment = styled.div`
	display: flex;
	margin-top: 10px;
`;

const FooterId = styled(FontBold)`
	margin-right: 8px;
`;

export default function Comment(props: CommentProps) {
	return (
		<>
			<FooterComment>
				<FooterId>{props.id}</FooterId>
				<FontNormal>{props.content}</FontNormal>
			</FooterComment>
		</>
	);
}
