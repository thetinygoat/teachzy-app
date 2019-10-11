import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllGroups from "../screens/AllGroupsScreen";
import Group from "../screens/GroupScreen";
import TabNavigator from "./TabNavigator";
const GroupNavigator = createStackNavigator({
	Groups: AllGroups,
	Group: {
		screen: TabNavigator
	}
});

export default createAppContainer(GroupNavigator);
