import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import PLPList from "../PLPList";
import { Context as BasketContext } from "../../context/basketItemsContext";
import { Context as FavouritesContext } from "../../context/favouritesContext";
import { colors } from "../../theme";
import query from "../../graphql/GetFavourites";
import useResults from "../../hooks/useResults";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { state, setFavourites } = useContext(FavouritesContext);
	const { loading, error, data } = useResults(query);
	useEffect(() => {
		if (data) {
			setFavourites(data.data.favourites);
		}
	}, [data]);
	return (
		<>
			<Text
				style={{
					padding: 15,
					fontWeight: "bold",
					fontSize: 16,
					color: colors.subHeadingColor,
				}}
			>
				{`${state.favourites ? state.favourites.length : 0} products`}
			</Text>
			<PLPList
				productItems={data ? mergeLocalAttributes(state.favourites) : []}
				isLoading={loading}
				isError={error}
			/>
		</>
	);
};
