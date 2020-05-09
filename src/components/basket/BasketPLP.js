import React, { useEffect, useState } from "react";
import mangoApi, { queries } from "../../api";
import PLPList from "../PLPList";
import BasketEmpty from "./BasketEmpty";
import MiniBasket from "./MiniBasket";
import commonStyles from "../../styles";
import Button from "../Button";

export default () => {
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
		basketApi();
	}, []);
	if (results.length != 0) {
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
				<PLPList productItems={results} />
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
