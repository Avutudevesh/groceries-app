import React, { useContext } from "react";
import PrimaryToolBar from "../components/PrimaryToolBar";
import { Context as AuthContext } from "../context/authContext";
import BasketAnonymous from "../components/basket/BasketAnonymous";
import BasketPLP from "../components/basket/BasketPLP";
import { StatusBar, View } from "react-native";

const BasketScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
			<PrimaryToolBar title="Basket" />
			{state.access_token ? <BasketPLP /> : <BasketAnonymous />}
		</View>
	);
};

export default BasketScreen;
