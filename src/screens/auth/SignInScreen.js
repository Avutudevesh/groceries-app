import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import commonStyles from "../../styles";
import Button from "../../components/Button";
import { Context as AuthContext } from "../../context/authContext";

export default () => {
	const { state, signin } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/tesco_logo.png")} />
			<Text style={styles.linkText}>New to Tesco? Register here</Text>
			<TextInput
				value={email}
				placeholder="Email Address"
				style={styles.inputField}
				placeholderTextColor="#808080"
				onChangeText={setEmail}
			/>
			<TextInput
				value={password}
				placeholder="Password"
				style={styles.inputField}
				placeholderTextColor="#808080"
				onChangeText={setPassword}
			/>
			<Text style={styles.linkText}>Forgotten password?</Text>
			<Button
				buttonStyle={commonStyles.PrimaryButton}
				textStyle={commonStyles.PrimaryButtonText}
				text="SignIn"
				onClick={() => signin(email, password)}
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
