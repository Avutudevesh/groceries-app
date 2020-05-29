import React, { useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import query from "../../graphql/GetProductsForPromotionType";
import { Context as BasketContext } from "../../context/basketItemsContext";
import useResults from "../../hooks/useResults";
export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query);
	console.log(data);
	return (
		<ProductCarousel
			title="Special Offers"
			productItems={data ? data.data.specialOfferProducts : []}
			isError={error}
			isLoading={loading}
		/>
	);
};
