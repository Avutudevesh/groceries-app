import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BrowseStack from "./BrowseStack";
import AccountsScreen from "../screens/AccountsScreen";
import { colors } from "../theme";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					header: () => null,
				}}
			/>
			<Stack.Screen
				name="Browse"
				component={BrowseStack}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Account"
				component={AccountsScreen}
				options={{
					headerStyle: {
						backgroundColor: colors.primary,
					},
					headerTintColor: colors.primaryBackground,
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerBackTitleVisible: false,
				}}
			/>
		</Stack.Navigator>
	);
};
