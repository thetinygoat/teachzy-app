import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllGroups from "../screens/AllGroupsScreen";
import Group from "../screens/GroupScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import TabNavigator from "./TabNavigator";
const GroupNavigator = createStackNavigator({
	Groups: {
		screen: AllGroups
	},
	Group: {
		screen: TabNavigator
	}
});

export default createAppContainer(GroupNavigator);
