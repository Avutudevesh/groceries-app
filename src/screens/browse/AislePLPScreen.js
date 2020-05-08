import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import mangoApi, { queries } from "../../api";
import PLPList from "../../components/PLPList";

export default ({ route, navigation }) => {
	const { id, name } = route.params;
	navigation.setOptions({ title: name });
	const [results, setResults] = useState([]);
	const categoryProductsApi = async () => {
		try {
			const response = await mangoApi.post("/q/", {
				query: queries.GET_CATEGORY_PRODUCTS,
				variables: {
					business: "grocery",
					categoryId: id,
				},
			});
			setResults(response.data.data.category.productItems);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		categoryProductsApi();
	}, []);
	return <PLPList productItems={results} />;
};
