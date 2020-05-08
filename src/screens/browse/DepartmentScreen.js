import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import mangoApi, { queries } from "../../api";
import SuperDepartmentItem from "../../components/browse/SuperDepartmentItem";

export default ({ route, navigation }) => {
	const { id, name } = route.params;
	const [results, setResults] = useState([]);
	navigation.setOptions({ title: name });
	const departmentApi = async () => {
		try {
			const response = await mangoApi.post("/q/", {
				query: queries.TAXONOMY_FOR_CATEGORY,
				variables: {
					business: "grocery",
					categoryId: id,
				},
			});
			setResults(response.data.data.taxonomy[0].children);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		departmentApi();
	}, []);
	return (
		<View style={{ backgroundColor: "white" }}>
			<FlatList
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Aisle", { id: item.id, name: item.name })
							}
						>
							<SuperDepartmentItem item={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};
