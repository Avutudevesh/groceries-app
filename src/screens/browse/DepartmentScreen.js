import React from "react";
import BrowseList from "../../components/browse/BrowseList";
import useResults from "../../hooks/useResults";
import query from "../../graphql/TaxonomyDepartments";
import { commonStyles } from "../../theme";
import { View, Text } from "react-native";
import HeaderContainer from "../../components/headers/HeaderContainer";

export default ({ navigation }) => {
	const { loading, error, data } = useResults(query);
	const onItemSelected = (item) => {
		navigation.navigate("Aisle", {
			_id: item._id,
			id: item.id,
			name: item.name,
		});
	};
	return (
		<View style={{ flex: 1 }}>
			<HeaderContainer>
				<Text style={commonStyles.Header_Text}>Shop by caterory</Text>
			</HeaderContainer>
			<BrowseList
				results={data ? data.data.departments : null}
				onItemSelected={onItemSelected}
				isLoading={loading}
				isError={error}
			/>
		</View>
	);
};
