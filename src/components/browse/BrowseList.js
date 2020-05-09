import React from "react";
import {
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
} from "react-native";
import BrowseItem from "./BrowseItem";

export default ({ results, onItemSelected, isLoading, isError }) => {
	if (isLoading) {
		return <ActivityIndicator style={styles.loading} size="large" />;
	}
	return (
		<FlatList
			data={results}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity
						onPress={() => {
							onItemSelected(item);
						}}
					>
						<BrowseItem item={item} />
					</TouchableOpacity>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
