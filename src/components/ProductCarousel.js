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
import EmptyState from "./EmptyState";

export default ({
	title,
	productItems,
	isLoading,
	isError,
	emptyStateTitle,
	emptyStateSubTitle,
}) => {
	const setContent = () => {
		if (productItems.length === 0) {
			return (
				<EmptyState title={emptyStateTitle} subTitle={emptyStateSubTitle} />
			);
		}
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
