import { createContext } from "react";

interface ThemeType {
	bgColor: {
		feed: string;
		profile: string;
	};
	pointColor: string;
	fontColor: string[];
	name: `${Mode}-${BgColor}-${PointColor}`;
}

export type Mode = "light" | "dark";

export type BgColor = "Original" | "Red" | "Orange" | "Yellow" | "Green" | "Blue" | "Purple";

export type PointColor =
	| "Original"
	| "Pink"
	| "Red"
	| "Orange"
	| "Yellow"
	| "Green"
	| "Aqua Green"
	| "Mint"
	| "Blue"
	| "Navy"
	| "Rose"
	| "Purple"
	| "Light Purple";

type ThemeInterface = {
	[key in `${Mode}-${BgColor}-${PointColor}`]?: ThemeType;
};

const generateTheme = () => {
	const themes: ThemeInterface = {};

	const modes: Mode[] = ["light", "dark"];
	const bgColors: BgColor[] = ["Original", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
	const pointColors: PointColor[] = [
		"Original",
		"Pink",
		"Red",
		"Orange",
		"Yellow",
		"Green",
		"Aqua Green",
		"Mint",
		"Blue",
		"Navy",
		"Rose",
		"Purple",
		"Light Purple",
	];

	const feeds: {
		[key in BgColor]: {
			light: string;
			dark: string;
		};
	} = {
		Original: {
			light: "#FFFFFF",
			dark: "#000000",
		},
		Red: {
			light: "#E9D8D8",
			dark: "#2C0000",
		},
		Orange: {
			light: "#ECE2D2",
			dark: "#321F14",
		},
		Yellow: {
			light: "#EDECDF",
			dark: "#27251B",
		},
		Green: {
			light: "#E2EAE5",
			dark: "#00180B",
		},
		Blue: {
			light: "#E3E9EA",
			dark: "#001121",
		},
		Purple: {
			light: "#E3E0E4",
			dark: "#17091D",
		},
	};

	const profiles: {
		[key in BgColor]: {
			light: string;
			dark: string;
		};
	} = {
		Original: {
			light: "#FAFAFA",
			dark: "#121212",
		},
		Red: {
			light: "#F2E8E8",
			dark: "#411919",
		},
		Orange: {
			light: "#F4EEEA",
			dark: "#46352B",
		},
		Yellow: {
			light: "#F4F4EC",
			dark: "#3D3B32",
		},
		Green: {
			light: "#EEF2EF",
			dark: "#192F23",
		},
		Blue: {
			light: "#EEF2F2",
			dark: "#192937",
		},
		Purple: {
			light: "#EEECEF",
			dark: "#2E2234",
		},
	};

	const points: {
		[key in PointColor]: {
			light: string;
			dark: string;
		};
	} = {
		Original: {
			light: "#000000",
			dark: "#FFFFFF",
		},
		Pink: {
			light: "#FF34EB",
			dark: "#FF96F4",
		},
		Red: {
			light: "#FF1010",
			dark: "#FFA0A6",
		},
		Orange: {
			light: "#FF6A2B",
			dark: "#FF9162",
		},
		Yellow: {
			light: "#EAAA09",
			dark: "#FFDB5B",
		},
		Green: {
			light: "#317A0E",
			dark: "#96FF64",
		},
		"Aqua Green": {
			light: "#09A1A1",
			dark: "#49EAC3",
		},
		Mint: {
			light: "#00D3E0",
			dark: "#B5FFF6",
		},
		Blue: {
			light: "#086DA6",
			dark: "#28A4EA",
		},
		Navy: {
			light: "#1C00CB",
			dark: "#6F8EFF",
		},
		Rose: {
			light: "#8F0851",
			dark: "#F077B1",
		},
		Purple: {
			light: "#8400EA",
			dark: "#B95FFF",
		},
		"Light Purple": {
			light: "#A047CE",
			dark: "#CF8DD1",
		},
	};

	const fonts = {
		light: ["#000000", "#595959", "#767676", "B3B3B3"],
		dark: ["#FFFFFF", "#C6C6C6", "#7A7A7A", "#676767"],
	};

	modes.forEach((mode) => {
		bgColors.forEach((bgColor) => {
			pointColors.forEach((pointColor) => {
				themes[`${mode}-${bgColor}-${pointColor}`] = {
					bgColor: {
						feed: feeds[bgColor][mode],
						profile: profiles[bgColor][mode],
					},
					pointColor: points[pointColor][mode],
					fontColor: fonts[mode],
					name: `${mode}-${bgColor}-${pointColor}`,
				};
			});
		});
	});

	return themes;
};

export const themes: ThemeInterface = generateTheme();

export const ThemeContext = createContext({
	theme: themes["light-Original-Original"],
	setTheme: (name: `${Mode}-${BgColor}-${PointColor}`) => {},
});
