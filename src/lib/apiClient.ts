import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://api.redesigninsta.kro.kr/",
});

export default apiClient;
