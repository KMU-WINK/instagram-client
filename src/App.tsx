import React from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

export default function App() {
	return (
		<div>
			<Input defaultValue="@probablyup" type="text" />
			<Button primary>Button</Button>
		</div>
	);
}
