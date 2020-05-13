import React, { useContext } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Context as BasketContext } from "../context/basketItemsContext";
import { colors, commonStyles } from "../theme";

export default ({ productItem }) => {
	const { addItemToBasket, removeItemFromBasket } = useContext(BasketContext);
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: productItem.product.defaultImageUrl,
				}}
				style={styles.imageStyle}
			/>
			<View style={{ marginHorizontal: 10, flex: 1 }}>
				<Text
					style={styles.productTitle}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{productItem.product.title}
				</Text>
				<View style={styles.priceViewStyle}>
					<View>
						<Text style={commonStyles.Text_H4}>
							£{productItem.product.price.actual}
						</Text>
						<Text
							style={commonStyles.Text_T4}
						>{`£${productItem.product.price.actual}/${productItem.product.price.unitOfMeasure}`}</Text>
					</View>
					{renderButton(productItem, addItemToBasket, removeItemFromBasket)}
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
		flex: 1,
		flexDirection: "row",
		backgroundColor: "white",
		paddingVertical: 10,
		marginVertical: 5,
		marginHorizontal: 3,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	imageStyle: {
		height: 100,
		width: 100,
		marginHorizontal: 15,
	},
	priceViewStyle: {
		flexDirection: "row",
		marginTop: 10,
	},
	productTitle: {
		...commonStyles.Text_H5,
		color: colors.primary,
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	quantityText: {
		...commonStyles.Text_H5,
		marginHorizontal: 15,
		marginTop: 8,
	},
});
