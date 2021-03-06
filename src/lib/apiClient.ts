import axios from "axios";

const apiClient = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? "/api" : "http://api.redesigninsta.kro.kr/",
	withCredentials: true,
});

export default apiClient;
