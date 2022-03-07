import React, { useState } from "react";
import styled from "styled-components";
// @ts-ignore
import Heart_on from "../../img/Heart_on.png";
// @ts-ignore
import Heart_off from "../../img/Heart_off.svg";
// @ts-ignore
import comment from "../../img/Comment.svg";
// @ts-ignore
import Share from "../../img/Share.svg";
// @ts-ignore
import bookmark from "../../img/Bookmark.svg";
import { useLocation, Link } from "react-router-dom";

interface PostingIconsProps {
	bookmark?: boolean;
	articleId?: number;
}

const IconContainer = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 20px;
`;

const Icon = styled.img`
	width: 22px;
	height: 21px;
`;

export default function PostingIcons(props: PostingIconsProps) {
	const location = useLocation();

	const Bookmark = styled.img`
		display: ${props.bookmark ? "block" : "none"};
		margin-left: auto;
	`;

	const [heart, setHeart] = useState(false);

	const heartClick = () => {
		if (heart) setHeart(false);
		else setHeart(true);
	};

	return (
		<>
			<IconContainer>
				<Icon src={heart ? Heart_on : Heart_off} onClick={heartClick} />
				<Link to={`/article/${props.articleId}`} state={{ backgroundLocation: location }}>
					<img src={comment} width="21px" height="21px" />
				</Link>
				<Icon src={Share} />
				<Bookmark src={bookmark} />
			</IconContainer>
		</>
	);
}
