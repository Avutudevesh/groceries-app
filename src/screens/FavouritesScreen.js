import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../components/AnonymousView";

const FavouritesScreen = () => {
	return (
		<View style={styles.container}>
			<AnonymousView
				title="Favourites"
				subTitle="Come back here to shop the products you've bought online and in-store."
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: 30,
	},
});

export default FavouritesScreen;
