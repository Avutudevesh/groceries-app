import React, { useEffect, useState } from "react";
import mangoApi, { queries } from "../../api";
import PLPList from "../PLPList";
import BasketEmpty from "./BasketEmpty";
import MiniBasket from "./MiniBasket";

export default () => {
	const [results, setResults] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [guidePrice, setGuidePrice] = useState(0);
	const basketApi = async () => {
		try {
			const response = await mangoApi.post("/q/", {
				query: queries.UPDATE_ITEMS,
			});
			const productItems = response.data.data.basket.items.map((item) => {
				return item.product;
			});
			setGuidePrice(response.data.data.basket.guidePrice);
			setTotalItems(productItems.length);
			setResults(productItems);
		} catch (e) {
			console.log(e.response);
		}
	};
	useEffect(() => {
		basketApi();
	});
	if (results.length != 0) {
		return (
			<>
				<MiniBasket totalItems={totalItems} guidePrice={guidePrice} />
				<PLPList productItems={results} />
			</>
		);
	}
	return <BasketEmpty />;
};
