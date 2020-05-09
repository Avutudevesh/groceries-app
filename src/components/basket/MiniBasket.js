import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import commonStyles from "../../styles";

export default ({ totalItems, guidePrice, isLoading, isError }) => {
	return (
		<View style={styles.container}>
			<MiniBasketItem title="Items" value={totalItems} />
			<MiniBasketItem title="Guide Price" value={guidePrice} />
			{isLoading && <ActivityIndicator style={styles.loading} />}
		</View>
	);
};

const MiniBasketItem = ({ title, value }) => {
	return (
		<View>
			<Text style={commonStyles.Text_T4}>{title}</Text>
			<Text style={commonStyles.Text_H6}>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 15,
		justifyContent: "space-between",
		marginBottom: 10,
	},
	loading: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: "center",
		justifyContent: "center",
	},
});
