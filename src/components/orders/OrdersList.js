import React from "react";
import { View, Text, StyleSheet } from "react-native";
import commonStyles from "../../styles";

export default () => {
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>No recent orders</Text>
			<Text style={{ textAlign: "center", color: "#666666", marginTop: 10 }}>
				Once you've checkedout, your order will appear here.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		marginHorizontal: 20,
	},
});
