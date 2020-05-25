import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import useResults from "../../hooks/useResults";
import query from "../../graphql/TaxonomySuperDepartments";
import CategoryItem from "./CategoryItem";
import { colors, commonStyles } from "../../theme";
export default () => {
	const { loading, error, data } = useResults(query, { business: "grocery" });
	if (!data) return null;
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Shop by Category</Text>
			<FlatList
				data={data.data.taxonomy}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <CategoryItem item={item} />;
				}}
				numColumns={3}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		marginVertical: 10,
		paddingHorizontal: 10,
		alignItems: "center",
	},
	textStyle: {
		...commonStyles.Text_H4,
		color: "black",
		alignContent: "center",
		paddingVertical: 10,
		textAlign: "center",
	},
});
