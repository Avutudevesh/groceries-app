import React, { useState, useEffect, useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import mangoApi, { queries } from "../../api";
import { Context as BasketContext } from "../../context/basketItemsContext";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const favouritesApi = async () => {
		try {
			setIsLoading(true);
			const result = await mangoApi.post("/q/", {
				query: queries.GET_FAVOURITES,
				variables: {
					count: 24,
				},
			});
			setResults(result.data.data.favourites.productItems);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	useEffect(() => {
		favouritesApi();
	}, []);
	return (
		<ProductCarousel
			title="Favourites"
			productItems={results ? mergeLocalAttributes(results) : []}
			isError={isError}
			isLoading={isLoading}
		/>
	);
};
