import React, { useContext, useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { Context as BasketContext } from "../context/basketItemsContext";
import { Context as FavouritesContext } from "../context/favouritesContext";
import { colors, commonStyles } from "../theme";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import FavouritesModal from "./FavouritesModal";

export default ({ productItem }) => {
	const { addItemToBasket, removeItemFromBasket } = useContext(BasketContext);
	const {
		state,
		isItemInFavourites,
		addToFavourites,
		removeFromFavourites,
	} = useContext(FavouritesContext);
	const [modalVisibility, setModalVisibility] = useState(false);
	const [isFavouriteItem, setIsFavouriteItem] = useState(false);
	useEffect(() => {
		setIsFavouriteItem(isItemInFavourites(productItem.product._id));
	}, [state]);
	return (
		<View style={styles.container}>
			<FavouritesModal
				setModalVisibility={setModalVisibility}
				visible={modalVisibility}
				addToFavourites={addToFavourites}
				removeFromFavourites={removeFromFavourites}
				isFavouriteItem={isFavouriteItem}
				item={productItem.product}
			/>
			<Image
				source={{
					uri: productItem.product.imageUrl,
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
							{productItem.product.newPrice}
						</Text>
						<Text style={commonStyles.Text_T4}>
							{productItem.product.quantity}
						</Text>
					</View>
					{renderButton(productItem, addItemToBasket, removeItemFromBasket)}
				</View>
			</View>
			<TouchableOpacity onPress={() => setModalVisibility(true)}>
				<MaterialIcons
					name={isFavouriteItem ? "favorite" : "favorite-border"}
					size={24}
					color={colors.primary}
					style={{ marginHorizontal: 5, alignItems: "flex-end" }}
				/>
			</TouchableOpacity>
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
