import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import commonStyles from "../styles";

const SearchScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<TextInput
				style={styles.searchTextInput}
				placeholder="Search for a product"
			/>
			<View style={styles.searchEmptyContainer}>
				<Text style={commonStyles.Text_H5}>Search Groceries</Text>
				<Text style={commonStyles.Text_T2}>What are you looking for?</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	searchTextInput: {
		height: 60,
		backgroundColor: "white",
		padding: 20,
	},
	searchEmptyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SearchScreen;
