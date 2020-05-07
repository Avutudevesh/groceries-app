import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import AnonymousWelcomeCard from "../components/AnonymousWelcomeCard";
import { FontAwesome5 } from "@expo/vector-icons";
import commonStyles from "../styles";
import ProductCarousel from "../components/ProductCarousel";
import mangoApi, { queries } from "../api";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
	const [result, setResults] = useState([]);
	const specialOfferApi = async () => {
		try {
			const result = await mangoApi.post("/q/", {
				query: queries.GET_PRODUCTS_FOR_PROMOTION_TYPE_QUERY,
				variables: {
					promotionType: "halfprice",
					count: 24,
				},
			});
			setResults(result.data.data.promotionType.productItems);
		} catch (err) {
			if (err.response) {
				console.log(err.response);
			}
		}
	};
	useEffect(() => {
		specialOfferApi();
	}, []);
	return (
		<View>
			<HomeHeader />
			<ScrollView>
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
				<ProductCarousel productItems={result} />
			</ScrollView>
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
