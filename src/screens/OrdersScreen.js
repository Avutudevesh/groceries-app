import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import OrdersAnonymous from "../components/orders/OrdersAnonymous";
import OrdersList from "../components/orders/OrdersList";
import HeaderContainer from "../components/headers/HeaderContainer";
import { commonStyles } from "../theme";

const OrdersScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<HeaderContainer>
				<Text style={commonStyles.Header_Text}>Orders</Text>
			</HeaderContainer>
			{state.access_token ? <OrdersList /> : <OrdersAnonymous />}
		</View>
	);
};

export default OrdersScreen;
