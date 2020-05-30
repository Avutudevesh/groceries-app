import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BrowseList from "../../components/browse/BrowseList";
import useResults from "../../hooks/useResults";
import query from "../../graphql/TaxonomyDepartments";

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

	const { loading, error, data } = useResults(query, { business: "grocery" });
	const onItemSelected = (item) => {
		navigation.navigate("Department", {
			id: item.id,
			name: item.name,
		});
	};
	console.log(data);
	return (
		<BrowseList
			results={data ? data.data.departments : null}
			onItemSelected={onItemSelected}
			isLoading={loading}
			isError={error}
		/>
	);
};
