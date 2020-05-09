import React, { useState, useEffect } from "react";
import mangoApi, { queries } from "../../api";
import PLPList from "../PLPList";

export default () => {
	const [results, setResults] = useState([]);
	const favouritesApi = async () => {
		try {
			const response = await mangoApi.post("/q/", {
				query: queries.GET_FAVOURITES,
				variables: {
					count: 24,
				},
			});
			setResults(response.data.data.favourites.productItems);
		} catch (err) {
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	useEffect(() => {
		favouritesApi();
	}, []);
	return <PLPList productItems={results} />;
};
