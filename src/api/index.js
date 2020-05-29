import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
	baseURL: "http://74a7a7b5e44e.ngrok.io/graphql",
});

instance.interceptors.request.use(
	async (config) => {
		console.log("network request made");
		const token = await AsyncStorage.getItem("access_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;
