import React, { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import BasketAnonymous from "../components/basket/BasketAnonymous";
import BasketPLP from "../components/basket/BasketPLP";
import { View, Text } from "react-native";
import HeaderContainer from "../components/headers/HeaderContainer";
import { commonStyles } from "../theme";

const BasketScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<HeaderContainer>
				<Text style={commonStyles.Header_Text}>Favourites</Text>
			</HeaderContainer>
			{state.access_token ? <BasketPLP /> : <BasketAnonymous />}
		</View>
	);
};

export default BasketScreen;
