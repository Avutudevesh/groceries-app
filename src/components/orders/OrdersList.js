import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { commonStyles, colors } from "../../theme";
export default () => {
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>No recent orders</Text>
			<Text style={styles.subTitle}>
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
	subTitle: {
		textAlign: "center",
		color: colors.subHeadingColor,
		marginTop: 10,
	},
});
