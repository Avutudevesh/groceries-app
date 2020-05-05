import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default ({ buttonStyle, textStyle, text }) => {
	return (
		<TouchableOpacity style={buttonStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};
