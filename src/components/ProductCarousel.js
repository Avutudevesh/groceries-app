import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ProductCardHorizontal from "./ProductCardHorizontal";
import commonStyles from "../styles";

export default ({ productItems }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Special Offers</Text>
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
	},
	title: {
		...commonStyles.Text_H4,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
});
