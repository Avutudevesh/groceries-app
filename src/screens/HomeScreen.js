import React, { useContext, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import AnonymousWelcomeCard from "../components/home/AnonymousWelcomeCard";
import { Context as AuthContext } from "../context/authContext";
import { Context as BasketContext } from "../context/basketItemsContext";
import FulfilmentCard from "../components/home/FulfilmentCard";
import SpecialOfferCarousel from "../components/home/SpecialOfferCarousel";
import FavouritesCarousel from "../components/home/FavouriesCarousel";
import ShopByCategory from "../components/home/ShopByCategory";
import HeaderContainer from "../components/headers/HeaderContainer";
import { EvilIcons } from "@expo/vector-icons";
import { commonStyles } from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
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
			<HeaderContainer>
				{state.access_token ? (
					<TouchableOpacity
						onPress={() => navigation.navigate("Account Details")}
					>
						<View>
							<Text style={styles.locationHeading}>Your Location</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.location}>
									{state.account.address.city}, {state.account.address.state}
								</Text>
								<EvilIcons name="pencil" size={18} color="white" />
							</View>
						</View>
					</TouchableOpacity>
				) : (
					<Text style={commonStyles.Header_Text}>Home</Text>
				)}
			</HeaderContainer>
			<ScrollView style={{ marginBottom: 130 }}>
				{state.access_token ? <FulfilmentCard /> : <AnonymousWelcomeCard />}
				<ShopByCategory />
				{state.access_token ? <FavouritesCarousel /> : null}
				<SpecialOfferCarousel />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	locationHeading: {
		color: "white",
		fontWeight: "bold",
		fontSize: 12,
	},
	location: {
		color: "white",
		fontSize: 12,
	},
});

export default HomeScreen;
