import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./src/screens/auth/SignInScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as BasketItemsProvider } from "./src/context/basketItemsContext";
import { navigationRef } from "./src/navigation/RootNavigation";
import SplashScreen from "./src/screens/SplashScreen";
import { colors } from "./src/theme";
import BottomNavigation from "./src/navigation/BottomNavigation";

const Root = createStackNavigator();
const App = () => {
	return (
		<Root.Navigator>
			<Root.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
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
