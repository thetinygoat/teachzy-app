import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chat() {
	return (
		<View style={styles.container}>
			<Text>Chat Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
