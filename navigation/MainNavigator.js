import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import GroupNavigator from "./GroupNavigator";
const MainNavigator = createDrawerNavigator({
	Groups: GroupNavigator
});

export default createAppContainer(MainNavigator);
