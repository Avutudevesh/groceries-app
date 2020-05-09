import React, { useEffect, useState, useContext } from "react";
import mangoApi, { queries } from "../../api";
import PLPList from "../PLPList";
import BasketEmpty from "./BasketEmpty";
import MiniBasket from "./MiniBasket";
import commonStyles from "../../styles";
import Button from "../Button";
import { Context as BasketItemsContext } from "../../context/basketItemsContext";

export default () => {
	const { state, fetchBasket } = useContext(BasketItemsContext);
	let productItems = state.items.map((item) => {
		return item.product;
	});
	const [results, setResults] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [guidePrice, setGuidePrice] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const basketApi = async () => {
		try {
			setIsLoading(true);
			const response = await mangoApi.post("/q/", {
				query: queries.UPDATE_ITEMS,
			});
			const productItems = response.data.data.basket.items.map((item) => {
				return item.product;
			});
			setGuidePrice(response.data.data.basket.guidePrice);
			setTotalItems(productItems.length);
			setResults(productItems);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
			setIsError(true);
			console.log(e.response);
		}
	};
	useEffect(() => {
		// basketApi();
	}, []);
	if (productItems.length != 0) {
		return (
			<>
				<MiniBasket
					totalItems={totalItems}
					guidePrice={guidePrice}
					isLoading={isLoading}
					isError={isError}
				/>
				<Button
					buttonStyle={commonStyles.SecondaryButton}
					textStyle={commonStyles.SecondaryButtonText}
					text="Book a slot"
				/>
				<PLPList productItems={productItems} />
			</>
		);
	}
	return (
		<>
			<MiniBasket
				totalItems={totalItems}
				guidePrice={guidePrice}
				isLoading={isLoading}
				isError={isError}
			/>
			<Button
				buttonStyle={commonStyles.SecondaryButton}
				textStyle={commonStyles.SecondaryButtonText}
				text="Book a slot"
			/>
			<BasketEmpty />
		</>
	);
};
