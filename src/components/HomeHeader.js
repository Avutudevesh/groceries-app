import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default () => {
	return (
		<View style={styles.container}>
			<Image source={require("../../assets/tesco_logo.png")} style={{}} />
			<MaterialCommunityIcons
				name="account-outline"
				size={35}
				color="#00539F"
				style={{ flex: 1, textAlign: "right" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "stretch",
		flexDirection: "row",
		paddingTop: 30,
		paddingLeft: 15,
		backgroundColor: "white",
		elevation: 10,
		paddingBottom: 5,
	},
});
