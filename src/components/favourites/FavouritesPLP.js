import React, { useContext } from "react";
import { Text } from "react-native";
import PLPList from "../PLPList";
import { Context as BasketContext } from "../../context/basketItemsContext";
import { colors } from "../../theme";
import query from "../../graphql/GetFavourites";
import useResults from "../../hooks/useResults";

export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query, { count: 24 });
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
				{`${data ? data.data.favourites.productItems.length : 0} products`}
			</Text>
			<PLPList
				productItems={
					data ? mergeLocalAttributes(data.data.favourites.productItems) : []
				}
				isLoading={loading}
				isError={error}
			/>
		</>
	);
};
