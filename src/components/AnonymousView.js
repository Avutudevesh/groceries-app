import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import commonStyles from "../styles";

export default ({ title, subTitle }) => {
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>{title}</Text>
			<Text style={{ textAlign: "center" }}>{subTitle}</Text>
			<Button
				buttonStyle={commonStyles.PrimaryButton}
				textStyle={commonStyles.PrimaryButtonText}
				text="SignIn"
			/>
			<Button
				buttonStyle={commonStyles.SecondaryButton}
				textStyle={commonStyles.SecondaryButtonText}
				text="Register"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
});
