import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

export default ({ title }) => {
	return (
		<View style={styles.toolBar}>
			<Text style={styles.textStyle}>{title}</Text>
		</View>
	);
};

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	toolBar: {
		backgroundColor: "#00539F",
		paddingVertical: 16,
		paddingTop: STATUSBAR_HEIGHT,
	},
	textStyle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		marginHorizontal: 20,
	},
});
