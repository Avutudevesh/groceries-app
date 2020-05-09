import React, { useState, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";
import mangoApi, { queries } from "../../api";

export default () => {
	const [result, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const specialOfferApi = async () => {
		try {
			setIsLoading(true);
			const result = await mangoApi.post("/q/", {
				query: queries.GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY,
				variables: {
					promotionType: "all",
					count: 24,
				},
			});
			setResults(result.data.data.promotionType.productItems);
			setIsLoading(false);
		} catch (err) {
			setIsError(true);
			setIsLoading(false);
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	useEffect(() => {
		specialOfferApi();
	}, []);

	return (
		<ProductCarousel
			title="Special Offers"
			productItems={result}
			isError={isError}
			isLoading={isLoading}
		/>
	);
};
