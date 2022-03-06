import styled from "styled-components";
import React, { useState } from "react";
// @ts-ignore
import Heart_off from "../../img/Heart_off.png";
// @ts-ignore
import Heart_on from "../../img/Heart_on.png";
// @ts-ignore
import comment from "../../img/Comment.png";
// @ts-ignore
import Share from "../../img/Union.png";
// @ts-ignore
import Smile from "../../img/smile.png";
import { Font3_Light, FontBold, FontNormal } from "../style/Font";
import Comment from "./Comment";
import CommentInput from "../common/CommentInput";
import PostingIcons from "../common/PostingIcons";

const FooterContainer = styled.div`
	border: 1px solid #e0e0e0;
	padding: 20px;
`;

const ViewAll = styled(Font3_Light)`
	margin-top: 9px;
`;

const PostTime = styled(Font3_Light)`
	font-size: 10px;
	margin: 16px 0 8px 0;
`;

export default function FeedFooter() {
	return (
		<>
			<FooterContainer>
				<PostingIcons />
				<FontNormal>여러 명이 좋아합니다</FontNormal>
				<Comment id="insta_123" content="test" />
				<ViewAll>댓글 5개 모두 보기</ViewAll>
				<Comment id="insta_111" content="hi" />
				<Comment id="insta_222" content="hello" />
				<PostTime>10시간전</PostTime>
			</FooterContainer>
			<CommentInput />
		</>
	);
}
