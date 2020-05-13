import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Feather,
	SimpleLineIcons,
	Ionicons,
} from "@expo/vector-icons";
import FavouritesScreen from "../screens/FavouritesScreen";
import OrdersScreen from "../screens/OrdersScreen";
import BasketScreen from "../screens/BasketScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeStack from "./HomeStack";
import { colors } from "../theme";

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.black,
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

export default BottomNavigation;
