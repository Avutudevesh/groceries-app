import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import commonStyles from "../styles";

export default ({ product }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: product.defaultImageUrl,
				}}
				style={styles.imageStyle}
			/>
			<View>
				<Text
					style={styles.productTitle}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{product.title}
				</Text>
				<View>
					<View style={styles.priceViewStyle}>
						<Text style={commonStyles.Text_H5}>£{product.price.actual}</Text>
						<Text
							style={commonStyles.Text_T4}
						>{`£${product.price.actual}/${product.price.unitOfMeasure}`}</Text>
					</View>
					<Button
						text="Add"
						textStyle={commonStyles.PrimaryButtonText}
						buttonStyle={commonStyles.PrimaryButtonSmall}
					/>
				</View>
			</View>
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
		elevation: 4,
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
});
