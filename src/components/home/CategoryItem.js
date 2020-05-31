import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default ({ item }) => {
	const navigation = useNavigation();
	const onItemSelected = () => {
		navigation.navigate("Categories", {
			screen: "Aisle",
			params: { _id: item._id, id: item.id, name: item.name },
		});
	};
	return (
		<TouchableOpacity onPress={onItemSelected}>
			<View style={styles.container}>
				<View>
					<Image source={{ uri: item.iconImage }} style={styles.imageStyle} />
					<Text style={styles.textStyle}>{item.name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		margin: 10,
		width: 112,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	imageStyle: {
		height: 100,
		width: 110,
		backgroundColor: "white",
	},
	textStyle: {
		fontSize: 14,
		fontWeight: "bold",
		paddingTop: 10,
		color: colors.primary,
	},
});
