import React, { useState, useEffect } from "react";
import { View } from "react-native";
import mangoApi, { queries } from "../../api";
import BrowseList from "../../components/browse/BrowseList";

export default ({ route, navigation }) => {
	const { id, name } = route.params;
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	navigation.setOptions({ title: name });
	const departmentApi = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.TAXONOMY_FOR_CATEGORY,
				variables: {
					business: "grocery",
					categoryId: id,
				},
			});
			setResults(response.data.data.taxonomy[0].children);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
			console.log(err);
		}
	};
	useEffect(() => {
		departmentApi();
	}, []);
	const onItemSelected = (item) => {
		navigation.navigate("Aisle", { id: item.id, name: item.name });
	};
	return (
		<BrowseList
			results={results}
			onItemSelected={onItemSelected}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};
