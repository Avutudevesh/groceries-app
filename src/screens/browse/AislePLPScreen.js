import React, { useContext } from "react";
import PLPList from "../../components/PLPList";
import { Context as BasketContext } from "../../context/basketItemsContext";
import query from "../../graphql/GetCategoryProducts";
import useResults from "../../hooks/useResults";

export default ({ route, navigation }) => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { id, name } = route.params;
	navigation.setOptions({ title: name });
	const { loading, error, data } = useResults(query, {
		shelfId: id,
	});

	return (
		<PLPList
			productItems={data ? data.data.categoryProducts : []}
			isLoading={loading}
			isError={error}
		/>
	);
};
