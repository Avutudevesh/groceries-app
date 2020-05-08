import React, { useState, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";
import mangoApi, { queries } from "../../api";

export default () => {
	const [result, setResults] = useState([]);
	const favouritesApi = async () => {
		try {
			const result = await mangoApi.post("/q/", {
				query: queries.GET_FAVOURITES,
				variables: {
					count: 24,
				},
			});
			setResults(result.data.data.favourites.productItems);
		} catch (err) {
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	useEffect(() => {
		favouritesApi();
	}, []);
	return <ProductCarousel title="Favourites" productItems={result} />;
};
