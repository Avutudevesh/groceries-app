import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import commonStyles from "../styles";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ product }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: product.defaultImageUrl,
				}}
				style={styles.imageStyle}
			/>
			<View style={{ marginHorizontal: 10, flex: 1 }}>
				<Text
					style={styles.productTitle}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{product.title}
				</Text>
				<View style={styles.priceViewStyle}>
					<View>
						<Text style={commonStyles.Text_H4}>£{product.price.actual}</Text>
						<Text
							style={commonStyles.Text_T4}
						>{`£${product.price.actual}/${product.price.unitOfMeasure}`}</Text>
					</View>
					{/* <Button
						text="Add"
						textStyle={commonStyles.PrimaryButtonText}
						buttonStyle={commonStyles.PrimaryButtonSmall}
					/> */}
					{renderButtons()}
				</View>
			</View>
		</View>
	);
};

const renderButtons = () => {
	return (
		<View style={styles.buttonsContainer}>
			<MaterialIcons name="add-circle" size={40} color="#00539F" />
			<Text style={styles.quantityText}>1</Text>
			<MaterialIcons name="remove-circle" size={40} color="#00539F" />
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
		shadowColor: "#000",
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
		flex: 1,
		flexDirection: "row",
		marginTop: 10,
	},
	productTitle: {
		...commonStyles.Text_H5,
		color: "#00539F",
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	quantityText: {
		...commonStyles.Text_H3,
		marginHorizontal: 10,
		marginTop: 6,
	},
});
