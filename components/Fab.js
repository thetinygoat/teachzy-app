import React from "react";
import { FAB } from "react-native-paper";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { primaryColor, white } from "../constants/colors";

export default function Fab(props) {
	return (
		<FAB
			{...props}
			style={{
				position: "absolute",
				margin: 16,
				right: 0,
				bottom: Dimensions.get("window").height / 25
			}}
			icon={({ size }) => {
				return (
					<MaterialCommunityIcons name={"plus"} size={size} color={white} />
				);
			}}
		/>
	);
}
