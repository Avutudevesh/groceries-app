import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import commonStyles from "../styles";
import { useNavigation } from "@react-navigation/native";

export default ({ title, subTitle }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>{title}</Text>
			<Text style={{ textAlign: "center" }}>{subTitle}</Text>
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
					navigation.navigate("SignIn");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
});
