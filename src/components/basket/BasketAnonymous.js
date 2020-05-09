import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../AnonymousView";

export default () => {
	return (
		<View style={styles.container}>
			<AnonymousView
				title="Empty Basket"
				subTitle="Add products from your favourites or search for something specific."
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
