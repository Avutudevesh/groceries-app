import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SuperDepartmentScreen from "../screens/browse/SuperDepartmentsScreen";
import DepartmentScreen from "../screens/browse/DepartmentScreen";
import AisleScreen from "../screens/browse/AisleScreen";
import AislePLPScreen from "../screens/browse/AislePLPScreen";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SuperDepartment"
				component={SuperDepartmentScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Department"
				component={DepartmentScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Aisle"
				component={AisleScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AislePLP"
				component={AislePLPScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
