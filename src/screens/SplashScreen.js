import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import { Context as BasketItemsContext } from "../context/basketItemsContext";

const SplashScreen = ({ navigation }) => {
	const { state, tryLocalSignIn } = useContext(AuthContext);
	const { initialBasketSync } = useContext(BasketItemsContext);
	useEffect(() => {
		tryLocalSignIn();
	}, []);
	if (!state.signin_inprogress) {
		if (state.access_token) {
			initialBasketSync();
		} else {
			navigation.navigate("BottomNavigation");
		}
	}
	return null;
};

export default SplashScreen;
