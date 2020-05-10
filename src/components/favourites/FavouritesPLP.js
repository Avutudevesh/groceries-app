import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import mangoApi, { queries } from "../../api";
import PLPList from "../PLPList";
import { Context as BasketContext } from "../../context/basketItemsContext";

export default () => {
	const { state, mergeLocalAttributes } = useContext(BasketContext);
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const favouritesApi = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.GET_FAVOURITES,
				variables: {
					count: 24,
				},
			});
			setResults(
				mergeLocalAttributes(
					response.data.data.favourites.productItems,
					state.items
				)
			);
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
		<>
			<Text
				style={{
					padding: 15,
					fontWeight: "bold",
					fontSize: 16,
					color: "#666666",
				}}
			>{`${results.length} products`}</Text>
			<PLPList productItems={results} isLoading={isLoading} isError={isError} />
		</>
	);
};
