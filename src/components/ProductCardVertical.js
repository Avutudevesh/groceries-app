import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Button from "./Button";
import commonStyles from "../styles";
import { Ionicons } from "@expo/vector-icons";

export default ({ item }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: item.product.defaultImageUrl,
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
						<Text style={commonStyles.Text_H5}>
							£{item.product.price.actual}
						</Text>
						<Text
							style={commonStyles.Text_T4}
						>{`£${item.product.price.actual}/${item.product.price.unitOfMeasure}`}</Text>
					</View>
					{renderButton(item.quantity)}
				</View>
			</View>
		</View>
	);
};

const renderButton = (quantity) => {
	if (quantity) {
		return (
			<View style={styles.buttonsContainer}>
				<Ionicons name="ios-remove-circle-outline" size={35} color="#00539F" />
				<Text style={styles.quantityText}>{quantity}</Text>
				<Ionicons name="ios-add-circle" size={35} color="#00539F" />
			</View>
		);
	}

	return (
		<View style={styles.buttonsContainer}>
			<Button
				text="Add"
				textStyle={commonStyles.PrimaryButtonText}
				buttonStyle={commonStyles.PrimaryButtonSmall}
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
		shadowColor: "#000",
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
		color: "#00539F",
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
