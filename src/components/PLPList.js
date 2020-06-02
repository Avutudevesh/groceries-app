import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

export default ({
	productItems,
	isLoading,
	isError,
	emptyStateTitle = "No products at the moment",
	emptyStateSubTitle = "Please check back later to find more.",
}) => {
	const setContent = () => {
		if (productItems.length === 0) {
			return (
				<EmptyState title={emptyStateTitle} subTitle={emptyStateSubTitle} />
			);
		}
		return (
			<FlatList
				data={productItems}
				keyExtractor={(item) => item.product._id}
				renderItem={({ item }) => {
					return <ProductCard productItem={item} />;
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
