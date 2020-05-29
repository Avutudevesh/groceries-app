import React, { useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import { Context as BasketContext } from "../../context/basketItemsContext";
import query from "../../graphql/GetFavourites";
import useResults from "../../hooks/useResults";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query);

	return (
		<ProductCarousel
			title="Favourites"
			productItems={data ? data.data.favourites : []}
			isError={error}
			isLoading={loading}
		/>
	);
};
