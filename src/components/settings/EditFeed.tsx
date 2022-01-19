import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 45px;
  margin-top: 30px;
`;
const Header = styled.h6`
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const HashTagContainer = styled.div`
`;

const HashTagHeaderContent = styled.div`
  color: #6F6F6F;
  width: 432px;
  line-height: 1.7;
`;

const HashTagBody = styled.div`
`;
const Item = styled.div`
  display: inline-block;
  align-items: center;
  margin-right: 40px;
  margin-top: 30px;
`;

const RadioBtn = styled.input.attrs({ type: "radio" })`
  margin-left: 0;
  margin-right: 15px;
`;

const RadioLabel = styled.label`
	font-size: 17px;
`;

const HashTagBtnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;

const HashTagBtn = styled.button`
  background: none;
  color: #B0B0B0;
  font-size: 15px;
  line-height: 2.0;
  margin-right: 18px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
  border: 2px solid #B0B0B0;
`;

const AddHashTag = styled.a`
  display: block;
  font-weight: 540;
  font-size: 15px;
  margin-top: 10px;
  &:visited,
  &:link,
  &:hover {
    text-decoration: none;
    outline: none;
	color: black;
  }
`;

const ThemeContainer = styled.div`
`;

const ThemeItem = styled.div`
	margin-bottom: 5px;

`;

export default function EditFeed() {
	const [radioTag, setRadioTag] = useState("optionA");
	const [tagSeleted, setTagSelected] = useState(false);
	const [radioTheme, setRadioTheme] = useState("light");

	const [tag, setTag] = useState([
		"작업물",
		"내 작업 모습",
		"일상툰",
		"좋아요",
		"UX디자인",
		"셀카",
		"데일리",
		"먹스타그램",
		"국민대",
		"Stack",
		"동아리",
		"여행"
	]);

	const handleRadioTagChange = (event: any) => {
		const value = event.target.value;
		setRadioTag(value);
	};

	const handleRadioThemeChange = (event: any) => {
		const value = event.target.value;
		setRadioTheme(value);
	};

	const handleBtnChange = (event: any) => {
		setTagSelected(!tagSeleted);
		const value = event.target;
		if (tagSeleted) {
			value.style.borderColor = "#009BDE";
			value.style.color = "#000000";
		} else {
			value.style.borderColor = "#B0B0B0";
			value.style.color = "#B0B0B0";
		}

	};
	return (
		<>
			<Container>
				<HashTagContainer>
					<Header>해쉬태그</Header>
					<HashTagHeaderContent>
						회원님의 게시물을 기반으로 만들어진 해쉬태그 목록입니다. 더 많은 해쉬태그를 원하신다면 게시물에
						추가하세요.
					</HashTagHeaderContent>
					<HashTagBody>
						<Item>
							<RadioBtn value={"optionA"} checked={radioTag === "optionA"}
											 onChange={event => handleRadioTagChange(event)}></RadioBtn>
							<RadioLabel>사용된 횟수</RadioLabel>
						</Item>
						<Item>
							<RadioBtn value={"optionB"} checked={radioTag === "optionB"}
											 onChange={event => handleRadioTagChange(event)}></RadioBtn>
							<RadioLabel>좋아요 많은 순</RadioLabel>
						</Item>
						<HashTagBtnContainer>
							{tag.map((item) => (<HashTagBtn onClick={handleBtnChange}>{"# " + item}</HashTagBtn>))}
						</HashTagBtnContainer>
						<AddHashTag href="#">해쉬태그 추가하러가기</AddHashTag>
					</HashTagBody>
				</HashTagContainer>
				<ThemeContainer>
					<Header>테마</Header>
					<ThemeItem>
						<RadioBtn value={"light"} checked={radioTheme === "light"}
								  onChange={event => handleRadioThemeChange(event)}></RadioBtn>
						<RadioLabel>라이트 모드</RadioLabel>
					</ThemeItem>
					<ThemeItem>
						<RadioBtn value={"dark"} checked={radioTheme === "dark"}
								  onChange={event => handleRadioThemeChange(event)}></RadioBtn>
						<RadioLabel>다크 모드</RadioLabel>
					</ThemeItem>
					<ThemeItem>
						<RadioBtn value={"custom"} checked={radioTheme === "custom"}
								  onChange={event => handleRadioThemeChange(event)}></RadioBtn>
						<RadioLabel>사용자 지정</RadioLabel>
					</ThemeItem>
				</ThemeContainer>
			</Container>
		</>
	);
}
