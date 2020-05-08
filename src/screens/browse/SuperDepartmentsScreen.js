import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import mangoApi, { queries } from "../../api";
import SuperDepartmentItem from "../../components/browse/SuperDepartmentItem";
import { Ionicons } from "@expo/vector-icons";

export default ({ navigation }) => {
	navigation.setOptions({
		headerLeft: () => {
			return (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="md-arrow-round-back"
						size={24}
						color="#fff"
						style={{ paddingLeft: 20 }}
					/>
				</TouchableOpacity>
			);
		},
	});
	const [results, setResults] = useState([]);
	const superDepartmentApi = async () => {
		try {
			const response = await mangoApi.post("/q/", {
				query: queries.TAXONOMY_SUPER_DEPARTMENT_QUERY,
				variables: {
					business: "grocery",
				},
			});
			setResults(response.data.data.taxonomy);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		superDepartmentApi();
	}, []);
	return (
		<View style={{ backgroundColor: "white" }}>
			<FlatList
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Department", {
									id: item.id,
									name: item.name,
								})
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
