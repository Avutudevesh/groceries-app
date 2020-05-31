import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import useResults from "../../hooks/useResults";
import query from "../../graphql/TaxonomyDepartments";
import CategoryItem from "./CategoryItem";
import { colors, commonStyles } from "../../theme";
export default () => {
	const { loading, error, data } = useResults(query, { business: "grocery" });
	if (!data) return null;
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Shop by Category</Text>
			<FlatList
				horizontal
				data={data.data.departments}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return <CategoryItem item={item} />;
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		marginVertical: 10,
		paddingHorizontal: 10,
	},
	textStyle: {
		...commonStyles.Text_H5,
		color: "black",
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
});
