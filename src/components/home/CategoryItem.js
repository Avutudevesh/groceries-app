import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default ({ item }) => {
	const navigation = useNavigation();
	const onItemSelected = () => {
		navigation.navigate("Browse", {
			screen: "Department",
			params: { _id: item._id, id: item.id, name: item.name },
		});
	};
	return (
		<TouchableOpacity onPress={onItemSelected}>
			<View style={styles.container}>
				<Image source={{ uri: item.iconImage }} style={styles.imageStyle} />
				<Text style={styles.textStyle}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		alignItems: "center",
		margin: 10,
		width: 112,
		borderWidth: 5,
		borderColor: colors.primary,
		borderRadius: 3,
	},
	imageStyle: {
		height: 100,
		width: 110,
		backgroundColor: "white",
	},
	textStyle: {
		fontSize: 14,
		fontWeight: "bold",
		padding: 10,
		color: "white",
	},
});
