import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { colors, commonStyles } from "../theme";

export default ({ title, subTitle }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={commonStyles.Text_H5}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>
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
		marginHorizontal: 20,
	},
	subTitle: {
		textAlign: "center",
		color: colors.subHeadingColor,
		marginVertical: 10,
	},
});
