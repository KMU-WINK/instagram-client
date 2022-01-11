import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";
import MainFeed from "../components/home/MainFeed";
import Story from "../components/home/Story";

const HomeContainer = styled.div `
  margin: 0 auto;
	margin-top:122px;
  max-width:830px;
  height: 1019px;
`
export default function HomeView() {
	return <>
		<Header></Header>
		<HomeContainer>
			<Story/>
			<MainFeed></MainFeed>
		</HomeContainer>
	</>
};