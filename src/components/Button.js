import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default ({ buttonStyle, textStyle, text, onClick }) => {
	return (
		<TouchableOpacity style={buttonStyle} onPress={onClick}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};
