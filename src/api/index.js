import axios from "axios";
import SEARCH_QUERY from "./searchQuery";
import GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY from "./getProductsForPromotionTypeQuery";
import TAXONOMY_SUPER_DEPARTMENT_QUERY from "./taxonomySuperDepartment";
import TAXONOMY_FOR_CATEGORY from "./taxonomyForCategory";
import GET_CATEGORY_PRODUCTS from "./getCategoryProducts";
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
	TAXONOMY_SUPER_DEPARTMENT_QUERY,
	TAXONOMY_FOR_CATEGORY,
	GET_CATEGORY_PRODUCTS,
};
