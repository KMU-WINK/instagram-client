import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/common/Slider";
import Header from "../components/uploadPosting/Header";
// @ts-ignore
import exit from "../img/x.svg";
// @ts-ignore
import noProfileImg from "../img/profile.svg";
import MultiDrawableBox from "../components/uploadPosting/MultiDrawbleBox";
import apiClient from "../lib/apiClient";
// @ts-ignore
import leftArrow from "../img/leftArrow.svg";
// @ts-ignore
import InputImg from "../img/inputImg.svg";
import BlueButton from "../components/common/BlueButton";
import { dataURLtoFile } from "./businessCard/CardEditView";

interface MyDataProps {
	id: number;
	email: string;
	password: string;
	userName: string;
	profileImg: string;
	nickName: string;
	description: string;
	private: boolean;
	backgroundImage: string;
	themaColor: string;
	selectedCategory: null;
	createdAt: string;
	updatedAt: string;
}

const DrawableContainer = styled.div`
	width: 40vw;
	height: 40vw;
	margin: 0 auto;
	margin-top: 230px;
	text-align: center;
	overflow: hidden;
`;

const ImageInput = styled.img`
	width: 145px;
	height: 125px;
`;

const UploadImg = styled.input.attrs({
	type: "file",
})`
	display: none;
`;

const Text = styled.div`
	margin-top: 25px;
	font-size: 21px;
	font-weight: 500;
	margin-bottom: 40px;
	color: #fff;
`;

const HeaderContainer = styled.div`
	height: 60px;
	display: flex;
	border: 1px solid #e0e0e0;
	border-radius: 3px 3px 0px 0px;
	padding: 0 30px;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	font-size: 21px;
	color: #000;
	font-weight: bold;
`;

const Upload = styled.div`
	font-size: 16px;
	color: #3796f0;
	font-weight: 500;
`;

const LeftArrow = styled.img`
	margin-right: 30px;
`;

const PostingContainer = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
`;

const LeftContainer = styled.div`
	width: 75vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
`;

const ImgContainer = styled.div`
	width: 40vw;
	height: 40vw;
	margin: 0 auto;
	margin-top: calc((100vh - 40vw) / 2);
`;

const RightContainer = styled.div`
	width: 25vw;
	height: 100vh;
	background: #fff;
`;

const Content = styled.div`
	padding: 44px;
`;

const ContentHeader = styled.div`
	display: flex;
	gap: 11px;
`;

const ContentInput = styled.textarea`
	width: 100%;
	border: 0;
	margin-top: 15px;
	height: 320px;
`;

const ProfileImg = styled.img`
	width: 23px;
	height: 23px;
	border-radius: 100%;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: #000;
`;

export default function UploadPostingView() {
	const [myData, setMyData] = useState<MyDataProps | null>(null);
	const [content, setContent] = useState("");

	const navigate = useNavigate();

	//DrawbleBox
	const [image, setImage] = useState("");
	const [images, setImages] = useState([]);

	const fileInput = useRef<any>();
	const onChangeHandle = (event: any) => {
		if (event.target.files.length) {
			const imgTarget = event.target.files[0];
			console.log(imgTarget);
			setImages(event.target.files);
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imgTarget);
			fileReader.onload = function (e: any) {
				setImage(e.target.result);
			};
		} else {
			setImage("");
		}
	};
	console.log(images);

	useEffect(() => {
		apiClient.get("/auth/get/me").then((res) => setMyData(res.data.user));
	}, []);

	// const formAppend = (imgData : Blob) => {
	// 	formData.append('img',imgData);
	// 	console.log("적용");
	// }

	const upload = async () => {
		apiClient
			.post(`/article/upload/${myData?.id}`, {
				thumbnail: "string",
				location: "string",
				content: content,
			})
			.then((res) => {
				const formData = new FormData();
				const file = dataURLtoFile(image, "xxxx.png");
				formData.append("img", file, file.name);
				apiClient
					.post(`/image/${res.data.id}`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((x) => {
						console.log("HERE");
						console.log(x);
						navigate("/home");
					});
			});
	};

	const onChange = (e: any) => {
		setContent(e.target.value);
	};

	return (
		<PostingContainer>
			<LeftContainer>
				<ImgContainer>
					<DrawableContainer style={{ marginTop: image === "" ? "230px" : "60px" }}>
						{image === "" ? (
							<ImageInput src={InputImg} />
						) : (
							<Slider images={images} width="40vw" height="40vw" isUploadPage={true}></Slider>
						)}
						<UploadImg
							accept="image/jpg,image/png,image/jpeg"
							name="cover_img"
							onChange={onChangeHandle}
							multiple
							ref={fileInput}
						/>
						<Text style={{ display: image === "" ? "" : "none" }}>사진을 여기에 끌어다 놓으세요</Text>
						<BlueButton
							onClick={() => {
								fileInput.current.click();
							}}
							style={{ fontSize: "16px", display: image === "" ? "" : "none" }}
							height={32}
							width={139}
						>
							컴퓨터에서 선택
						</BlueButton>
					</DrawableContainer>
				</ImgContainer>
			</LeftContainer>
			<RightContainer>
				<HeaderContainer>
					<LeftArrow src={leftArrow} />
					<Title>새 게시물 만들기</Title>
					<Upload
						onClick={() => {
							upload();
						}}
					>
						공유하기
					</Upload>
				</HeaderContainer>
				<Content>
					<ContentHeader>
						<ProfileImg src={myData?.profileImg ? myData.profileImg : noProfileImg} />
						<UserName>{myData?.userName}</UserName>
					</ContentHeader>
					<ContentInput placeholder={"문구입력"} onChange={onChange} />
				</Content>
			</RightContainer>
		</PostingContainer>
	);
}
