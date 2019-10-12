import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./navigation/TabNavigator";
import MainNavigator from "./navigation/MainNavigator";
import GroupNavigator from "./navigation/GroupNavigator";
import { Provider } from "react-native-paper";

export default function App() {
	return (
		<Provider>
			<MainNavigator />
		</Provider>
	);
}
