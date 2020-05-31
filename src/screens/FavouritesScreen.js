import React, { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import FavouritesAnonymous from "../components/favourites/FavouritesAnoymous";
import FavouritesPLP from "../components/favourites/FavouritesPLP";
import { View, Text } from "react-native";
import HeaderContainer from "../components/headers/HeaderContainer";
import { commonStyles } from "../theme";

const FavouritesScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<HeaderContainer>
				<Text style={commonStyles.Header_Text}>Favourites</Text>
			</HeaderContainer>
			{state.access_token ? <FavouritesPLP /> : <FavouritesAnonymous />}
		</View>
	);
};

export default FavouritesScreen;
