import React, { useContext } from "react";
import PLPList from "../PLPList";
import BasketEmpty from "./BasketEmpty";
import MiniBasket from "./MiniBasket";
import commonStyles from "../../styles";
import Button from "../Button";
import { Context as BasketItemsContext } from "../../context/basketItemsContext";

export default () => {
	const { state } = useContext(BasketItemsContext);
	if (state.items.length != 0) {
		return (
			<>
				<MiniBasket totalItems={0} guidePrice={0} />
				<Button
					buttonStyle={commonStyles.SecondaryButton}
					textStyle={commonStyles.SecondaryButtonText}
					text="Book a slot"
				/>
				{console.log(state.items)}
				<PLPList productItems={state.items} />
			</>
		);
	}
	return (
		<>
			<MiniBasket totalItems={0} guidePrice={0} />
			<Button
				buttonStyle={commonStyles.SecondaryButton}
				textStyle={commonStyles.SecondaryButtonText}
				text="Book a slot"
			/>
			<BasketEmpty />
		</>
	);
};
