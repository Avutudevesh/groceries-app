import React, { useState, useEffect, useContext } from "react";
import mangoApi, { queries } from "../../api";
import PLPList from "../../components/PLPList";
import { Context as BasketContext } from "../../context/basketItemsContext";

export default ({ route, navigation }) => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { id, name } = route.params;
	navigation.setOptions({ title: name });
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const categoryProductsApi = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.GET_CATEGORY_PRODUCTS,
				variables: {
					business: "grocery",
					facet: id,
				},
			});
			setResults(response.data.data.category.productItems);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
			console.log(err);
		}
	};
	useEffect(() => {
		categoryProductsApi();
	}, []);
	return (
		<PLPList
			productItems={mergeLocalAttributes(results)}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};
