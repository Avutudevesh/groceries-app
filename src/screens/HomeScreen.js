import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AnonymousWelcomeCard from "../components/AnonymousWelcomeCard";
import { FontAwesome5 } from "@expo/vector-icons";
import commonStyles from "../styles";
import ProductCardHorizontal from "../components/ProductCardHorizontal";

const HomeScreen = () => {
	return (
		<View>
			<AnonymousWelcomeCard />
			<View style={styles.browseContainer}>
				<FontAwesome5
					name="compass"
					size={24}
					color="#00539F"
					style={{ marginHorizontal: 15 }}
				/>
				<Text style={{ ...commonStyles.Text_H5, color: "#00539F" }}>
					Browse all groceries
				</Text>
			</View>
			{/* <ProductCard /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	browseContainer: {
		marginVertical: 20,
		paddingVertical: 10,
		backgroundColor: "white",
		flexDirection: "row",
	},
});

export default HomeScreen;
