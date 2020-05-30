import React, { useContext } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";
import { Context as BasketContext } from "../context/basketItemsContext";
import { colors, commonStyles } from "../theme";

export default ({ item }) => {
	const { addItemToBasket, removeItemFromBasket } = useContext(BasketContext);
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: item.product.imageUrl,
				}}
				style={styles.imageStyle}
			/>
			<View>
				<Text
					style={styles.productTitle}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{item.product.title}
				</Text>
				<View>
					<View style={styles.priceViewStyle}>
						<Text style={commonStyles.Text_H5}>{item.product.newPrice}</Text>
						<Text style={commonStyles.Text_T4}>{item.product.quantity}</Text>
					</View>
					{renderButton(item, addItemToBasket, removeItemFromBasket)}
				</View>
			</View>
		</View>
	);
};

const renderButton = (item, addClickAction, removeClickAction) => {
	if (item.quantity) {
		return (
			<View style={styles.buttonsContainer}>
				<TouchableOpacity onPress={() => removeClickAction(item)}>
					<Ionicons
						name="ios-remove-circle-outline"
						size={35}
						color={colors.primary}
					/>
				</TouchableOpacity>
				<Text style={styles.quantityText}>{item.quantity}</Text>
				<TouchableOpacity
					onPress={() => {
						addClickAction(item);
					}}
				>
					<Ionicons name="ios-add-circle" size={35} color={colors.primary} />
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.buttonsContainer}>
			<Button
				text="Add"
				textStyle={commonStyles.PrimaryButtonText}
				buttonStyle={commonStyles.PrimaryButtonSmall}
				onClick={() => {
					addClickAction(item);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingVertical: 10,
		marginVertical: 5,
		marginHorizontal: 5,
		width: 150,
		paddingHorizontal: 10,
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
		width: 100,
		marginHorizontal: 15,
		marginBottom: 10,
	},
	priceViewStyle: {
		marginVertical: 10,
	},
	productTitle: {
		...commonStyles.Text_H6,
		color: colors.primary,
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignContent: "center",
	},
	quantityText: {
		...commonStyles.Text_H5,
		marginHorizontal: 10,
		marginTop: 8,
	},
});
