import React, { useReducer, useContext } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { colors, commonStyles } from "../../theme";
import Button from "../../components/Button";
import { Context as AuthContext } from "../../context/authContext";
import Dialog, { DialogContent } from "react-native-popup-dialog";

export default () => {
	const {
		state: { signin_inprogress, signin_error },
		registerUser,
	} = useContext(AuthContext);
	const reducer = (state, action) => {
		console.log(action);
		return { ...state, ...action };
	};
	const [formState, dispatch] = useReducer(reducer, {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		phone: "",
		addrline1: "",
		addrline2: "",
		city: "",
		state: "",
		pincode: "",
	});
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Create your account</Text>
				<Text style={styles.sectionHeading}>Account details</Text>
				<TextInput
					value={formState.email}
					placeholder="Email address*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ email: value })}
				/>
				<TextInput
					value={formState.password}
					secureTextEntry={true}
					placeholder="Create a password*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ password: value })}
				/>
				<Text style={styles.sectionHeading}>Personal details</Text>
				<TextInput
					value={formState.firstName}
					placeholder="First Name*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ firstName: value })}
				/>
				<TextInput
					value={formState.lastName}
					placeholder="Last Name*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ lastName: value })}
				/>
				<TextInput
					value={formState.phone}
					placeholder="Phone No.*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ phone: value })}
				/>
				<Text style={styles.sectionHeading}>Address details</Text>
				<TextInput
					value={formState.addrline1}
					placeholder="Address line 1*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ addrline1: value })}
				/>
				<TextInput
					value={formState.addrline2}
					placeholder="Address line 2"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ addrline2: value })}
				/>
				<TextInput
					value={formState.city}
					placeholder="City*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ city: value })}
				/>
				<TextInput
					value={formState.state}
					placeholder="State*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ state: value })}
				/>
				<TextInput
					value={formState.pincode}
					placeholder="Pin code*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ pincode: value })}
				/>
				{signin_error && (
					<Text style={styles.errorText}>
						Sorry something went wrong please try again.
					</Text>
				)}
				<Button
					buttonStyle={commonStyles.PrimaryButton}
					textStyle={commonStyles.PrimaryButtonText}
					text="Create account"
					onClick={() => registerUser(formState)}
				/>
				<Dialog visible={signin_inprogress}>
					<DialogContent style={{ paddingVertical: 20 }}>
						<ActivityIndicator />
					</DialogContent>
				</Dialog>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		...commonStyles.Text_H3,
		textAlign: "center",
		marginBottom: 10,
	},
	sectionHeading: {
		...commonStyles.Text_H5,
		marginBottom: 5,
	},
	container: {
		backgroundColor: "white",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	inputField: {
		height: 50,
		borderColor: colors.textInputBackgroundColor,
		backgroundColor: "white",
		marginVertical: 10,
		borderWidth: 1,
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
