import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import { colors, commonStyles } from "../../theme";

export default () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Hello Devesh.</Text>
			<Text style={styles.subHeadingText}>
				Checkout your order now to get this slot.
			</Text>
			<View style={styles.innerContainer}>
				<View>
					<Text style={styles.innerContainerText}>
						Your next available slot
					</Text>
					<Text style={styles.innerContainerSubText}>
						Tomorrow 7:00AM - 9:00AM
					</Text>
				</View>
				<Button
					buttonStyle={styles.checkoutButton}
					textStyle={commonStyles.PrimaryButtonText}
					text="Checkout"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 10,
	},
	innerContainer: {
		backgroundColor: colors.primaryBackground,
		marginTop: 15,
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headingText: {
		...commonStyles.Text_H5,
		color: colors.primaryBackground,
		marginBottom: 5,
	},
	subHeadingText: {
		...commonStyles.Text_T3,
		color: colors.primaryBackground,
	},
	innerContainerText: {
		marginBottom: 5,
		fontWeight: "bold",
	},
	innerContainerSubText: {
		marginBottom: 5,
	},
	checkoutButton: {
		...commonStyles.PrimaryButton,
		paddingHorizontal: 50,
	},
});
