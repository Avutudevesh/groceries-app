import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import PLPList from "../components/PLPList";
import { Context as BasketContext } from "../context/basketItemsContext";
import { SearchBar } from "react-native-elements";
import { commonStyles, colors } from "../theme";
import useResults from "../hooks/useResults";
import query from "../graphql/SearchProduct";

const SearchScreen = ({ route }) => {
	const { searchTerm } = route.params;
	const { mergeLocalAttributes } = useContext(BasketContext);
	const [term, setTerm] = useState(searchTerm);
	const { loading, error, data, lazyFetchResults } = useResults(query, {
		query: searchTerm,
	});
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
				autoCapitalize="none"
				autoCorrect={false}
			/>
			{data != null || loading ? searchProductsScreen() : initialScreen()}
		</View>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: colors.primary,
		paddingHorizontal: 20,
		borderWidth: 0,
		borderTopWidth: 0,
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
