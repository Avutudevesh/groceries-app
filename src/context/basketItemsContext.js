import createDataContext from "./createDataContext";
import mangoApi from "../api";
import query from "../graphql/UpdateBasket";
import fetchQuery from "../graphql/FetchBasket";

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
		const response = await mangoApi.post("/", {
			query: fetchQuery,
		});
		dispatch({
			type: "fetch_basket",
			payload: response.data.data.basket,
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
			return ele.product._id === item._id;
		});
		if (basketItem) {
			return {
				product: item,
				quantity: basketItem.quantity,
			};
		}
		return { product: item, quantity: 0 };
	});
	return mergedProductItems;
};

const addItemToBasket = (dispatch, state) => (item) => {
	console.log(item);
	let productInBasket = false;
	const updatedItems = state.items.map((ele) => {
		if (ele.product._id === item.product._id) {
			productInBasket = true;
			return { ...ele, quantity: ele.quantity + 1 };
		}
		return ele;
	});
	if (!productInBasket) {
		updatedItems.push({ ...item, quantity: item.quantity + 1 });
	}
	dispatch({ type: "add_to_basket", payload: updatedItems });
	updateItems(dispatch, item.product._id, item.quantity + 1);
};

const removeItemFromBasket = (dispatch, state) => (item) => {
	const updatedItems = state.items.map((ele) => {
		if (ele.product._id === item.product._id) {
			return { ...ele, quantity: ele.quantity - 1 };
		}
		return ele;
	});
	dispatch({ type: "remove_from_basket", payload: updatedItems });
	updateItems(dispatch, item.product._id, item.quantity - 1);
};

const updateItems = async (dispatch, _id, newValue) => {
	try {
		const response = await mangoApi.post("/", {
			query,
			variables: {
				quantity: newValue,
				_id,
			},
		});
		dispatch({
			type: "fetch_basket",
			payload: response.data.data.updateBasket,
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
