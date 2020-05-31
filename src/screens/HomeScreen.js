import React, { useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";
import AnonymousWelcomeCard from "../components/home/AnonymousWelcomeCard";
import { Context as AuthContext } from "../context/authContext";
import { Context as BasketContext } from "../context/basketItemsContext";
import FulfilmentCard from "../components/home/FulfilmentCard";
import SpecialOfferCarousel from "../components/home/SpecialOfferCarousel";
import FavouritesCarousel from "../components/home/FavouriesCarousel";
import ShopByCategory from "../components/home/ShopByCategory";
import SearchHeader from "../components/SearchHeader";

const HomeScreen = () => {
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
			<SearchHeader />
			<ScrollView style={{ marginBottom: 130 }}>
				{state.access_token ? <FulfilmentCard /> : <AnonymousWelcomeCard />}
				<ShopByCategory />
				{state.access_token ? <FavouritesCarousel /> : null}
				<SpecialOfferCarousel />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
