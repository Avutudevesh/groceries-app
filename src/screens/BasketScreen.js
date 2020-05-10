import React, { useContext } from "react";
import PrimaryToolBar from "../components/PrimaryToolBar";
import { Context as AuthContext } from "../context/authContext";
import BasketAnonymous from "../components/basket/BasketAnonymous";
import BasketPLP from "../components/basket/BasketPLP";
import { View } from "react-native";

const BasketScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Basket" />
			{state.access_token ? <BasketPLP /> : <BasketAnonymous />}
		</View>
	);
};

export default BasketScreen;
