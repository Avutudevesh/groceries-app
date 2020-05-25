import React, { useContext } from "react";
import ProductCarousel from "../ProductCarousel";
import query from "../../graphql/GetProductsForPromotionType";
import { Context as BasketContext } from "../../context/basketItemsContext";
import useResults from "../../hooks/useResults";
export default () => {
	const { mergeLocalAttributes } = useContext(BasketContext);
	const { loading, error, data } = useResults(query, {
		promotionType: "all",
		count: 24,
	});
	return (
		<ProductCarousel
			title="Special Offers"
			productItems={
				data ? mergeLocalAttributes(data.data.promotionType.productItems) : []
			}
			isError={error}
			isLoading={loading}
		/>
	);
};
