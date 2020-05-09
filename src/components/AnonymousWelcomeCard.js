import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import commonStyles from "../styles";
import { useNavigation } from "@react-navigation/native";

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
					console.log("clicked");
					navigation.navigate("SignIn");
				}}
			/>
			<Button
				buttonStyle={commonStyles.SecondaryButton}
				textStyle={commonStyles.SecondaryButtonText}
				text="Register"
				onClick={() => {
					console.log("clicked");
					navigation.navigate("SignIn");
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
		color: "#666666",
		marginVertical: 10,
	},
});
