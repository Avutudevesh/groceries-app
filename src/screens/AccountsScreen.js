import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/authContext";
import { commonStyles, colors } from "../theme";

export default () => {
	const { state, signout } = useContext(AuthContext);
	if (state.access_token) {
		return (
			<TouchableOpacity
				onPress={() => {
					signout();
				}}
				style={styles.container}
			>
				<MaterialIcons name="exit-to-app" size={24} color={colors.primary} />
				<Text style={styles.text}>Sign Out</Text>
			</TouchableOpacity>
		);
	}

	return <Text>Login to access your account.</Text>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.primaryBackground,
		padding: 20,
	},
	text: {
		...commonStyles.Text_H5,
		color: colors.primary,
		marginLeft: 10,
	},
});
