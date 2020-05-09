import React, { useContext } from "react";
import PrimaryToolBar from "../components/PrimaryToolBar";
import { Context as AuthContext } from "../context/authContext";
import FavouritesAnonymous from "../components/favourites/FavouritesAnoymous";
import FavouritesPLP from "../components/favourites/FavouritesPLP";
import { View } from "react-native";

const FavouritesScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Favourites" />
			{state.access_token ? <FavouritesPLP /> : <FavouritesAnonymous />}
		</View>
	);
};

export default FavouritesScreen;
