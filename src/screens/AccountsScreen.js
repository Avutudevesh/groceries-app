import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import commonStyles from "../styles";
import { Context as AuthContext } from "../context/authContext";

export default () => {
	const { signout } = useContext(AuthContext);
	return (
		<TouchableOpacity
			onPress={() => {
				signout();
			}}
			style={styles.container}
		>
			<MaterialIcons name="exit-to-app" size={24} color="#00539F" />
			<Text style={styles.text}>Sign Out</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 20,
	},
	text: {
		...commonStyles.Text_H5,
		color: "#00539F",
		marginLeft: 10,
	},
});
