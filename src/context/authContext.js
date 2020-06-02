import { AsyncStorage } from "react-native";
import mangoApi from "../api";
import createDataContext from "./createDataContext";
import navigate from "../navigation/RootNavigation";
import authenticationQuery from "../graphql/Authenticate";
import createUserQuery from "../graphql/CreateUser";
import editAccountQuery from "../graphql/EditAccount";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signin_success":
			return {
				access_token: action.payload.token,
				account: action.payload.account,
				signin_inprogress: false,
				signin_error: false,
			};
		case "signout":
			return { ...state, access_token: null, account: null };
		case "signin":
			return { ...state, signin_inprogress: true };
		case "signin_error":
			return { ...state, signin_inprogress: false, signin_error: true };
		case "account_details":
			return {
				...state,
				account: action.payload,
				account_update_inprogress: false,
			};
		case "account_loading":
			return { ...state, account_update_inprogress: true };
		case "account_error":
			return {
				...state,
				account_update_inprogress: false,
				account_update_error: true,
			};
		default:
			return state;
	}
};

const registerUser = (dispatch) => async ({
	email,
	password,
	name,
	phone,
	addrline1,
	addrline2,
	city,
	state,
	pincode,
}) => {
	try {
		dispatch({ type: "signin" });
		const response = await mangoApi.post("/", {
			query: createUserQuery,
			variables: {
				email,
				password,
				name,
				phone,
				addressline1: addrline1,
				addressline2: addrline2,
				pincode,
				city,
				state,
			},
		});
		await AsyncStorage.setItem(
			"access_token",
			response.data.data.createUser.token
		);
		await AsyncStorage.setItem(
			"account",
			JSON.stringify(response.data.data.createUser.account)
		);
		dispatch({
			type: "signin_success",
			payload: response.data.data.createUser,
		});
		navigate("BottomNavigation");
	} catch (err) {
		dispatch({ type: "signin_error" });
		console.log(err);
	}
};

const editAccount = (dispatch) => async ({
	email,
	name,
	phone,
	addrline1,
	addrline2,
	city,
	state,
	pincode,
}) => {
	try {
		dispatch({ type: "account_loading" });
		const response = await mangoApi.post("/", {
			query: editAccountQuery,
			variables: {
				email,
				name,
				phone,
				addressline1: addrline1,
				addressline2: addrline2,
				pincode,
				city,
				state,
			},
		});
		await AsyncStorage.setItem(
			"account",
			JSON.stringify(response.data.data.editAccountDetails)
		);
		dispatch({
			type: "account_details",
			payload: response.data.data.editAccountDetails,
		});
		navigate("HomeScreen");
	} catch (err) {
		dispatch({ type: "account_error" });
		console.log(err);
	}
};

const signin = (dispatch) => async (email, password) => {
	try {
		dispatch({ type: "signin" });
		const response = await mangoApi.post("/", {
			query: authenticationQuery,
			variables: {
				email,
				password,
			},
		});
		console.log(response.data.data.login.token);
		await AsyncStorage.setItem("access_token", response.data.data.login.token);
		await AsyncStorage.setItem(
			"account",
			JSON.stringify(response.data.data.login.account)
		);
		dispatch({
			type: "signin_success",
			payload: response.data.data.login,
		});
		navigate("BottomNavigation");
	} catch (e) {
		dispatch({ type: "signin_error" });
		console.log(e);
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem("access_token");
	dispatch({ type: "signout" });
	console.log("signout");
	navigate("HomeScreen");
};

const tryLocalSignIn = (dispatch) => async () => {
	const token = await AsyncStorage.getItem("access_token");
	const accountJson = await AsyncStorage.getItem("account");
	const account = JSON.parse(accountJson);
	dispatch({ type: "signin_success", payload: { token, account } });
	navigate("Drawer");
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, tryLocalSignIn, registerUser, editAccount },
	{
		access_token: null,
		signin_inprogress: false,
		signin_error: false,
		account: null,
		account_update_inprogress: false,
		account_update_error: false,
	}
);
