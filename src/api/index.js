import axios from "axios";
import { AsyncStorage } from "react-native";
import keys from "../../keys";

const instance = axios.create({
	baseURL: "https://api.tesco.com/shoppingexperiencealpha",
	headers: {
		region: "MY",
		"X-APIKEY": `${keys.APIGEE_API_KEY}`,
		"ighs-language": "en-GB",
	},
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
