import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BrowseStack from "./BrowseStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerTitle: (props) => <LogoHeader {...props} />,
					headerRight: () => <ProfileHeader />,
				}}
			/>
			<Stack.Screen
				name="Browse"
				component={BrowseStack}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const LogoHeader = () => {
	return <Image source={require("../../assets/tesco_logo.png")} />;
};

const ProfileHeader = () => {
	return (
		<MaterialCommunityIcons
			name="account-outline"
			size={35}
			color="#00539F"
			style={{ marginRight: 10 }}
		/>
	);
};
