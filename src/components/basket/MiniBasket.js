import React from "react";
import { View, Text, StyleSheet } from "react-native";
import commonStyles from "../../styles";

export default ({ totalItems, guidePrice }) => {
	return (
		<View style={styles.container}>
			<MiniBasketItem title="Items" value={totalItems} />
			<MiniBasketItem title="Guide Price" value={guidePrice} />
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
	},
	basketItem: {},
});
