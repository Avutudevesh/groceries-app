import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../AnonymousView";

export default () => {
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
		alignContent: "center",
	},
});
