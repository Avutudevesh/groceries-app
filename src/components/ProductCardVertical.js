import React, { useContext, useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./Button";
import { Context as BasketContext } from "../context/basketItemsContext";
import { Context as FavouritesContext } from "../context/favouritesContext";
import { colors, commonStyles } from "../theme";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import FavouritesModal from "./FavouritesModal";

export default ({ item }) => {
	const {
		state,
		isItemInFavourites,
		addToFavourites,
		removeFromFavourites,
	} = useContext(FavouritesContext);
	const [modalVisibility, setModalVisibility] = useState(false);
	const { addItemToBasket, removeItemFromBasket } = useContext(BasketContext);
	const [isFavouriteItem, setIsFavouriteItem] = useState(false);
	useEffect(() => {
		setIsFavouriteItem(isItemInFavourites(item.product._id));
	}, [state]);
	return (
		<View style={styles.container}>
			<FavouritesModal
				setModalVisibility={setModalVisibility}
				visible={modalVisibility}
				addToFavourites={addToFavourites}
				removeFromFavourites={removeFromFavourites}
				isFavouriteItem={isFavouriteItem}
				item={item.product}
			/>
			<View style={{ flexDirection: "row" }}>
				<Image
					source={{
						uri: item.product.imageUrl,
					}}
					style={styles.imageStyle}
				/>
				<TouchableOpacity onPress={() => setModalVisibility(true)}>
					<MaterialIcons
						name={isFavouriteItem ? "favorite" : "favorite-border"}
						size={24}
						color={colors.primary}
					/>
				</TouchableOpacity>
			</View>
			<View>
				<Text
					style={styles.productTitle}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{item.product.title.replace("Grofers", "")}
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
					<AntDesign name="minussquareo" size={30} color={colors.primary} />
				</TouchableOpacity>
				<Text style={styles.quantityText}>{item.quantity}</Text>
				<TouchableOpacity
					onPress={() => {
						addClickAction(item);
					}}
				>
					<AntDesign name="plussquare" size={30} color={colors.primary} />
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
		justifyContent: "center",
	},
	quantityText: {
		...commonStyles.Text_H5,
		marginHorizontal: 10,
		marginTop: 5,
	},
});
