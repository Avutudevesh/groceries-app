import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SuperDepartmentScreen from "../screens/browse/SuperDepartmentsScreen";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SuperDepartment"
				component={SuperDepartmentScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
