import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { colors } from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default () => {
	const navigation = useNavigation();
	const [term, setTerm] = useState("");
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<FontAwesome
						name="bars"
						size={24}
						color="white"
						style={styles.iconStyle}
					/>
				</TouchableOpacity>
				<View>
					<Text style={styles.locationHeading}>Your Location</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.location}>Nellurhalli, Bangalore</Text>
						<EvilIcons name="pencil" size={18} color="white" />
					</View>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Account")}>
					<MaterialCommunityIcons
						name="account"
						size={24}
						color="white"
						style={styles.iconStyle}
					/>
				</TouchableOpacity>
			</View>

			<SearchBar
				placeholder="Search for a product"
				onChangeText={setTerm}
				onSubmitEditing={() => lazyFetchResults({ query: term })}
				value={term}
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.searchInputContainer}
				placeholderTextColor={colors.textInputPlaceholderColor}
				inputStyle={{ color: colors.textInputPlaceholderColor }}
			/>
		</View>
	);
};
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	topContainer: {
		flexDirection: "row",
		alignContent: "space-between",
		justifyContent: "space-between",
	},
	locationHeading: {
		color: "white",
		fontWeight: "bold",
		fontSize: 12,
	},
	location: {
		color: "white",
		fontSize: 12,
	},
	iconStyle: {
		paddingHorizontal: 20,
	},
	container: {
		backgroundColor: colors.primary,
		paddingTop: STATUSBAR_HEIGHT,
	},
	searchContainer: {
		backgroundColor: colors.primary,
		paddingHorizontal: 10,
		borderTopColor: colors.primary,
		borderBottomColor: colors.primary,
	},
	searchInputContainer: {
		backgroundColor: colors.primaryBackground,
	},
});
