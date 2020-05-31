import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as BasketItemsProvider } from "./src/context/basketItemsContext";
import { navigationRef } from "./src/navigation/RootNavigation";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { colors } from "./src/theme";

const App = () => {
	const Root = createStackNavigator();

	return (
		<Root.Navigator>
			<Root.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Root.Screen
				name="Drawer"
				component={DrawerNavigation}
				options={{ headerShown: false }}
			/>
			<Root.Screen
				name="Search"
				component={SearchScreen}
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

export default () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<BasketItemsProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BasketItemsProvider>
		</NavigationContainer>
	);
};
