import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors, commonStyles } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Browse")}>
			<View style={styles.browseContainer}>
				<FontAwesome5
					name="compass"
					size={24}
					color={colors.primary}
					style={{ marginHorizontal: 15 }}
				/>
				<Text style={{ ...commonStyles.Text_H5, color: colors.primary }}>
					Browse all groceries
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	browseContainer: {
		marginVertical: 20,
		paddingVertical: 10,
		backgroundColor: "white",
		flexDirection: "row",
	},
});
