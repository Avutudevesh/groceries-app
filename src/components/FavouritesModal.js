import React from "react";
import { Modal, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export default ({
	setModalVisibility,
	visible,
	addToFavourites,
	item,
	removeFromFavourites,
	isFavouriteItem,
}) => {
	console.log(item);
	return (
		<Modal visible={visible} transparent={true} style={styles.modalView}>
			<View style={styles.modalView}>
				<TouchableOpacity
					onPress={() => {
						if (isFavouriteItem) {
							removeFromFavourites(item);
							setModalVisibility(false);
						} else {
							addToFavourites(item);
							setModalVisibility(false);
						}
					}}
				>
					<Text style={styles.modalButton}>
						{isFavouriteItem ? "Remove from favourites" : "Add to favourite"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setModalVisibility(false)}>
					<Text style={styles.modalButton}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalButton: {
		color: colors.primary,
	},
	modalView: {
		margin: 20,
		marginTop: 300,
		backgroundColor: "white",
		justifyContent: "center",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		alignContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
