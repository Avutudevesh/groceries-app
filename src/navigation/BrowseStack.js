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
				options={{
					headerStyle: {
						backgroundColor: "#00539F",
					},
					headerTintColor: "#fff",
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
						backgroundColor: "#00539F",
					},
					headerTintColor: "#fff",
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
						backgroundColor: "#00539F",
					},
					headerTintColor: "#fff",
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
						backgroundColor: "#00539F",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerBackTitleVisible: false,
				}}
			/>
		</Stack.Navigator>
	);
};
