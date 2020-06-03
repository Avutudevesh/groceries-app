import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
	PrimaryButton: {
		paddingVertical: 12,
		paddingHorizontal: 80,
		marginVertical: 5,
		backgroundColor: colors.primary,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: colors.primary,
	},
	PrimaryButtonText: {
		color: colors.primaryBackground,
		textAlign: "center",
		fontWeight: "bold",
	},
	SecondaryButton: {
		paddingVertical: 12,
		marginHorizontal: 10,
		marginVertical: 5,
		paddingHorizontal: 80,
		backgroundColor: colors.primaryBackground,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: colors.primary,
	},
	SecondaryButtonText: {
		color: colors.primary,
		textAlign: "center",
		fontWeight: "bold",
	},
	PrimaryButtonSmall: {
		paddingVertical: 8,
		paddingHorizontal: 20,
		marginVertical: 5,
		backgroundColor: colors.primary,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: colors.primary,
		width: 110,
	},
	Text_H3: {
		fontSize: 24,
		fontWeight: "bold",
	},
	Text_H4: {
		fontSize: 20,
		fontWeight: "bold",
	},
	Text_H5: {
		fontSize: 16,
		fontWeight: "bold",
	},
	Text_H6: {
		fontSize: 14,
		fontWeight: "bold",
	},
	Text_T2: {
		fontSize: 16,
	},
	Text_T4: {
		fontSize: 12,
	},
	Header_Text: {
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
	},
});
