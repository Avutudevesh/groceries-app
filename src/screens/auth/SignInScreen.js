import React, { useContext, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	ActivityIndicator,
} from "react-native";
import Button from "../../components/Button";
import { Context as AuthContext } from "../../context/authContext";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { commonStyles, colors } from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => {
	const { state, signin } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text style={styles.linkText}>New to the App? Register here</Text>
			</TouchableOpacity>
			<TextInput
				value={email}
				placeholder="Email Address"
				style={styles.inputField}
				placeholderTextColor={colors.textInputPlaceholderColor}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<TextInput
				secureTextEntry={true}
				value={password}
				placeholder="Password"
				style={styles.inputField}
				placeholderTextColor={colors.textInputPlaceholderColor}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Text style={styles.linkText}>Forgotten password?</Text>
			{state.signin_error && (
				<Text style={styles.errorText}>
					Sorry something went wrong please try again.
				</Text>
			)}
			<Button
				buttonStyle={commonStyles.PrimaryButton}
				textStyle={commonStyles.PrimaryButtonText}
				text="SignIn"
				onClick={() => signin(email, password)}
				disabled={state.signin_inprogress ? true : false}
			/>
			<Dialog visible={state.signin_inprogress}>
				<DialogContent style={{ paddingVertical: 20 }}>
					<ActivityIndicator />
				</DialogContent>
			</Dialog>
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
		backgroundColor: colors.textInputBackgroundColor,
		marginVertical: 10,
		borderBottomWidth: 1,
		paddingLeft: 10,
	},
	linkText: {
		...commonStyles.Text_H5,
		color: colors.primary,
		marginVertical: 25,
	},
	errorText: {
		color: "red",
		paddingVertical: 15,
	},
});
