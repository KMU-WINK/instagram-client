import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SettingsWrapper from "./SettingsWrapper";
import Typography from "@mui/material/Typography";

const style = {
	position: 'absolute' as 'absolute',
	top: '5%',
	left: '5%',
	width: 1194,
	height: 996,
	overflow: 'scroll',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function SettingsModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Settings</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="setting-modal-title" variant="h5" component="h2" sx={{ textAlign: "center" }}>
						설정
					</Typography>
					<hr></hr>
					<SettingsWrapper></SettingsWrapper>
				</Box>
			</Modal>
		</div>
	);
}
