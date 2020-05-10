import React, { useContext, useEffect } from "react";
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
import { Context as AuthContext } from "../context/authContext";
import { Context as BasketContext } from "../context/basketItemsContext";
import FulfilmentCard from "../components/home/FulfilmentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpecialOfferCarousel from "../components/home/SpecialOfferCarousel";
import FavouritesCarousel from "../components/home/FavouriesCarousel";

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
	const { fetchBasket, clearBasket } = useContext(BasketContext);
	useEffect(() => {
		console.log("Home Screen useEffect");
		if (state.access_token) {
			fetchBasket();
		} else {
			console.log("clean basket");
			clearBasket();
		}
	}, [state]);
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
				{state.access_token ? <FavouritesCarousel /> : null}
				<SpecialOfferCarousel />
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
