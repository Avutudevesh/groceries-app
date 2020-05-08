import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
	MaterialCommunityIcons,
	Feather,
	SimpleLineIcons,
	Ionicons,
} from "@expo/vector-icons";
import FavouritesScreen from "./src/screens/FavouritesScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import BasketScreen from "./src/screens/BasketScreen";
import SearchScreen from "./src/screens/SearchScreen";
import HomeStack from "./src/navigation/HomeStack";
import SignInScreen from "./src/screens/auth/SignInScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { navigationRef } from "./src/navigation/RootNavigation";
import SplashScreen from "./src/screens/SplashScreen";

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#00539F",
				inactiveTintColor: "black",
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home-outline"
							size={25}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="heart-outline"
							size={25}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="md-search" size={28} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Orders"
				component={OrdersScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name="briefcase" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Basket"
				component={BasketScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<SimpleLineIcons name="basket" size={25} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Root = createStackNavigator();
const App = () => {
	return (
		<Root.Navigator>
			<Root.Screen name="SplashScreen" component={SplashScreen} />
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
						backgroundColor: "#00539F",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			/>
		</Root.Navigator>
	);
};
export default () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</NavigationContainer>
	);
};
