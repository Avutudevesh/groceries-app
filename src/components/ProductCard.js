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
			<View style={{ marginHorizontal: 10 }}>
				<Text style={styles.productTitle}>{product.title}</Text>
				<View style={styles.priceViewStyle}>
					<View style={{ marginRight: 40 }}>
						<Text style={commonStyles.Text_H4}>£{product.price.actual}</Text>
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
		flexDirection: "row",
		marginTop: 10,
	},
	productTitle: {
		...commonStyles.Text_H5,
		color: "#00539F",
	},
});
