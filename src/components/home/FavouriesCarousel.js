import React, { useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import { Context as BasketContext } from "../../context/basketItemsContext";
import query from "../../graphql/GetFavourites";
import useResults from "../../hooks/useResults";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query, { count: 24 });

	return (
		<ProductCarousel
			title="Favourites"
			productItems={
				data ? mergeLocalAttributes(data.data.favourites.productItems) : []
			}
			isError={error}
			isLoading={loading}
		/>
	);
};
