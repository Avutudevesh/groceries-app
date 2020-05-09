import React from "react";
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import ProductCardHorizontal from "./ProductCardHorizontal";
import commonStyles from "../styles";

export default ({ title, productItems, isLoading, isError }) => {
	const setContent = () => {
		return (
			<FlatList
				horizontal
				data={productItems}
				keyExtractor={(product) => product.id}
				renderItem={({ item }) => {
					return <ProductCardHorizontal product={item} />;
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
		backgroundColor: "white",
		paddingBottom: 20,
		marginBottom: 20,
	},
	title: {
		...commonStyles.Text_H4,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	loader: {
		padding: 20,
		height: 200,
	},
});
