import React, { useState, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import Container from "./Container";

const ImageContainer = styled.div`
	width: 100%;
	margin-right: 0;
	height: 198px;
	border-radius: 8px;
	background-color: #eeeeee;
`;

const UploadCover = styled.input.attrs({
	type: "file",
})`
	display: none;
`;

const MyCoverContainer = styled.div`
	width: 520px;
`;

const MyCoverImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const EditBtn = styled.div`
	color: #0095f6;
	font-size: 16px;
	text-align: right;
	margin-bottom: 5px;
`;

export default function CoverImageBox() {
	const [imgSrc, setImgSrc] = useState("");
	const fileInput = useRef<any>();

	const onChangeHandle = async (event: any) => {
		if (event.target.files.length) {
			const imgTarget = event.target.files[0];
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imgTarget);
			fileReader.onload = function (e: any) {
				setImgSrc(e.target.result);
			};
		} else {
			setImgSrc("");
		}
	};

	return (
		<>
			<Container topMargin={40} height={240}>
				<Title content="커버 사진" />
				<MyCoverContainer>
					<EditBtn
						onClick={() => {
							fileInput.current.click();
						}}
					>
						추가하기
					</EditBtn>
					<UploadCover
						accept="image/jpg,impge/png,image/jpeg"
						name="cover_img"
						onChange={onChangeHandle}
						ref={fileInput}
					/>
					<ImageContainer>{imgSrc === "" ? null : <MyCoverImg src={imgSrc} />}</ImageContainer>
				</MyCoverContainer>
			</Container>
		</>
	);
}
