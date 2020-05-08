import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import commonStyles from "../../styles";

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
		backgroundColor: "#00539F",
		padding: 15,
	},
	innerContainer: {
		backgroundColor: "white",
		marginTop: 20,
		padding: 15,
	},
	headingText: {
		...commonStyles.Text_H3,
		color: "white",
		marginBottom: 5,
	},
	subHeadingText: {
		...commonStyles.Text_T2,
		color: "white",
	},
	innerContainerText: {
		marginBottom: 10,
	},
});
