import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ProductCardHorizontal from "./ProductCardHorizontal";
import commonStyles from "../styles";

export default ({ title, productItems }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={productItems}
				keyExtractor={(product) => product.id}
				renderItem={({ item }) => {
					return <ProductCardHorizontal product={item} />;
				}}
				showsHorizontalScrollIndicator={false}
			/>
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
});
