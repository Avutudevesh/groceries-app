import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Feather,
	SimpleLineIcons,
	Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import FavouritesScreen from "./src/screens/FavouritesScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import BasketScreen from "./src/screens/BasketScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Tab = createBottomTabNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{ safeAreaInset: { top: "always" } }}>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: () => (
							<MaterialCommunityIcons name="home-outline" size={25} />
						),
					}}
				/>
				<Tab.Screen
					name="Favourites"
					component={FavouritesScreen}
					options={{
						tabBarIcon: () => (
							<MaterialCommunityIcons name="heart-outline" size={25} />
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarIcon: () => <Ionicons name="md-search" size={28} />,
					}}
				/>
				<Tab.Screen
					name="Orders"
					component={OrdersScreen}
					options={{
						tabBarIcon: () => <Feather name="briefcase" size={25} />,
					}}
				/>
				<Tab.Screen
					name="Basket"
					component={BasketScreen}
					options={{
						tabBarIcon: () => <SimpleLineIcons name="basket" size={25} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};
export default App;
