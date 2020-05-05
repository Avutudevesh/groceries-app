import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title }) => {
	return (
		<View style={styles.toolBar}>
			<Text style={styles.textStyle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	toolBar: {
		backgroundColor: "#00539F",
		paddingVertical: 16,
	},
	textStyle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		marginHorizontal: 20,
	},
});
