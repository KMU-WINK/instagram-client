import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "./BoxContainer";
import Title from "./Title";
// @ts-ignore
import alignCenter from "../../../img/alignCenter.png";
// @ts-ignore
import alignLeft from "../../../img/alignLeft.png";
// @ts-ignore
import alignRight from "../../../img/alignRight.png";
// @ts-ignore
import justify from "../../../img/justify.png";

const InnerContainer = styled.div`
  width: 100%;
  height: 50px;
  clear: both;
  display: flex;
  padding-top: 20px;
`;

const AlignImg = styled.img<{ id: string, state: boolean }>`
  width: 34px;
  height: 34px;
  margin-right: 30px;
  padding: 5px;
	border: ${(props) => props.state ? "1px #3796f0 solid" : "0"};
	border-radius: 4px;
`;

export default function AlignBox() {
	const [selected, setSelected] = useState([
		{
			id: "0",
			state: true,
		},
		{
			id: "1",
			state: false,
		},
		{
			id: "2",
			state: false,
		},
		{
			id: "3",
			state: false,
		},
	]);

	const handleOnClick = (e: any) => {
		const newArr: { id: string; state: boolean }[] = [];
		selected.map((item, index) => {
			e.target.id == item.id
				? newArr.push({ id: item.id, state: true })
				: newArr.push({ id: item.id, state: false });
		});
		console.log(newArr);

		setSelected(newArr);

	}
	return (
		<>
			<BoxContainer style={{ height: "80px" }}>
				<Title content={"정렬"} />
				<InnerContainer>
					<AlignImg src={alignCenter} id={"0"} state={selected[0].state} onClick={handleOnClick}/>
					<AlignImg src={alignLeft} id={"1"} state={selected[1].state} onClick={handleOnClick}/>
					<AlignImg src={alignRight} id={"2"} state={selected[2].state} onClick={handleOnClick}/>
					<AlignImg src={justify} id={"3"} state={selected[3].state} onClick={handleOnClick}/>
				</InnerContainer>
			</BoxContainer>

		</>
	);
}
