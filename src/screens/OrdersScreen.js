import React, { useContext } from "react";
import { View } from "react-native";
import PrimaryToolBar from "../components/PrimaryToolBar";
import { Context as AuthContext } from "../context/authContext";
import OrdersAnonymous from "../components/orders/OrdersAnonymous";
import OrdersList from "../components/orders/OrdersList";

const OrdersScreen = () => {
	const { state } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<PrimaryToolBar title="Orders" />
			{state.access_token ? <OrdersList /> : <OrdersAnonymous />}
		</View>
	);
};

export default OrdersScreen;
