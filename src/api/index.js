import axios from "axios";
import SEARCH_QUERY from "./searchQuery";
import GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY from "./getProductsForPromotionTypeQuery";
import keys from "../../keys";
export default axios.create({
	baseURL: "https://api.tesco.com/shoppingexperiencealpha",
	headers: {
		region: "UK",
		"X-APIKEY": `${keys.APIGEE_API_KEY}`,
		"ighs-language": "en-GB",
	},
});

export const queries = {
	SEARCH_QUERY,
	GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY,
};
