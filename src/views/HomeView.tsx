import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";
import MainFeed from "../components/home/MainFeed";
import Storys from "../components/home/Storys";
import Card from "../components/home/Card";

const HomeContainer = styled.div `
  margin: 0 auto;
	margin-top:122px;
  max-width:830px;
  height: 1019px;
`
export default function HomeView() {
	return <>
		<Header></Header>
		<Card/>
		<HomeContainer>
			<Storys/>
			<MainFeed></MainFeed>
		</HomeContainer>
	</>
};