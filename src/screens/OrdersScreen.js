import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../components/AnonymousView";

const OrdersScreen = () => {
	return (
		<View style={styles.container}>
			<AnonymousView
				title="No recent Orders"
				subTitle="Once You've checkedout your orders will appear here"
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

export default OrdersScreen;
