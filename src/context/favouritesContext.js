import createDataContext from "./createDataContext";
import mangoApi from "../api";
import query from "../graphql/AddToFavourites";
import removeQuery from "../graphql/RemoveFromFavourites";

const favouritesReducer = (state, action) => {
	switch (action.type) {
		case "change_favourites":
			return { favourites: action.payload };
		case "set_favourites":
			return { favourites: action.payload };
		default:
			return state;
	}
};

const addToFavourites = (dispatch, state) => async (item) => {
	try {
		state.favourites.push(item);
		dispatch({
			type: "change_favourites",
			payload: state.favourites,
		});
		const response = await mangoApi.post("/", {
			query,
			variables: {
				_id: item._id,
			},
		});
		dispatch({
			type: "change_favourites",
			payload: response.data.data.addToFavourites,
		});
	} catch (e) {
		console.log(e);
	}
};

const removeFromFavourites = (dispatch, state) => async (item) => {
	try {
		const updatedFavourites = state.favourites.filter(
			(fav) => fav._id != item._id
		);
		dispatch({
			type: "change_favourites",
			payload: updatedFavourites,
		});
		const response = await mangoApi.post("/", {
			query: removeQuery,
			variables: {
				_id: item._id,
			},
		});
		dispatch({
			type: "change_favourites",
			payload: response.data.data.removeFromFavourites,
		});
	} catch (e) {
		console.log(e);
	}
};

const setFavourites = (dispatch, state) => (favourites) => {
	try {
		dispatch({ type: "set_favourites", payload: favourites });
	} catch (e) {
		console.log(e);
	}
};

const isItemInFavourites = (dispatch, state) => (_id) => {
	try {
		const item = state.favourites.find((fav) => fav._id == _id);
		console.log(_id);
		if (item) {
			return true;
		}
		return false;
	} catch (e) {
		console.log(e);
	}
};

export const { Context, Provider } = createDataContext(
	favouritesReducer,
	{ addToFavourites, setFavourites, isItemInFavourites, removeFromFavourites },
	{ favourites: [] }
);
