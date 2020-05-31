import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DepartmentScreen from "../screens/browse/DepartmentScreen";
import AisleScreen from "../screens/browse/AisleScreen";
import ShelfScreen from "../screens/browse/ShelfScreen";
import ShelfPLPScreen from "../screens/browse/ShelfPLPScreen";
import { colors } from "../theme";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Department"
				component={DepartmentScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Aisle"
				component={AisleScreen}
				options={browseScreensOptions}
			/>
			<Stack.Screen
				name="Shelf"
				component={ShelfScreen}
				options={browseScreensOptions}
			/>
			<Stack.Screen
				name="ShelfPLP"
				component={ShelfPLPScreen}
				options={browseScreensOptions}
			/>
		</Stack.Navigator>
	);
};

const browseScreensOptions = {
	headerStyle: {
		backgroundColor: colors.primary,
	},
	headerTintColor: colors.primaryBackground,
	headerTitleStyle: {
		fontWeight: "bold",
	},
	headerBackTitleVisible: false,
};
