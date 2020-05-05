import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import styles from "../styles";

const HomeScreen = () => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<Button
				buttonStyle={styles.PrimaryButton}
				textStyle={styles.PrimaryButtonText}
				text="SignIn"
			/>
			<Button
				buttonStyle={styles.SecondaryButton}
				textStyle={styles.SecondaryButtonText}
				text="Register"
			/>
		</View>
	);
};

export default HomeScreen;
