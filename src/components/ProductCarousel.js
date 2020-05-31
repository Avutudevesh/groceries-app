import React from "react";
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import ProductCardVertical from "./ProductCardVertical";
import { commonStyles, colors } from "../theme";

export default ({ title, productItems, isLoading, isError }) => {
	const setContent = () => {
		return (
			<FlatList
				horizontal
				data={productItems}
				keyExtractor={(item) => item.product._id}
				renderItem={({ item }) => {
					return <ProductCardVertical item={item} />;
				}}
				showsHorizontalScrollIndicator={false}
			/>
		);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{isLoading ? <ActivityIndicator style={styles.loader} /> : setContent()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBackground,
		paddingBottom: 20,
		marginBottom: 20,
	},
	title: {
		...commonStyles.Text_H5,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	loader: {
		padding: 20,
		height: 200,
	},
});
