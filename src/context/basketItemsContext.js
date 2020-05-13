import createDataContext from "./createDataContext";
import mangoApi, { queries } from "../api";

const itemsReducer = (state, action) => {
	switch (action.type) {
		case "fetch_basket":
			return { items: action.payload };
		case "add_to_basket":
			return { items: action.payload };
		case "remove_from_basket":
			return { items: action.payload };
		case "clear_basket":
			return { items: [] };
		default:
			return state;
	}
};

const fetchBasket = (dispatch) => async () => {
	try {
		const response = await mangoApi.post("/q/", {
			query: queries.UPDATE_ITEMS,
		});
		dispatch({
			type: "fetch_basket",
			payload: response.data.data.basket.items,
		});
	} catch (e) {
		console.log(e);
	}
};

const clearBasket = (dispatch) => () => {
	dispatch({ type: "clear_basket" });
};

const mergeLocalAttributes = (dispatch, state) => (productItems) => {
	const mergedProductItems = productItems.map((item) => {
		const basketItem = state.items.find((ele) => {
			return ele.product.id === item.id;
		});
		if (basketItem) {
			return {
				product: item,
				quantity: basketItem.quantity,
				weight: basketItem.weight,
			};
		}
		return { product: item, quantity: 0, weight: 0 };
	});
	return mergedProductItems;
};

const addItemToBasket = (dispatch, state) => (item) => {
	let productInBasket = false;
	const updatedItems = state.items.map((ele) => {
		if (ele.product.id === item.product.id) {
			productInBasket = true;
			return { ...ele, quantity: ele.quantity + 1 };
		}
		return ele;
	});
	if (!productInBasket) {
		updatedItems.push({ ...item, quantity: item.quantity + 1 });
	}
	dispatch({ type: "add_to_basket", payload: updatedItems });
	updateItems(dispatch, item.product.id, item.quantity + 1, item.quantity);
};

const removeItemFromBasket = (dispatch, state) => (item) => {
	const updatedItems = state.items.map((ele) => {
		if (ele.product.id === item.product.id) {
			return { ...ele, quantity: ele.quantity - 1 };
		}
		return ele;
	});
	dispatch({ type: "remove_from_basket", payload: updatedItems });
	updateItems(dispatch, item.product.id, item.quantity - 1, item.quantity);
};

const updateItems = async (dispatch, id, newValue, oldValue) => {
	try {
		const response = await mangoApi.post("/q/", {
			query: queries.UPDATE_ITEMS,
			variables: {
				items: [
					{
						id,
						oldValue,
						newValue,
						oldUnitChoice: "pcs",
						newUnitChoice: "pcs",
					},
				],
			},
		});
		dispatch({
			type: "fetch_basket",
			payload: response.data.data.basket.items,
		});
	} catch (e) {
		console.log(e);
	}
};

export const { Context, Provider } = createDataContext(
	itemsReducer,
	{
		fetchBasket,
		mergeLocalAttributes,
		addItemToBasket,
		removeItemFromBasket,
		clearBasket,
	},
	{ items: [], guidePrice: 0 }
);
