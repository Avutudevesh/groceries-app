import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import SignInScreen from "../screens/auth/SignInScreen";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import { colors } from "../theme";
export default () => {
	const Root = createStackNavigator();
	return (
		<Root.Navigator>
			<Root.Screen
				name="BottomNavigation"
				component={BottomNavigation}
				options={{ headerShown: false }}
			/>
			<Root.Screen
				name="SignIn"
				component={SignInScreen}
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
			<Root.Screen
				name="Register"
				component={RegistrationScreen}
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
		</Root.Navigator>
	);
};
