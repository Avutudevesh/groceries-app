import React, { useState, useEffect, useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import mangoApi, { queries } from "../../api";
import { Context as BasketContext } from "../../context/basketItemsContext";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const [results, setResults] = useState([]);
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
			productItems={results ? mergeLocalAttributes(results) : []}
			isError={isError}
			isLoading={isLoading}
		/>
	);
};
