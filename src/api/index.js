import axios from "axios";
import SEARCH_QUERY from "./searchQuery";
import { APIGEE_API_KEY } from "react-native-dotenv";

export default axios.create({
	baseURL: "https://api.tesco.com/shoppingexperiencealpha",
	headers: {
		region: "UK",
		"X-APIKEY": `${APIGEE_API_KEY}`,
		"ighs-language": "en-GB",
	},
});

export const queries = {
	SEARCH_QUERY,
};
