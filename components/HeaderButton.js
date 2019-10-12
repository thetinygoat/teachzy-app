import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomHeaderButton = props => {
	return (
		<HeaderButton
			{...props}
			IconComponent={MaterialCommunityIcons}
			iconSize={25}
			color={"#11d3c1"}
		/>
	);
};

export default CustomHeaderButton;
