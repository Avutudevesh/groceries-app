import axios from "axios";
import { AsyncStorage } from "react-native";
import SEARCH_QUERY from "./searchQuery";
import GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY from "./getProductsForPromotionTypeQuery";
import TAXONOMY_SUPER_DEPARTMENT_QUERY from "./taxonomySuperDepartment";
import TAXONOMY_FOR_CATEGORY from "./taxonomyForCategory";
import GET_CATEGORY_PRODUCTS from "./getCategoryProducts";
import GET_FAVOURITES from "./getFavourites";
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

export const queries = {
	SEARCH_QUERY,
	GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY,
	TAXONOMY_SUPER_DEPARTMENT_QUERY,
	TAXONOMY_FOR_CATEGORY,
	GET_CATEGORY_PRODUCTS,
	GET_FAVOURITES,
};
