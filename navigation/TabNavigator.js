import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Chat, Attendance, Planner, Fees, Notes } from "../screens";
const TabNavigator = createMaterialBottomTabNavigator(
	{
		Message: {
			screen: Chat,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return (
						<MaterialIcons name={"chat"} size={25} color={tabinfo.tintColor} />
					);
				}
			}
		},
		Attendance: {
			screen: Attendance,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return (
						<MaterialCommunityIcons
							name={"calendar-plus"}
							size={25}
							color={tabinfo.tintColor}
						/>
					);
				}
			}
		},
		Planner: {
			screen: Planner,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return (
						<MaterialCommunityIcons
							name={"calendar-blank"}
							size={25}
							color={tabinfo.tintColor}
						/>
					);
				}
			}
		},
		Fees: {
			screen: Fees,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return (
						<MaterialIcons
							name={"attach-money"}
							size={25}
							color={tabinfo.tintColor}
						/>
					);
				}
			}
		},
		Notes: {
			screen: Notes,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return (
						<MaterialCommunityIcons
							name={"notebook"}
							size={25}
							color={tabinfo.tintColor}
						/>
					);
				}
			}
		}
	},
	{
		activeColor: "#11d3c1",
		inactiveColor: "grey",
		barStyle: { backgroundColor: "#ffffff" }
	}
);

export default TabNavigator;
