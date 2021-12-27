import React from "react";
import { Typography, Box, Tabs, Tab } from "@mui/material";
import EditFeed from "./EditFeed";

interface SettingsWrapperProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: SettingsWrapperProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`
	};
}

export default function SettingsWrapper() {
	const [value, setValue] = React.useState(0);
	const [tab, setTab] = React.useState(["프로필 편집", "피드 편집", "비밀번호 변경"]);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{ flexGrow: 1, display: "flex", height: "996px", width: "1194px" }}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{ borderRight: 1, borderColor: "divider" }}
			>
				{/*{tab.map((item, index) => (*/}
				{/*	<Tab label={item} {...a11yProps(index)} />*/}
				{/*))}*/}
				<Tab label="프로필 편집" {...a11yProps(0)} />
				<Tab label="피드 편집" {...a11yProps(1)} />
				<Tab label="비밀번호 변경" {...a11yProps(2)} />
				<Tab label="앱 및 웹사이트" {...a11yProps(3)} />
				<Tab label="이메일 및 SMS" {...a11yProps(4)} />
				<Tab label="푸시 알림" {...a11yProps(5)} />
				<Tab label="연락처 관리" {...a11yProps(6)} />
				<Tab label="개인정보 및 보안" {...a11yProps(7)} />
				<Tab label="로그인 활동" {...a11yProps(8)} />
				<Tab label={<span style={{ color: "#1976d2" }}>프로페셔널 계정으로 변환</span>} {...a11yProps(9)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				<EditFeed></EditFeed>
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item Four
			</TabPanel>
			<TabPanel value={value} index={4}>
				Item Five
			</TabPanel>
			<TabPanel value={value} index={5}>
				Item Six
			</TabPanel>
			<TabPanel value={value} index={6}>
				Item Seven
			</TabPanel>
			<TabPanel value={value} index={7}>
				Item Eight
			</TabPanel>
			<TabPanel value={value} index={8}>
				Item Nine
			</TabPanel>
			<TabPanel value={value} index={9}>
				Item Ten
			</TabPanel>
		</Box>
	);
}
