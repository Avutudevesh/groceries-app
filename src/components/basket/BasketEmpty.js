import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, commonStyles } from "../../theme";

export default () => {
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>Empty Basket</Text>
			<Text style={styles.subTitle}>
				Add products from your favourites or search for something specific.
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
