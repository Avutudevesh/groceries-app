import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, commonStyles } from "../theme";

export default ({ title, subTitle }) => {
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		marginHorizontal: 20,
		marginVertical: 30,
	},
	subTitle: {
		textAlign: "center",
		color: colors.subHeadingColor,
		marginVertical: 10,
	},
});
