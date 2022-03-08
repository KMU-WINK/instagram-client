import styled from "styled-components";
import React, { useEffect, useState } from "react";
// @ts-ignore
import testImg from "../../img/sea.jpg";
import apiClient from "../../lib/apiClient";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const FeedMainContainer = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
`;

const ImgContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	overflow: hidden;
`;

const FeedImg = styled.img`
	width: 100%;
	position: absolute;
`;

const FeedChild: React.FC<{ id: string }> = ({ id }) => {
	const [image, setImage] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		apiClient.get(`/image/${id}`).then((res) => {
			if (res.data.images.length >= 1) {
				setImage(res.data.images[0].url);
			}
		});
	});

	return (
		<ImgContainer>
			<Link to={`/article/${id}`} state={{ backgroundLocation: location }}>
				<FeedImg
					src={"http://api.redesigninsta.kro.kr/" + image}
				/>
			</Link>
		</ImgContainer>
	);
};

export default function FeedMain() {
	const { id } = useParams();

	

	const [myInfo, setMyinfo] = useState({
		id: 1,
		nickName: "kimkim",
		userName: "김찬호",
		descrtipion: "설명설명",
	});

	const [articles, setArticles] = useState<any[]>([]);

	useEffect(() => {
		apiClient.get("/article/users/" + id).then((articles) => {
			setArticles(articles.data.articles);
		});
	}, []);

	return (
		<>
			<FeedMainContainer>
				{articles.map((article) => (
					<FeedChild id={article.id} />
				))}
			</FeedMainContainer>
		</>
	);
}
