import React, { useState, useEffect, useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import mangoApi, { queries } from "../../api";
import { Context as BasketContext } from "../../context/basketItemsContext";

export default () => {
	const { state, mergeLocalAttributes } = useContext(BasketContext);
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
			setResults(
				mergeLocalAttributes(
					result.data.data.promotionType.productItems,
					state.items
				)
			);
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
