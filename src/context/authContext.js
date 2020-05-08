import { AsyncStorage } from "react-native";
import mangoApi from "../api";
import signInRequestBody from "../api/auth/signInRequest";
import createDataContext from "./createDataContext";
import keys from "../../keys";
import navigate from "../navigation/RootNavigation";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signin_success":
			return { access_token: action.payload };
		case "signout":
			return { access_token: null };
		default:
			return state;
	}
};

const signin = (dispatch) => async (email, password) => {
	try {
		const response = await mangoApi.post(
			"/api/v3/identify",
			signInRequestBody(email, password),
			{ headers: { "ighs-appkey": `${keys.IDENTITY_CLIENT_ID}` } }
		);
		console.log(response.data.access_token);
		await AsyncStorage.setItem("access_token", response.data.access_token);
		dispatch({ type: "signin_success", payload: response.data.access_token });
		navigate("BottomNavigation");
	} catch (e) {
		// dispatch({ type: "signin_error", payload: "Something went wrong" });
		console.log(e);
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem("access_token");
	dispatch({ type: "signout" });
	// navigate("loginFlow");
};

const tryLocalSignIn = (dispatch) => async () => {
	const token = await AsyncStorage.getItem("access_token");
	if (token) {
		dispatch({ type: "signin_success", payload: token });
	}
	navigate("BottomNavigation");
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, tryLocalSignIn },
	{ access_token: null }
);
