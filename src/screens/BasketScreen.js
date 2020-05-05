import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../components/AnonymousView";
import PrimaryToolBar from "../components/PrimaryToolBar";

const BasketScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Basket" />
			<View style={styles.container}>
				<AnonymousView
					title="Empty Basket"
					subTitle="Add products from your favourites or serach screen for something specific."
				/>
			</View>
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

export default BasketScreen;
