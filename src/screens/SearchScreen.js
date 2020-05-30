import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import PLPList from "../components/PLPList";
import { Context as BasketContext } from "../context/basketItemsContext";
import { SearchBar } from "react-native-elements";
import { commonStyles, colors } from "../theme";
import useResults from "../hooks/useResults";
import query from "../graphql/SearchProduct";

const SearchScreen = () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const [term, setTerm] = useState("");
	const { loading, error, data, lazyFetchResults } = useResults(
		query,
		null,
		true
	);
	const initialScreen = () => (
		<View style={styles.searchEmptyContainer}>
			<Text style={styles.searchHeading}>Search Groceries</Text>
			<Text style={styles.searchSubHeading}>What are you looking for?</Text>
		</View>
	);
	const searchProductsScreen = () => (
		<PLPList
			productItems={data ? mergeLocalAttributes(data.data.search) : []}
			isLoading={loading}
			isError={error}
		/>
	);
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<SearchBar
				placeholder="Search for a product"
				onChangeText={setTerm}
				onSubmitEditing={() => lazyFetchResults({ query: term })}
				value={term}
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.searchInputContainer}
				placeholderTextColor={colors.textInputPlaceholderColor}
				inputStyle={{ color: colors.textInputPlaceholderColor }}
			/>
			{data != null || loading ? searchProductsScreen() : initialScreen()}
		</View>
	);
};

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: colors.primary,
		paddingHorizontal: 20,
		paddingTop: STATUSBAR_HEIGHT,
		borderWidth: 0,
	},
	searchInputContainer: {
		backgroundColor: colors.primaryBackground,
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
		color: colors.subHeadingColor,
		marginTop: 10,
	},
});

export default SearchScreen;
