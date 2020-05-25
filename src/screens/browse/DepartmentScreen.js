import React from "react";
import BrowseList from "../../components/browse/BrowseList";
import useResults from "../../hooks/useResults";
import query from "../../graphql/TaxonomyForCategory";

export default ({ route, navigation }) => {
	const { id, name } = route.params;
	navigation.setOptions({ title: name });

	const { loading, error, data } = useResults(query, {
		business: "grocery",
		categoryId: id,
	});

	const onItemSelected = (item) => {
		navigation.navigate("Aisle", { id: item.id, name: item.name });
	};
	return (
		<BrowseList
			results={data ? data.data.taxonomy[0].children : []}
			onItemSelected={onItemSelected}
			isLoading={loading}
			isError={error}
		/>
	);
};
