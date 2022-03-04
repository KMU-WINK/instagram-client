import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import Smile from "../../img/smile.png";
import { FontBlue } from "../style/Font";

const CommentContainer = styled.div`
	display: flex;
	border: 1px solid #dcdbdb;
	padding: 19px;
`;

const Comment = styled.input`
	border: 0;
	margin-left: 19px;
`;

export default function CommentInput() {
	const [comment, setComment] = useState('');

	const onChange = (e : React.FormEvent<HTMLInputElement>) => {
		setComment(e.currentTarget.value);
	}

	const PostingBtn = styled(FontBlue)`
	opacity: ${comment ? 1 : 0.5};
	margin-left: auto;
	margin-top:6px;
	`;

	return <>
		<CommentContainer>
			<img src={Smile} />
			<Comment placeholder="댓글 달기..." onChange={onChange}/>
			<PostingBtn>게시</PostingBtn>
		</CommentContainer>
	</>
}