import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SuperDepartmentScreen from "../screens/browse/SuperDepartmentsScreen";
import DepartmentScreen from "../screens/browse/DepartmentScreen";
import AisleScreen from "../screens/browse/AisleScreen";
import AislePLPScreen from "../screens/browse/AislePLPScreen";
import { colors } from "../theme";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SuperDepartment"
				component={SuperDepartmentScreen}
				options={{
					headerStyle: {
						backgroundColor: colors.primary,
					},
					headerTintColor: colors.primaryBackground,
					headerTitleStyle: {
						fontWeight: "bold",
					},
					title: "Browse",
					headerBackTitleVisible: false,
				}}
			/>
			<Stack.Screen
				name="Department"
				component={DepartmentScreen}
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
			<Stack.Screen
				name="Aisle"
				component={AisleScreen}
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
			<Stack.Screen
				name="AislePLP"
				component={AislePLPScreen}
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
