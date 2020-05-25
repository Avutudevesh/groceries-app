import React, { useContext, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import AnonymousWelcomeCard from "../components/home/AnonymousWelcomeCard";
import { Context as AuthContext } from "../context/authContext";
import { Context as BasketContext } from "../context/basketItemsContext";
import FulfilmentCard from "../components/home/FulfilmentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpecialOfferCarousel from "../components/home/SpecialOfferCarousel";
import FavouritesCarousel from "../components/home/FavouriesCarousel";
import { colors } from "../theme";
import BrowseTile from "../components/home/BrowseTile";
import ShopByCategory from "../components/home/ShopByCategory";

const HomeScreen = (props) => {
	props.navigation.setOptions({
		headerRight: () => (
			<TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
				<MaterialCommunityIcons
					name="account-outline"
					size={35}
					color={colors.primary}
					style={{ marginRight: 10 }}
				/>
			</TouchableOpacity>
		),
	});
	const { state } = useContext(AuthContext);
	const { fetchBasket, clearBasket } = useContext(BasketContext);
	useEffect(() => {
		if (state.access_token) {
			fetchBasket();
		} else {
			clearBasket();
		}
	}, [state]);

	return (
		<View>
			<ScrollView>
				{state.access_token ? <FulfilmentCard /> : <AnonymousWelcomeCard />}
				<ShopByCategory />
				{state.access_token ? <FavouritesCarousel /> : null}
				<SpecialOfferCarousel />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
