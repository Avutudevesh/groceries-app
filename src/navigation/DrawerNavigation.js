import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigation from "./MainNavigation";

const Drawer = createDrawerNavigator();

export default () => {
	return (
		<Drawer.Navigator initialRouteName="Main">
			<Drawer.Screen name="Main" component={MainNavigation} />
		</Drawer.Navigator>
	);
};
