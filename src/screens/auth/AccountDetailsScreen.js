import React, { useContext, useReducer } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ActivityIndicator,
} from "react-native";
import AccountDetailsForm from "../../components/auth/AccountDetailsForm";
import { Context as AuthContext } from "../../context/authContext";
import { commonStyles, colors } from "../../theme";
import HeaderContainer from "../../components/headers/HeaderContainer";
import Button from "../../components/Button";
import Dialog, { DialogContent } from "react-native-popup-dialog";

export default () => {
	const {
		state: { token, account, account_update_inprogress, account_update_error },
		editAccount,
	} = useContext(AuthContext);
	if (!token) {
		return (
			<View>
				<HeaderContainer searchShown={false}>
					<Text style={styles.headerText}>Account Details</Text>
				</HeaderContainer>
				<Text>Login to view account details</Text>
			</View>
		);
	}
	const reducer = (state, action) => {
		return { ...state, ...action };
	};
	const [formState, dispatch] = useReducer(reducer, {
		email: account.email,
		name: account.name,
		phone: account.phone,
		addrline1: account.address.line1,
		addrline2: account.address.line2,
		city: account.address.city,
		state: account.address.state,
		pincode: account.address.pincode,
	});
	return (
		<View>
			<HeaderContainer searchShown={false}>
				<Text style={styles.headerText}>Account Details</Text>
			</HeaderContainer>
			<View style={styles.container}>
				<Text style={styles.title}>Account Details</Text>
				<TextInput
					value={formState.email}
					placeholder="Email address*"
					style={styles.inputField}
					placeholderTextColor={colors.textInputPlaceholderColor}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(value) => dispatch({ email: value })}
				/>
				<AccountDetailsForm formState={formState} dispatch={dispatch} />
				{account_update_error && (
					<Text style={styles.errorText}>
						Sorry something went wrong please try again.
					</Text>
				)}
				<Button
					buttonStyle={commonStyles.PrimaryButton}
					textStyle={commonStyles.PrimaryButtonText}
					text="Edit account"
					onClick={() => editAccount(formState)}
				/>
				<Dialog visible={account_update_inprogress}>
					<DialogContent style={{ paddingVertical: 20 }}>
						<ActivityIndicator />
					</DialogContent>
				</Dialog>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		...commonStyles.Text_H3,
		textAlign: "center",
		marginBottom: 10,
	},
	container: {
		backgroundColor: "white",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	headerText: {
		...commonStyles.Header_Text,
		paddingBottom: 20,
	},
	inputField: {
		height: 50,
		borderColor: colors.textInputBackgroundColor,
		backgroundColor: "white",
		marginVertical: 10,
		borderWidth: 1,
		paddingLeft: 10,
	},
	errorText: {
		color: "red",
		paddingVertical: 15,
	},
});
