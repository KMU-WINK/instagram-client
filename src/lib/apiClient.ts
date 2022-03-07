import axios from "axios";

const apiClient = axios.create({
	// baseURL: process.env.NODE_ENV === "development" ? "" : "http://api.redesigninsta.kro.kr/",
	baseURL: "http://api.redesigninsta.kro.kr/",
});

// todo: baseURL수정

export default apiClient;
