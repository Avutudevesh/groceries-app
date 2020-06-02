import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors, commonStyles } from "../../theme";

export default ({ formState, dispatch }) => {
	return (
		<View>
			<Text style={styles.sectionHeading}>Personal details</Text>
			<TextInput
				value={formState.name}
				placeholder="Name*"
				style={styles.inputField}
				placeholderTextColor={colors.textInputPlaceholderColor}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(value) => dispatch({ name: value })}
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
		</View>
	);
};

const styles = StyleSheet.create({
	sectionHeading: {
		...commonStyles.Text_H5,
		marginBottom: 5,
	},

	inputField: {
		height: 50,
		borderColor: colors.textInputBackgroundColor,
		backgroundColor: "white",
		marginVertical: 10,
		borderWidth: 1,
		paddingLeft: 10,
	},
});
