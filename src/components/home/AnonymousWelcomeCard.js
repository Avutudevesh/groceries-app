import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import { colors, commonStyles } from "../../theme";

export default () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H4}>Hello</Text>
			<Text style={styles.subHeading}>Sign in to start shopping</Text>
			<View style={{ flexDirection: "row" }}>
				<Button
					buttonStyle={styles.signInButton}
					textStyle={commonStyles.PrimaryButtonText}
					text="SignIn"
					onClick={() => {
						navigation.navigate("SignIn");
					}}
				/>
				<Button
					buttonStyle={styles.registerButton}
					textStyle={commonStyles.SecondaryButtonText}
					text="Register"
					onClick={() => {
						navigation.navigate("Register");
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 20,
		margin: 8,
	},
	subHeading: {
		...commonStyles.Text_T3,
		color: colors.subHeadingColor,
		marginVertical: 10,
	},
	signInButton: {
		...commonStyles.PrimaryButton,
		paddingHorizontal: 55,
	},
	registerButton: {
		...commonStyles.SecondaryButton,
		paddingHorizontal: 50,
	},
});
