import React from "react";
import { View, FlatList } from "react-native";
import ProductCard from "./ProductCard";

export default ({ productItems }) => {
	return (
		<View>
			<FlatList
				data={productItems}
				keyExtractor={(product) => product.id}
				renderItem={({ item }) => {
					return <ProductCard product={item} />;
				}}
			/>
		</View>
	);
};
