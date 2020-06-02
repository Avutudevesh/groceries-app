import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigation from "./MainNavigation";
import AccountDetailsScreen from "../screens/auth/AccountDetailsScreen";

const Drawer = createDrawerNavigator();

export default () => {
	return (
		<Drawer.Navigator initialRouteName="Main">
			<Drawer.Screen name="Main" component={MainNavigation} />
			<Drawer.Screen name="Account Details" component={AccountDetailsScreen} />
		</Drawer.Navigator>
	);
};
