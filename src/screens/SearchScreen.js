import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import mangoApi, { queries } from "../api";
import commonStyles from "../styles";
import PLPList from "../components/PLPList";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState(null);
	const searchProduct = async () => {
		try {
			const result = await mangoApi.post("/q/", {
				query: queries.SEARCH_QUERY,
				variables: {
					query: term,
				},
			});
			setResults(result.data.data.search.productItems);
		} catch (err) {
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	const initialScreen = (
		<View style={styles.searchEmptyContainer}>
			<Text style={commonStyles.Text_H5}>Search Groceries</Text>
			<Text style={commonStyles.Text_T2}>What are you looking for?</Text>
		</View>
	);
	const searchProductsScreen = <PLPList productItems={results} />;
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TextInput
				style={styles.searchTextInput}
				placeholder="Search for a product"
				onChangeText={setTerm}
				onSubmitEditing={searchProduct}
			/>
			{results != null ? searchProductsScreen : initialScreen}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	searchTextInput: {
		height: 70,
		backgroundColor: "white",
		paddingHorizontal: 20,
		fontSize: 20,
	},
	searchEmptyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SearchScreen;
