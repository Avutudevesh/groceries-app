import React, { useContext, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";
import { Context as BasketContext } from "../../context/basketItemsContext";
import { Context as FavouritesContext } from "../../context/favouritesContext";
import query from "../../graphql/GetFavourites";
import useResults from "../../hooks/useResults";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query);
	const { state, setFavourites } = useContext(FavouritesContext);

	useEffect(() => {
		if (data) {
			setFavourites(data.data.favourites);
		}
	}, [data]);

	return (
		<ProductCarousel
			title="Favourites"
			productItems={data ? mergeLocalAttributes(state.favourites) : []}
			isError={error}
			isLoading={loading}
			emptyStateTitle="No favourites"
			emptyStateSubTitle="Add to your favourites list by click on heart icon next to a product."
		/>
	);
};
