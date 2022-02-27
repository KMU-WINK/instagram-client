import React from "react";
import styled from "styled-components";
interface CheckIconProps {
	checked: boolean;
}
const Icon = styled.svg<{checked: boolean}>`
	position: relative;
	left: -20px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width: 22px;
  height: 22px;
  visibility: ${props => props.checked ? "visible" : "hidden"}
`;

export default function CheckIcon(props:CheckIconProps) {
	console.log(props.checked);
	return (
		<>
			<Icon checked={props.checked}>
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-1.000000, -4.000000)" fill="#000000">
						<polygon
							points="20.6465116 4 8.7255814 15.5061728 3.35348837 10.3209877 1 12.5925926 7.54883721 18.9135802 8.7255814 20 9.90232558 18.9135802 23 6.27160494" />
					</g>
				</g>
			</Icon>
		</>
	);
}