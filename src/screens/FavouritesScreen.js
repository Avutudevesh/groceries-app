import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../components/AnonymousView";
import PrimaryToolBar from "../components/PrimaryToolBar";

const FavouritesScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Favourites" />
			<View style={styles.container}>
				<AnonymousView
					title="Favourites"
					subTitle="Come back here to shop the products you've bought online and in-store."
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});

export default FavouritesScreen;
