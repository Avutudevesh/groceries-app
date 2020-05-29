import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import { colors, commonStyles } from "../../theme";

export default () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H3}>Hello</Text>
			<Text style={styles.subHeading}>Sign in to start shopping</Text>
			<Button
				buttonStyle={commonStyles.PrimaryButton}
				textStyle={commonStyles.PrimaryButtonText}
				text="SignIn"
				onClick={() => {
					navigation.navigate("SignIn");
				}}
			/>
			<Button
				buttonStyle={commonStyles.SecondaryButton}
				textStyle={commonStyles.SecondaryButtonText}
				text="Register"
				onClick={() => {
					navigation.navigate("Register");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 20,
	},
	subHeading: {
		...commonStyles.Text_T2,
		color: colors.subHeadingColor,
		marginVertical: 10,
	},
});
