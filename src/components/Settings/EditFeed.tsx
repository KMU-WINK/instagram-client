import { Radio, RadioGroup } from "@mui/material";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

export default function EditFeed() {
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
		"여행",
	]);

	const handleClick = () => {
		console.log("click");
	};
	return (
		<>
			<div className="editfeed-top">
				<h3>해쉬태그</h3>
				<div>
					<h6 style={{ marginBottom: "5px", marginTop: "5px", color: "gray" }}>
						회원님의 게시물을 기반으로 만들어진 해쉬태그 목록입니다
					</h6>
					<h6 style={{ marginBottom: "5px", marginTop: "5px", color: "gray" }}>
						더 많은 해쉬태그를 원하신다면 게시물에 추가하세요
					</h6>
				</div>
			</div>
			<FormControl component="fieldset">
				<RadioGroup row aria-label="counting" name="row-radio-buttons-group">
					<FormControlLabel
						value="count-use"
						control={<Radio />}
						label={<span style={{ fontSize: "14px" }}>사용된 횟수</span>}
					/>
					<FormControlLabel
						value="count-like"
						control={<Radio />}
						label={<span style={{ fontSize: "14px" }}>좋아요 많은 순</span>}
					/>
				</RadioGroup>
			</FormControl>
			<Stack direction="row" spacing={1}>
				<div className="tag" style={{ width: "500px" }}>
					{tag.map((item) => (
						<Chip label={"# " + item} variant={"outlined"} sx={{ margin: "5px" }} onClick={handleClick} />
					))}
				</div>
			</Stack>
			<div style={{ fontSize: "15px", marginTop: "10px", marginBottom: "20px" }}>해쉬태그 추가하러 가기</div>
			<div className="theme-box">
				<FormControl component="fieldset">
					<FormLabel component="legend">테마</FormLabel>
					<RadioGroup aria-label="mode" defaultValue="female" name="radio-buttons-group">
						<FormControlLabel
							value="mode-light"
							control={<Radio />}
							label={<span style={{ fontSize: "14px" }}>라이트 모드</span>}
						/>
						<FormControlLabel
							value="mode-dark"
							control={<Radio />}
							label={<span style={{ fontSize: "14px" }}>다크 모드</span>}
						/>
						<FormControlLabel
							value="mode-custom"
							control={<Radio />}
							label={<span style={{ fontSize: "14px" }}>사용자 지정</span>}
						/>
					</RadioGroup>
				</FormControl>
			</div>
		</>
	);
}
