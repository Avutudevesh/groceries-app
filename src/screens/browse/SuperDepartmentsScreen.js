import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import mangoApi, { queries } from "../../api";
import { Ionicons } from "@expo/vector-icons";
import BrowseList from "../../components/browse/BrowseList";

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
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const superDepartmentApi = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.TAXONOMY_SUPER_DEPARTMENT_QUERY,
				variables: {
					business: "grocery",
				},
			});
			setResults(response.data.data.taxonomy);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
			console.log(err);
		}
	};
	useEffect(() => {
		superDepartmentApi();
	}, []);
	const onItemSelected = (item) => {
		navigation.navigate("Department", {
			id: item.id,
			name: item.name,
		});
	};
	return (
		<BrowseList
			results={results}
			onItemSelected={onItemSelected}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};
