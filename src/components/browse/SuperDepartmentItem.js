import React from "react";
import { View, Text, StyleSheet } from "react-native";
import commonStyles from "../../styles";

export default ({ item }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>{item.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingVertical: 20,
		borderBottomWidth: 0.5,
		borderColor: "#D3D3D3",
		marginLeft: 15,
	},
	textStyle: {
		...commonStyles.Text_H5,
		color: "#00539F",
	},
});
