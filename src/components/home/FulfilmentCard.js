import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import { colors, commonStyles } from "../../theme";

export default () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Hello test.</Text>
			<Text style={styles.subHeadingText}>Want to book your slot?</Text>
			<View style={styles.innerContainer}>
				<Text style={styles.innerContainerText}>
					Book now to secure a convenient time
				</Text>
				<Button
					buttonStyle={commonStyles.PrimaryButton}
					textStyle={commonStyles.PrimaryButtonText}
					text="Book a slot"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		padding: 15,
	},
	innerContainer: {
		backgroundColor: colors.primaryBackground,
		marginTop: 20,
		padding: 15,
	},
	headingText: {
		...commonStyles.Text_H3,
		color: colors.primaryBackground,
		marginBottom: 5,
	},
	subHeadingText: {
		...commonStyles.Text_T2,
		color: colors.primaryBackground,
	},
	innerContainerText: {
		marginBottom: 10,
	},
});
