import { AsyncStorage } from "react-native";
import mangoApi from "../api";
import createDataContext from "./createDataContext";
import navigate from "../navigation/RootNavigation";
import authenticationQuery from "../graphql/Authenticate";
import createUserQuery from "../graphql/CreateUser";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signin_success":
			return {
				access_token: action.payload,
				signin_inprogress: false,
				signin_error: false,
			};
		case "signout":
			return { ...state, access_token: null };
		case "signin":
			return { ...state, signin_inprogress: true };
		case "signin_error":
			return { ...state, signin_inprogress: false, signin_error: true };
		default:
			return state;
	}
};

const registerUser = (dispatch) => async ({
	email,
	password,
	firstName,
	lastName,
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
				name: firstName + " " + lastName,
				phone,
				addressline1: addrline1,
				addressline2: addrline2,
				pincode,
				city,
				state,
			},
		});
		console.log(response.data.data.createUser.token);
		await AsyncStorage.setItem(
			"access_token",
			response.data.data.createUser.token
		);
		dispatch({
			type: "signin_success",
			payload: response.data.data.createUser.token,
		});
		navigate("BottomNavigation");
	} catch (err) {
		dispatch({ type: "signin_error" });
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
		dispatch({
			type: "signin_success",
			payload: response.data.data.login.token,
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
	dispatch({ type: "signin_success", payload: token });
	navigate("Drawer");
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, tryLocalSignIn, registerUser },
	{ access_token: null, signin_inprogress: false, signin_error: false }
);
