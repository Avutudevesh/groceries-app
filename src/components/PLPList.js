import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

export default ({ productItems, isLoading, isError }) => {
	const setContent = () => {
		return (
			<FlatList
				data={productItems}
				keyExtractor={(product) => product.id}
				renderItem={({ item }) => {
					return <ProductCard product={item} />;
				}}
			/>
		);
	};
	return (
		<View style={{ flex: 1 }}>
			{isLoading ? (
				<ActivityIndicator size="large" style={styles.loading} />
			) : (
				setContent()
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		backgroundColor: "white",
	},
});
