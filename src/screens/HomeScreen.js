import React, { useEffect, useState, useContext } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import AnonymousWelcomeCard from "../components/AnonymousWelcomeCard";
import { FontAwesome5 } from "@expo/vector-icons";
import commonStyles from "../styles";
import ProductCarousel from "../components/ProductCarousel";
import mangoApi, { queries } from "../api";
import { Context as AuthContext } from "../context/authContext";
import FulfilmentCard from "../components/home/FulfilmentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
	navigation.setOptions({
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate("Account")}>
				<MaterialCommunityIcons
					name="account-outline"
					size={35}
					color="#00539F"
					style={{ marginRight: 10 }}
				/>
			</TouchableOpacity>
		),
	});
	const { state } = useContext(AuthContext);
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
			<ScrollView>
				{state.access_token ? <FulfilmentCard /> : <AnonymousWelcomeCard />}
				<TouchableOpacity onPress={() => navigation.navigate("Browse")}>
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
				</TouchableOpacity>
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
