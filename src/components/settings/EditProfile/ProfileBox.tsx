import React, { useRef, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Container from "./Container";

const ProfileContainer = styled.div`
	width: 520px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 88px;
	height: 88px;
	border-radius: 24px;
	margin-left: 205px;
	
`

const EditBtn = styled.div`
	color: #0095f6;
	font-size: 16px;
	text-align: right;
`;

const UploadProfile = styled.input.attrs({
	type: "file",
})`
	display: none;
`;

export default function ProfileBox() {
	const [image, setImage] = useState(
		"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
	);
	const fileInput = useRef<any>();

	const onChangeHandle = (event: any) => {
		if (event.target.files.length) {
			const imgTarget = event.target.files[0];
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imgTarget);
			fileReader.onload = function (e: any) {
				setImage(e.target.result);
			};
		} else {
			setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
		}
	};

	return (
		<>
			<Container topMargin={40} height={150}>
				<Title content="프로필 사진" />
				<ProfileContainer>
					<EditBtn
						onClick={() => {
							fileInput.current.click();
						}}
					>
						수정
					</EditBtn>
					<ProfileImg
						src={image}
					/>
					<UploadProfile
						accept="image/jpg,impge/png,image/jpeg"
						name="profile_img"
						onChange={onChangeHandle}
						ref={fileInput}
					/>
				</ProfileContainer>
			</Container>
		</>
	);
}
