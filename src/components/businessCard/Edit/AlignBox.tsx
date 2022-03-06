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

export default function AlignBox({ handleAlign }: { handleAlign: any }) {;
	const [selected, setSelected] = useState([
		{
			id: "center",
			state: false,
		},
		{
			id: "left",
			state: true,
		},
		{
			id: "right",
			state: false,
		},
		{
			id: "justify",
			state: false,
		}
	]);

	const handleOnClick = (e: any) => {
		const newArr: { id: string; state: boolean }[] = [];
		selected.map((item, index) => {
			e.target.id === item.id
				? newArr.push({ id: item.id, state: true })
				: newArr.push({ id: item.id, state: false });
		});
		console.log(newArr);

		setSelected(newArr);
		handleAlign(e.target.id);
	};
	return (
		<>
			<BoxContainer style={{ height: "80px" }}>
				<Title content={"정렬"} />
				<InnerContainer>
					<AlignImg src={alignCenter} id={"center"} state={selected[0].state}
										onClick={handleOnClick} />
					<AlignImg src={alignLeft} id={"left"} state={selected[1].state}
										onClick={handleOnClick} />
					<AlignImg src={alignRight} id={"right"} state={selected[2].state}
										onClick={handleOnClick} />
					<AlignImg src={justify} id={"justify"} state={selected[3].state}
										onClick={handleOnClick} />
				</InnerContainer>
			</BoxContainer>

		</>
	);
}
