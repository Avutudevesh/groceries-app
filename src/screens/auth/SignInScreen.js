import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import commonStyles from "../../styles";
import Button from "../../components/Button";
import mangoApi from "../../api";

export default () => {
	const identityApi = async () => {
		const response = await mangoApi.post("/api/v3/identify");
	};
	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/tesco_logo.png")} />
			<Text style={styles.linkText}>New to Tesco? Register here</Text>
			<TextInput
				placeholder="Email Address"
				style={styles.inputField}
				placeholderTextColor="#808080"
			/>
			<TextInput
				placeholder="Password"
				style={styles.inputField}
				placeholderTextColor="#808080"
			/>
			<Text style={styles.linkText}>Forgotten password?</Text>
			<Button
				buttonStyle={commonStyles.PrimaryButton}
				textStyle={commonStyles.PrimaryButtonText}
				text="SignIn"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	inputField: {
		height: 50,
		backgroundColor: "#DCDCDC",
		marginVertical: 10,
		borderBottomWidth: 1,
	},
	linkText: {
		...commonStyles.Text_H5,
		color: "#00539F",
		marginVertical: 25,
	},
});
