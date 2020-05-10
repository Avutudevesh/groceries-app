import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import mangoApi, { queries } from "../api";
import commonStyles from "../styles";
import PLPList from "../components/PLPList";
import { Context as BasketContext } from "../context/basketItemsContext";
import { SearchBar } from "react-native-elements";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { mergeLocalAttributes } = useContext(BasketContext);
	const searchProduct = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.SEARCH_QUERY,
				variables: {
					query: term,
				},
			});
			setResults(response.data.data.search.productItems);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
			setIsError(true);
			setResults([]);
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	const initialScreen = () => (
		<View style={styles.searchEmptyContainer}>
			<Text style={styles.searchHeading}>Search Groceries</Text>
			<Text style={styles.searchSubHeading}>What are you looking for?</Text>
		</View>
	);
	const searchProductsScreen = () => (
		<PLPList
			productItems={results ? mergeLocalAttributes(results) : []}
			isLoading={isLoading}
			isError={isError}
		/>
	);
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<SearchBar
				placeholder="Search for a product"
				onChangeText={setTerm}
				onSubmitEditing={searchProduct}
				value={term}
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.searchInputContainer}
				placeholderTextColor="#696969"
				inputStyle={{ color: "#696969" }}
			/>
			{results != null || isLoading ? searchProductsScreen() : initialScreen()}
		</View>
	);
};

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: "#00539F",
		paddingHorizontal: 20,
		paddingTop: STATUSBAR_HEIGHT,
		borderWidth: 0,
	},
	searchInputContainer: {
		backgroundColor: "white",
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
