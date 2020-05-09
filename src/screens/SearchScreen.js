import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import mangoApi, { queries } from "../api";
import commonStyles from "../styles";
import PLPList from "../components/PLPList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const searchProduct = async () => {
		try {
			setIsLoading(true);
			const result = await mangoApi.post("/q/", {
				query: queries.SEARCH_QUERY,
				variables: {
					query: term,
				},
			});
			setResults(result.data.data.search.productItems);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
			setResults([]);
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	const initialScreen = (
		<View style={styles.searchEmptyContainer}>
			<Text style={styles.searchHeading}>Search Groceries</Text>
			<Text style={styles.searchSubHeading}>What are you looking for?</Text>
		</View>
	);
	const searchProductsScreen = (
		<PLPList productItems={results} isLoading={isLoading} isError={isError} />
	);
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<TextInput
				style={styles.searchTextInput}
				placeholder="Search for a product"
				onChangeText={setTerm}
				onSubmitEditing={searchProduct}
			/>
			{results != null || isLoading ? searchProductsScreen : initialScreen}
		</View>
	);
};

const styles = StyleSheet.create({
	searchTextInput: {
		height: 70,
		backgroundColor: "white",
		paddingHorizontal: 20,
		fontSize: 20,
		marginTop: 40,
		borderBottomColor: "#D3D3D3",
		borderBottomWidth: 1,
	},
	searchEmptyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	searchHeading: {
		...commonStyles.Text_H5,
	},
	searchSubHeading: {
		...commonStyles.Text_T2,
		color: "#666666",
		marginTop: 10,
	},
});

export default SearchScreen;
