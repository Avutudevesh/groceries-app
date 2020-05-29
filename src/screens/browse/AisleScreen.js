import React from "react";
import BrowseList from "../../components/browse/BrowseList";
import query from "../../graphql/TaxonomyForCategory";
import useResults from "../../hooks/useResults";

export default ({ route, navigation }) => {
	const { _id, id, name } = route.params;
	navigation.setOptions({ title: name });
	const { loading, error, data } = useResults(query, {
		id: _id,
	});

	const onItemSelected = (item) => {
		navigation.navigate("AislePLP", {
			id: item.id,
			name: item.name,
		});
	};
	return (
		<BrowseList
			results={data ? data.data.subcategories : []}
			onItemSelected={onItemSelected}
			isLoading={loading}
			isError={error}
		/>
	);
};
