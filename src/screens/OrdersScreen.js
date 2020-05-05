import React from "react";
import { View, StyleSheet } from "react-native";
import AnonymousView from "../components/AnonymousView";
import PrimaryToolBar from "../components/PrimaryToolBar";

const OrdersScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Orders" />
			<View style={styles.container}>
				<AnonymousView
					title="No recent Orders"
					subTitle="Once You've checkedout your orders will appear here"
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

export default OrdersScreen;
