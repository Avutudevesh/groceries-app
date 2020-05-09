import createDataContext from "./createDataContext";
import navigate from "../navigation/RootNavigation";
import mangoApi, { queries } from "../api";

const itemsReducer = (state, action) => {
	switch (action.type) {
		case "fetch_basket":
			return { items: action.payload };
		default:
			return state;
	}
};

const initialBasketSync = (dispatch) => async () => {
	try {
		const response = await mangoApi.post("/q/", {
			query: queries.UPDATE_ITEMS,
		});
		dispatch({
			type: "fetch_basket",
			payload: response.data.data.basket.items,
		});
		console.log(response.data.data.basket.items);
		navigate("BottomNavigation");
	} catch (e) {
		navigate("BottomNavigation");
		console.log(e);
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

export const { Context, Provider } = createDataContext(
	itemsReducer,
	{ fetchBasket, initialBasketSync },
	{ items: [] }
);
